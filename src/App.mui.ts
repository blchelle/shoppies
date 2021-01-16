import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
	return {
		app: {
			width: '100vw',
			height: '100vh',
			borderRadius: 0,
			backgroundColor: theme.palette.background.default,
		},
	}
})
