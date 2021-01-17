import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	AppBar,
	Button,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	useMediaQuery,
	useTheme,
} from '@material-ui/core'
import {
	Search as SearchIcon,
	Brightness7 as LightIcon,
	Brightness2 as DarkIcon,
} from '@material-ui/icons'
import { ReactComponent as ShoppiesText } from '../../assets/shoppies-logo.svg'
import { ReactComponent as ShoppiesIcon } from '../../assets/shoppies-icon.svg'
import { toggleTheme } from '../../redux/theme/theme.actions'
import { RootState } from '../../redux/root.reducer'

import useStyles from './SearchBar.mui'

interface SearchBarProps {
	onSearch: (userInput: string, pageNumber: number) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	// Material UI
	const classes = useStyles()
	const theme = useTheme()
	const screenIsMedium = useMediaQuery(theme.breakpoints.down('md'))
	const screenIsLarge = useMediaQuery(theme.breakpoints.down('lg'))

	// Component State
	const [userInput, setUserInput] = useState('')

	// Redux Hooks
	const colorTheme = useSelector((state: RootState) => state.theme)
	const dispatch = useDispatch()

	return (
		<AppBar position='relative' color='default'>
			<Toolbar>
				<Grid
					container
					alignItems='center'
					justify='space-between'
					spacing={screenIsMedium ? 0 : 4}
				>
					{screenIsMedium ? null : (
						<Grid item>{screenIsLarge ? <ShoppiesIcon /> : <ShoppiesText />}</Grid>
					)}
					<Grid item xs container justify='center' wrap='nowrap'>
						<Grid item container className={classes.searchBar} alignItems='center'>
							<Grid item xs>
								<InputBase
									placeholder='Search for movies'
									inputProps={{ 'aria-label': 'search' }}
									fullWidth
									className={classes.searchInput}
									onChange={(event: React.SyntheticEvent) =>
										setUserInput((event.target as HTMLInputElement).value)
									}
									onKeyDown={(event: React.KeyboardEvent) => {
										if (event.keyCode === 13) {
											onSearch(userInput, 1)
										}
									}}
								/>
							</Grid>
						</Grid>
						<Grid item>
							{screenIsMedium ? (
								<IconButton
									onClick={() => onSearch(userInput, 1)}
									className={classes.searchButton}
								>
									<SearchIcon />
								</IconButton>
							) : (
								<Button
									variant='contained'
									color='primary'
									className={classes.searchButton}
									disabled={userInput.trim() === ''}
									onClick={() => onSearch(userInput, 1)}
								>
									Search
								</Button>
							)}
						</Grid>
					</Grid>
					<Grid
						item
						className={classes.themeButton}
						onClick={() => dispatch(toggleTheme())}
					>
						<IconButton>
							{colorTheme === 'light' ? <DarkIcon /> : <LightIcon />}
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default SearchBar
