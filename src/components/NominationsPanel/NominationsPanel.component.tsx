import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root.reducer'
import NominationCard from '../NominationCard/NominationCard.component'
// import MovieCard from '../MovieCard/MovieCard.component'

import useStyles from './NominationsPanel.mui'

const NominationsPanel = () => {
	// Material UI
	const classes = useStyles()

	// Redux Hooks
	const nominations = useSelector((state: RootState) => state.nominations)

	const missingNominations = new Array(5 - nominations.length).fill(null)

	return (
		<Card className={classes.container}>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant='h5'>Your Nominations</Typography>
						<Divider />
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
