import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { purple, green } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './App'
import './index.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: {
      main: purple[700],
    },
    secondary: {
      main: green['A700'],
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
