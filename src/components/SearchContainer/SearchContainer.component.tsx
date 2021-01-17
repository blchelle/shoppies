import { Grid, LinearProgress } from '@material-ui/core'
import React, { useState } from 'react'

import SearchBar from '../SearchBar/SearchBar.component'
import SearchResults from '../SearchResults/SearchResults.component'
import Movie from '../../types/Movie.type'
import keys from '../../config/keys.config'

import useCommonStyles from '../common.mui'
import axios from 'axios'

interface OMBDSearchResult {
	Search: Movie[]
	totalResults: number
	Response: 'True' | 'False'
	Error?: string
}

const SearchContainer = () => {
	// Material UI
	const commonClasses = useCommonStyles()

	// Component State
	const [searchString, setSearchString] = useState('')
	const [searchResults, setSearchResults] = useState<Movie[]>([])
	const [pageNumber, setPageNumber] = useState(1)
	const [totalResults, setTotalResults] = useState(0)
	const [hasSearched, setHasSearched] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	// Searches OMDB
	const executeSearch = async (userInput: string, nextPageNumber: number) => {
		setIsLoading(true)
		const res = await axios(
			`https://www.omdbapi.com/?s=${userInput}&page=${nextPageNumber}&type=movie&apikey=${keys.omdbKey}`,
			{
				method: 'GET',
			}
		)

		// Adds a little bit of length to the loading animation so it is visible
		setTimeout(() => setIsLoading(false), 500)

		const data = res.data as OMBDSearchResult

		if (data.Response === 'False') {
			setSearchResults([])
			setTotalResults(0)
		} else {
			if (nextPageNumber === 1) {
				setSearchResults(data.Search)
			} else {
				setSearchResults([...searchResults, ...data.Search])
			}
			setTotalResults(data.totalResults)
		}

		setSearchString(userInput)
		setPageNumber(nextPageNumber)
		setHasSearched(true)
	}

	return (
		<Grid container className={commonClasses.fullHeight}>
			<Grid item xs={12}>
				<SearchBar onSearch={executeSearch} />
				{isLoading ? <LinearProgress /> : null}
			</Grid>
			<Grid item xs={12} className={commonClasses.fullHeight}>
				<SearchResults
					searchKey={searchString}
					movies={searchResults}
					hasSearched={hasSearched}
					pageNumber={pageNumber}
					totalResults={totalResults}
					onSearch={executeSearch}
				/>
			</Grid>
		</Grid>
	)
}

export default SearchContainer
