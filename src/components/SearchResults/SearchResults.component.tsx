import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

import MovieCard from '../MovieCard/MovieCard.component'
import { ReactComponent as ShoppiesUD } from '../../assets/shoppies.undraw.svg'
import Movie from '../../types/Movie.type'

import useStyles from './SearchResults.mui'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root.reducer'

interface SearchResultsProps {
	movies: Movie[]
	hasSearched: boolean
}

const SearchResults: React.FC<SearchResultsProps> = ({ movies, hasSearched }) => {
	// Material UI
	const classes = useStyles()

	// Redux Hooks
	const nominations = useSelector((state: RootState) => state.nominations)

	if (hasSearched)
		return (
			<Grid container spacing={4} className={classes.container}>
				{movies.map((movie) => (
					<Grid item xs={12} lg={6} xl={4} key={movie.imdbID}>
						<MovieCard
							movie={movie}
							isNominated={
								nominations.filter(({ imdbID }) => imdbID === movie.imdbID).length >
								0
							}
							limitReached={nominations.length === 5}
						/>
					</Grid>
				))}
			</Grid>
		)

	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			justify='center'
			className={classes.container}
			spacing={2}
		>
			<Grid item container justify='center'>
				<ShoppiesUD className={classes.shoppiesSvg} />
			</Grid>
			<Grid item container justify='center'>
				<Grid item xs={12}>
					<Typography variant='h4' color='primary'>
						<Box textAlign='center' fontWeight='bold'>
							Welcome to the 1st Annual Shoppies!
						</Box>
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant='h6'>
						We need your help picking our nominees, please select your 5 favourite
						movies.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default SearchResults
