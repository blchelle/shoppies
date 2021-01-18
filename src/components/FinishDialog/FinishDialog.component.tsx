import React from 'react'
import { Box, Dialog, DialogContent, DialogProps, Grid, Typography } from '@material-ui/core'

import { ReactComponent as FinishUD } from '../../assets/finish.undraw.svg'

import useStyles from './FinishDialog.mui'

const FinishDialog: React.FC<DialogProps> = (props) => {
	// Material UI
	const classes = useStyles()

	return (
		<Dialog {...props} className={classes.dialog}>
			<DialogContent>
				<Grid container justify='center'>
					<Typography variant='h4'>
						<Box textAlign='center'>Thank you for submitting your nominations!</Box>
					</Typography>

					<Grid item xs={1} />
					<Grid item xs={10}>
						<FinishUD className={classes.finishSvg} />
					</Grid>
					<Grid item xs={1} />
					<Typography variant='h6'>
						<Box textAlign='center' lineHeight='1.6rem'>
							This is going to help make this year's Shoppies a huge success.
							Hopefully you'll see one of your nominees take home the trophy.
						</Box>
					</Typography>
				</Grid>
			</DialogContent>
		</Dialog>
	)
}

export default FinishDialog
