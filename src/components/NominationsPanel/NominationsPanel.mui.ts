import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
	return {
		container: {
			backgroundColor: theme.palette.background.default,
			width: '100%',
			height: '100vh',
			borderRadius: 0,
			zIndex: 5000,
			overflowY: 'auto',
		},
	}
})
