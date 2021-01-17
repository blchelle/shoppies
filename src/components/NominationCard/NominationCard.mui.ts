import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => {
	return {
		container: {
			position: 'relative',
		},
		numberSvg: {
			position: 'absolute',
			left: -30,
			bottom: 0,
			height: '50%',
			zIndex: 10000,
		},
		movieCard: {
			marginLeft: 55,
		},
	}
})
