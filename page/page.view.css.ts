namespace $.$$ {

	const { per , rem } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $mol_page , {

		display: 'flex' ,
		margin: 0 ,
		flexDirection: 'column' ,
		flex: 'auto',
		position: 'relative' ,
		alignSelf: 'stretch' ,
		maxWidth: per(100) ,
		maxHeight: per(100) ,
		boxSizing: 'border-box' ,
		background: {
			color: $mol_theme.back ,
		},
		color: $mol_theme.text ,
		zIndex: 0 ,
		overflow: 'hidden',
		boxShadow: `0 0 .5rem hsla(0,0%,0%,.25)` ,

		':focus': {
			outline: 'none',
		} ,

		Head: {
			display: 'flex' ,
			flexWrap: 'wrap' ,
			justifyContent: 'space-between' ,
			flex: 'none',
			position: 'relative' ,
			margin: 0 ,
			minHeight: calc(`1.5em + 2rem`) ,
			padding: rem(.5) ,
			background: {
				color: $mol_theme.back ,
			},
			boxShadow: `0 0 .5rem hsla(0,0%,0%,.25)` ,
			zIndex: 1,
		},

		Title: {

			flex: {
				grow: 1000,
				shrink: 1,
				basis: per(50),
			},
			padding: rem(.5),
			wordBreak: 'normal',
			cursor: 'default',
			textShadow: '0 0',

			':empty': {
				display: 'none',
			},
	
		},

		Tools: {
			
			flex: 'auto',
			display: 'flex',
			justifyContent: 'flex-end',

			':empty': {
				display: 'none',
			},

		},

		Body: {
			flex: {
				grow: 1000,
				shrink: 1,
				basis: per(100),
			},
			margin: 0,
		},

		Foot: {
			display: 'flex',
			justifyContent: 'space-between',
			flex: 'none',
			margin: 0,
			overflow: 'hidden',
			background: {
				color: $mol_theme.back ,
			},
			boxShadow: `0 0 .5rem hsla(0,0%,0%,.25)` ,
			zIndex: 1,
		},	

	} )
	
}
