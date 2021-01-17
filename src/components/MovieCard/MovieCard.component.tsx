import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'

import DefaultPoster from '../../assets/no-poster.png'
import Movie from '../../types/Movie.type'
import { addNomination, deleteNomination } from '../../redux/nominations/nominations.actions'

import useStyles from './MovieCard.mui'
import useCommonStyles from '../common.mui'

interface MovieCardProps {
	movie: Movie
	isNominated: boolean
	limitReached: boolean
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isNominated, limitReached }) => {
	// Material UI
	const classes = useStyles()
	const commonClasses = useCommonStyles()

	// Redux Hooks
	const dispatch = useDispatch()

	return (
		<Card className={classes.card}>
			<Grid container>
				<Grid item>
					{movie.Poster === 'N/A' ? (
						<img src={DefaultPoster} alt='Default Poster' className={classes.media} />
					) : (
						<CardMedia image={movie.Poster} className={classes.media} />
					)}
				</Grid>
				<Grid item className={classes.separator} />
				<Grid item xs className={classes.content}>
					<CardContent className={`${commonClasses.fullHeight} ${classes.cardContent}`}>
						<Grid
							container
							direction='column'
							justify='space-between'
							className={commonClasses.fullHeight}
						>
							<Grid item>
								<Typography variant='subtitle1'>
									<Box fontWeight='bold'>{movie.Title}</Box>
								</Typography>
							</Grid>
							<Grid item container justify='space-between'>
								<Grid item>
									<Typography variant='h6' color='textSecondary'>
										{movie.Year}
									</Typography>
								</Grid>
								{isNominated ? (
									<Grid item>
										<Button
											color='default'
											variant='outlined'
											size='small'
											onClick={() => dispatch(deleteNomination(movie))}
										>
											Remove
										</Button>
									</Grid>
								) : (
									<Grid item>
										<Button
											color='primary'
											variant='contained'
											size='small'
											disabled={limitReached}
											onClick={() => dispatch(addNomination(movie))}
										>
											Nominate
										</Button>
									</Grid>
								)}
							</Grid>
						</Grid>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	)
}

export default MovieCard
