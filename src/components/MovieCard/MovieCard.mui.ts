import { makeStyles } from '@material-ui/core/styles'

const cardHeight = 150

export default makeStyles((theme) => {
	return {
		card: {
			height: cardHeight,
		},
		media: {
			height: cardHeight,
			width: 100,
		},
		separator: {
			backgroundColor: theme.palette.primary.main,
			width: theme.spacing(2),
			height: cardHeight,
		},
		content: {
			height: cardHeight,
		},
		cardContent: {
			paddingBottom: `4px !important`,
		},
		buttonsContainer: {
			width: 'auto',
		},
	}
})
