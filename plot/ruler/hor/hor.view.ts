namespace $.$$ {
	export class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
		dimensions_axis() {
			const dims = this.dimensions_pane()
			return [dims[0][0], dims[1][0]] as const
		}

		viewport_axis() {
			return [0, this.size_real()[0]] as const
		}

		scale_axis() {
			return this.scale()[0]
		}

		scale_step() {
			return this.scale()[0]
		}

		shift_axis() {
			return this.shift()[0]
		}
		
		curve() {
			const [shift] = this.shift()
			const [scale] = this.scale()

			return this.points().map( point => {
				const scaled = point * scale + shift
				return `M ${scaled.toFixed(3)} 1000 V 0`
			}).join( ' ' ) || ''
		}

		label_pos_x( index : number ) {
			return (this.points()[index] * this.scale()[0] + this.shift()[0]).toFixed(3) + 'px'
		}

		label_pos_y( index : number ) {
			return this.title_pos_y()
		}
	}
}
