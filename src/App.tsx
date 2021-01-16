import React from 'react'
import { createMuiTheme, Paper, ThemeProvider } from '@material-ui/core'

import SearchBar from './components/SearchBar/SearchBar.component'

import useStyles from './App.mui'

const App = () => {
	// Material UI
	const classes = useStyles()

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#64943E',
				contrastText: '#ffffff',
			},
			secondary: {
				main: '#95BF47',
				contrastText: '#ffffff',
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 480,
				md: 700,
				lg: 1000,
				xl: 1200,
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<SearchBar />
			<Paper className={classes.app}></Paper>
		</ThemeProvider>
	)
}

export default App
