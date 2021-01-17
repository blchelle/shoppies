import React from 'react'
import { Grid, Slide } from '@material-ui/core'

import { ReactComponent as OneSvg } from '../../assets/1.svg'
import { ReactComponent as TwoSvg } from '../../assets/2.svg'
import { ReactComponent as ThreeSvg } from '../../assets/3.svg'
import { ReactComponent as FourSvg } from '../../assets/4.svg'
import { ReactComponent as FiveSvg } from '../../assets/5.svg'
import Movie from '../../types/Movie.type'

import useStyles from './NominationCard.mui'
import MovieCard from '../MovieCard/MovieCard.component'

interface NominationCardProps {
	rank: number
	movie: Movie | null
}

const NominationCard: React.FC<NominationCardProps> = ({ rank, movie }) => {
	// Material UI
	const classes = useStyles()

	const getNumberSVG = () => {
		switch (rank) {
			case 0:
				return <OneSvg className={classes.numberSvg} />
			case 1:
				return <TwoSvg className={classes.numberSvg} />
			case 2:
				return <ThreeSvg className={classes.numberSvg} />
			case 3:
				return <FourSvg className={classes.numberSvg} />
			case 4:
				return <FiveSvg className={classes.numberSvg} />
		}
	}

	return (
		<Grid container style={{ height: 150 }} className={classes.container}>
			{getNumberSVG()}
			{movie ? (
				<Slide direction='left' in={movie !== null} mountOnEnter unmountOnExit>
					<Grid item xs className={classes.movieCard}>
						<MovieCard movie={movie} isNominated={true} limitReached={true} />
					</Grid>
				</Slide>
			) : null}
		</Grid>
	)
}

export default NominationCard
