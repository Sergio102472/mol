# $mol_fiber

Pausable synchronous executions.
Frees main thread every 8ms and continues fiber in next animation frame.
Fibers must be idempotent because can be restarted for continuation.

## API

### $mol_fiber.run

Creates fiber for handler and immediately starts it.
Handler executed only once in parent execution.
Use it to wrap non idempotent code.

```typescript
$mol_fiber_defer( ()=> {
	$mol_fiber.run( ()=> console.log( 1 ) ) // 1
	$mol_fiber.run( ()=> console.log( 2 ) ) // 2
} )
```

### $mol_fiber_defer

Defer starts fiber.
So fiber will be executed asynchronously.
Use it to start fibers concurrently.

```typescript
$mol_fiber_defer( ()=> console.log( 1 ) ) // 1
$mol_fiber_defer( ()=> console.log( 2 ) ) // 2
```

### $mol_fiber.func

Converts function to fiber.

```typescript
const log = $mol_fiber.func( console.log )

$mol_fiber_defer( ()=> {
	log( 1 ) // 1
	log( 2 ) // 2
} )
```

### $mol_fiber_sync

Converts any `async` function (function that returns promise) to "synchronous" fiber.

```typescript
const request = $mol_fiber_sync( fetch )

$mol_fiber_defer( ()=> {
	console.log( request( 'http://example.org/users' ).users )
} )
```

You can prodive `abort` callback to cancel async task on fiber destruction:

```typescript
const request = $mol_fiber_sync( ( input : RequestInfo , init : RequestInit = {} )=> {

	var controller = new AbortController()
	$mol_fiber.current.abort = controller.abort.bind( controller )
	init.signal = controller.signal
		
	return fetch( input , init )

}
```

And you can destroy fiber tree by calling `destructor` method:

```typescript
const task = $mol_fiber_defer( ()=> {
	console.log( request( 'http://example.org/users' ).users )
} )

task.destructor()
```

### $mol_fiber.method

Decorates method by fiber.

```typescript
export class $my_foo {

	@ $mol_fiber.method
	transfer( from  , to ) {
		request( to , {
			method: 'post' ,
			body : request( from ) ,
		} )

		return 'Transfer is completed'
	}

}
```

### $mol_fiber_warp

Executes scheduled fibers to the end. Usefull for tests.

```typescript
$mol_fiber_warp()
// No scheduled fibers here
```

## Error handling

```
$mol_fiber_defer( ()=> {
	try {
		console.log( get_text( 'example.org' )	 )
	} catch( error ) {
		if( 'then' in error ) $mol_fail_hidden( error ) // rethrow if promise
		console.log( error ) // handle error
	}
} )
```

## Installation

### Via bundle from CDN

```
<script src="https://mol.js.org/fiber/-/web.js"></script>
```

### Via NPM

```
npm install mol_fiber
```

```
const { $mol_fiber_defer : defer } = require( 'mol_fiber' )
```

```
import { $mol_fiber_defer as defer } from 'mol_fiber'
```

## Logs

Logs can be enabled through [$mol_log.excludes](../log2).

Legend:

`▷` - calculation started

`🠈` - cache changed

`✔` - cache actualized but not not changed

`✘` - cache cleared

`�` - required revalidation of master's caches 

`🔥` - exception cached

`💤` - calculation paused until promise finalized

`⏰` - calculation restarted after promise finalize

`☍` - master leads slave

`☌` - master disleads slave

`🕱` - fiber destroyed

`=` - setter

`#` - number of fiber in slave masters
