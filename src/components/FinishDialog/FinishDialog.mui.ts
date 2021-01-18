import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
	return {
		dialog: {
			zIndex: 1100,
		},
		finishSvg: {
			width: '100%',
			marginBottom: theme.spacing(2),
			marginTop: theme.spacing(2),
			height: 'auto',
		},
	}
})
