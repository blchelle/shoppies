import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
	return {
		appBar: {
			backgroundColor: theme.palette.primary.main,
		},
		searchBar: {
			height: 40,
			borderRadius: theme.shape.borderRadius,
			backgroundColor: theme.palette.common.white,
			'&:hover': {
				backgroundColor: theme.palette.common.white,
			},
		},
		searchIcon: {
			margin: theme.spacing(1),
			fill: theme.palette.getContrastText(theme.palette.background.paper),
		},
		searchButton: {
			height: 40,
			marginLeft: theme.spacing(2),
		},
	}
})
