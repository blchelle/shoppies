import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
	createMuiTheme,
	Grid,
	Fab,
	Paper,
	ThemeProvider,
	useMediaQuery,
	Drawer,
	Dialog,
	Typography,
	DialogContent,
} from '@material-ui/core'
import { ChevronLeft as LeftIcon } from '@material-ui/icons'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import { RootState } from './redux/root.reducer'
import SearchContainer from './components/SearchContainer/SearchContainer.component'
import NominationsPanel from './components/NominationsPanel/NominationsPanel.component'
import { ReactComponent as FinishUD } from './assets/finish.undraw.svg'

import useStyles from './App.mui'
import useCommonStyles from './components/common.mui'

const App = () => {
	// Material UI
	const classes = useStyles()
	const commonClasses = useCommonStyles()

	// Component State (Only applies on mobile)
	const [drawerIsOpen, setDrawerIsOpen] = useState(false)
	const [dialogIsOpen, setDialogIsOpen] = useState(false)

	// Redux Hooks
	const colorTheme = useSelector((state: RootState) => state.theme)
	const numNominations = useSelector((state: RootState) => state.nominations.length)

	useEffect(() => {
		setDialogIsOpen(true)
	}, [numNominations])

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

	// Gets the window dimensions for confetti
	const { width, height } = useWindowSize()

	return (
		<ThemeProvider theme={theme}>
			{numNominations === 5 && dialogIsOpen ? (
				<>
					<Confetti
						width={width}
						height={height}
						style={{ zIndex: 1200 }}
						gravity={0.2}
						colors={[theme.palette.primary.main, theme.palette.primary.light]}
					/>
					<Dialog
						open={true}
						onClose={() => setDialogIsOpen(false)}
						style={{ zIndex: 1101 }}
					>
						<DialogContent>
							<Grid container>
								<Typography variant='h5'>
									Thank you for submitting your nominations!
								</Typography>
								<Grid item xs={12}>
									<FinishUD className={classes.finishSvg} />
								</Grid>
								<Typography variant='subtitle1'>
									This is going to help make this year's Shoppies a huge success.
									Feel free to modify your nominations if you feel something needs
									to be changed.
								</Typography>
							</Grid>
						</DialogContent>
					</Dialog>
				</>
			) : null}
			<Paper className={classes.app}>
				{useMediaQuery(theme.breakpoints.down('sm')) ? (
					<>
						<Fab
							color='primary'
							size='large'
							className={classes.fab}
							onClick={() => setDrawerIsOpen(true)}
						>
							<LeftIcon />
						</Fab>
						<Drawer
							anchor='right'
							open={drawerIsOpen}
							classes={{ paper: commonClasses.fullWidth }}
						>
							<NominationsPanel closeDrawer={setDrawerIsOpen} />
						</Drawer>
					</>
				) : null}
				<Grid container className={commonClasses.fullHeight}>
					<Grid item xs={12} xl={9} lg={7} md={6} className={commonClasses.fullHeight}>
						<SearchContainer />
					</Grid>
					<Grid item xl={3} lg={5} md={6}>
						<NominationsPanel />
					</Grid>
				</Grid>
			</Paper>
		</ThemeProvider>
	)
}

export default App
