import Head from 'next/head'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'
import CssBaseline from '@material-ui/core/CssBaseline'

import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import red from '@material-ui/core/colors/red'
import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
  typography: createTypography(createPalette({}), {
    fontFamily: '"Roboto Mono"',
  }),
})

const Container = styled(Box)({
	height: '100vh',	
	width: '100vw',
	justifyContent: 'center',
	alignItems: 'center',
	display: 'flex',
	background: `linear-gradient(0deg, ${red[600]}, ${orange[500]})`,
})

const Layout = props => (
	<html>
		<Head>
			<title>Loading Animation Example</title>
			<meta
				name='viewport'
				content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no' />
			<meta charSet='utf-8' />
			<link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet' />
		</Head>
		<body>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				<Container>
					{ props.children }	
				</Container>
			</MuiThemeProvider>
		</body>
	</html>
)

export default Layout
