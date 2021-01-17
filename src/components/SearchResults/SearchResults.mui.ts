import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
	return {
		container: {
			backgroundColor: theme.palette.background.default,

			width: '100%',
			height: 'calc(100vh - 56px)',

			padding: theme.spacing(2),
			margin: 0,

			overflowY: 'auto',
		},
		shoppiesSvg: {
			width: '40%',
			height: 'auto',
		},
		shoppiesSvgMobile: {
			width: '70%',
			height: 200,
		},
	}
})
