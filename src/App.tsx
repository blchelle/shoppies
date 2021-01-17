import React from 'react'
import { useSelector } from 'react-redux'
import { createMuiTheme, Grid, Paper, ThemeProvider } from '@material-ui/core'

import { RootState } from './redux/root.reducer'
import SearchContainer from './components/SearchContainer/SearchContainer.component'
import NominationsPanel from './components/NominationsPanel/NominationsPanel.component'

import useStyles from './App.mui'

const App = () => {
	// Material UI
	const classes = useStyles()

	// Redux Hooks
	const colorTheme = useSelector((state: RootState) => state.theme)

	const theme = createMuiTheme({
		palette: {
			type: colorTheme,
			primary: {
				main: '#b7a261',
				contrastText: '#ffffff',
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 480,
				md: 800,
				lg: 1000,
				xl: 1600,
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Paper className={classes.app}>
				<Grid container className={classes.fullHeight}>
					<Grid item xs={12} md={9} className={classes.fullHeight}>
						<SearchContainer />
					</Grid>
					<Grid item xs={3}>
						<NominationsPanel />
					</Grid>
				</Grid>
			</Paper>
		</ThemeProvider>
	)
}

export default App
