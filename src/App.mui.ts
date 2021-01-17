import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
	return {
		app: {
			width: '100vw',
			height: '100vh',
			borderRadius: 0,
			backgroundColor: theme.palette.background.default,
			overflow: 'hidden',
			position: 'relative',
		},
		fab: {
			position: 'absolute',
			bottom: theme.spacing(4),
			right: theme.spacing(4),
			zIndex: 1000,
		},
		finishSvg: {
			width: '90%',
			marginBottom: theme.spacing(2),
			marginTop: theme.spacing(2),
			height: 'auto',
		},
	}
})
