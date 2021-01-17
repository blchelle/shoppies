import React from 'react'
import {
	Card,
	CardContent,
	Divider,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/root.reducer'
import NominationCard from '../NominationCard/NominationCard.component'

import useStyles from './NominationsPanel.mui'

interface NominationsPanelProps {
	closeDrawer?: React.Dispatch<React.SetStateAction<boolean>>
}

const NominationsPanel: React.FC<NominationsPanelProps> = ({ closeDrawer }) => {
	// Material UI
	const classes = useStyles()
	const theme = useTheme()
	const screenIsSmall = useMediaQuery(theme.breakpoints.down('sm'))

	// Redux Hooks
	const nominations = useSelector((state: RootState) => state.nominations)
	const missingNominations = new Array(5 - nominations.length).fill(null)

	return (
		<Card className={classes.container}>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item container xs={12}>
						<Grid item container alignContent='center' spacing={4}>
							<Grid item xs>
								<Typography variant='h5'>Your Nominations</Typography>
								<Divider />
							</Grid>
							{screenIsSmall ? (
								<Grid item>
									<IconButton size='small' onClick={() => closeDrawer!(false)}>
										<CloseIcon />
									</IconButton>
								</Grid>
							) : null}
						</Grid>
					</Grid>
					<Grid item xs={12} container spacing={2}>
						{nominations.map((movie, index) => (
							<Grid item xs={12}>
								<NominationCard rank={index} movie={movie} />
							</Grid>
						))}
						{missingNominations.map((_, index) => (
							<Grid item xs={12}>
								<NominationCard rank={index + nominations.length} movie={null} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}

export default NominationsPanel
