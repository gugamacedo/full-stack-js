import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { purple, green } from '@material-ui/core/colors'

import App from './App'
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[700],
    }, 
    secondary: {
      main: green['A700'],
    }
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)