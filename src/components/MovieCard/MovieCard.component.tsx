import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@material-ui/core'
import {
	StarBorder as StarBorderIcon,
	Star as StarFilledIcon,
	RemoveCircleOutline,
} from '@material-ui/icons'

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
									<Box fontWeight='bold' className={classes.movieTitle}>
										{movie.Title}
									</Box>
								</Typography>
							</Grid>
							<Grid item container justify='space-between' alignItems='center'>
								<Grid item>
									<Typography variant='h6' color='textSecondary'>
										{movie.Year}
									</Typography>
								</Grid>
								{isNominated ? (
									<Grid
										item
										container
										className={classes.buttonsContainer}
										alignItems='center'
									>
										<Grid item>
											<IconButton size='small'>
												<RemoveCircleOutline
													onClick={() =>
														dispatch(deleteNomination(movie))
													}
												/>
											</IconButton>
										</Grid>
										<Grid item>
											<IconButton color='primary' disabled={true}>
												<StarFilledIcon color='primary' />
											</IconButton>
										</Grid>
									</Grid>
								) : (
									<Grid item>
										<IconButton
											color='primary'
											disabled={limitReached}
											onClick={() => dispatch(addNomination(movie))}
										>
											<StarBorderIcon />
										</IconButton>
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
