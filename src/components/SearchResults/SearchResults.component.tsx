import React from 'react'
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'

import MovieCard from '../MovieCard/MovieCard.component'
import { ReactComponent as ShoppiesUD } from '../../assets/shoppies.undraw.svg'
import { ReactComponent as NoResultsUD } from '../../assets/not-found.undraw.svg'
import Movie from '../../types/Movie.type'

import useStyles from './SearchResults.mui'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root.reducer'

interface SearchResultsProps {
	searchKey: string
	movies: Movie[]
	hasSearched: boolean
	pageNumber: number
	totalResults: number
	onSearch: (userInput: string, nextPageNumber: number) => void
}

const SearchResults: React.FC<SearchResultsProps> = ({
	searchKey,
	movies,
	hasSearched,
	pageNumber,
	totalResults,
	onSearch,
}) => {
	// Material UI
	const classes = useStyles()
	const theme = useTheme()
	const screenIsSmall = useMediaQuery(theme.breakpoints.down('sm'))

	// Redux Hooks
	const nominations = useSelector((state: RootState) => state.nominations)

	if (hasSearched && totalResults > 0) {
		return (
			<Grid container spacing={4} className={classes.container} alignContent='flex-start'>
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
				{10 * pageNumber < totalResults ? (
					<Grid item container justify='center'>
						<Button
							color='primary'
							variant='outlined'
							onClick={() => onSearch(searchKey, pageNumber + 1)}
						>
							Load More Results
						</Button>
					</Grid>
				) : null}
			</Grid>
		)
	} else if (!hasSearched) {
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
					<ShoppiesUD
						className={screenIsSmall ? classes.shoppiesSvgMobile : classes.shoppiesSvg}
					/>
				</Grid>
				<Grid item container justify='center'>
					<Grid item xs={12}>
						<Typography variant={screenIsSmall ? 'h5' : 'h4'} color='primary'>
							<Box textAlign='center' fontWeight='bold'>
								Welcome to the 1st Annual Shoppies!
							</Box>
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant={screenIsSmall ? 'subtitle1' : 'h6'}>
							<Box textAlign='center'>
								We need your help picking our nominees, please select your 5
								favourite movies.
							</Box>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		)
	}

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
				<NoResultsUD
					className={screenIsSmall ? classes.shoppiesSvgMobile : classes.shoppiesSvg}
				/>
			</Grid>
			<Grid item container justify='center'>
				<Grid item xs={12}>
					<Typography variant={screenIsSmall ? 'h5' : 'h4'} color='primary'>
						<Box textAlign='center' fontWeight='bold'>
							Oh No!
						</Box>
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant={screenIsSmall ? 'subtitle1' : 'h6'}>
						<Box textAlign='center'>
							We couldn't find anything, try searching for a different movie.
						</Box>
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default SearchResults
