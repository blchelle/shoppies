import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => {
	return {
		searchBar: {
			height: 40,
			maxWidth: 600,
			flexShrink: 1,
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1),
			borderRadius: theme.shape.borderRadius,
			border: `1px solid ${theme.palette.grey[300]}`,
			backgroundColor: theme.palette.common.white,
			'&:hover': {
				backgroundColor: theme.palette.common.white,
			},
		},
		searchInput: {
			color: theme.palette.common.black,
			height: '100%',
			padding: 0,
		},
		searchButton: {
			height: 40,
			marginLeft: theme.spacing(1),
		},
		themeButton: {
			marginLeft: 'auto',
		},
	}
})
