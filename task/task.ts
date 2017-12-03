namespace $ {

	export let $mol_task_current : $mol_task_state
	
	export class $mol_task_state< Result = any > {
		
		constructor(
			public handler : ()=> Result ,
		) {
			if( this.slave ) this.slave.master = this
		}

		slave = $mol_task_current
		masters = [] as $mol_task_state[]
		cursor = -1
		result : Result

		done( res : Result ) {
			this.result = res
			if( this.slave ) this.slave.notify()
		}

		error( error : any ) : Result {

			if( typeof error.then === 'function' ) {
				error.then(
					( val: any )=> this.done( val ) ,
					( error : any )=> this.done( this.error( error ) ) ,
				)
				error = new Error( 'Wait...' )
			}
	
			return new Proxy<Error>( error , {
				get() { throw error } ,
				apply() { throw error } ,
			} ) as any as Result
	
		}

		notify() {
			if( this.cursor === -1 ) return
			this.cursor = -1
			
			if( this.slave ) this.slave.notify()
			else new $mol_defer( ()=> this.run() )
		}

		run() {
			const slave = $mol_task_current
			if( slave ) slave.step()
			
			if( this.cursor !== -1 ) return this.result

			$mol_task_current = this
			this.cursor = 0
			
			try { this.result = this.handler() }
			catch( error ) { this.result = this.error( error ) }

			$mol_task_current = slave

			return this.result
		}

		step() {
			++ this.cursor
		}

		get master() {
			return this.masters[ this.cursor ]
		}
		set master( next : $mol_task_state ) {
			this.masters[ this.cursor ] = next
		}

	}

	export function $mol_task_wrap< Handler extends ( ... args : any[] )=> Result , Result = void >( handler : Handler ) {
		
		return function $mol_task_wrapper( ... args : any[] ) {
			const master = $mol_task_current && $mol_task_current.master || new $mol_task_state< Result >( handler.bind( this , ... args ) )
			return master.run()
		} as Handler

	}

}