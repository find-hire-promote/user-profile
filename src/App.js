import React from 'react'
import './styles.css'
import Form from './Form.js'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: green
  }
})

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <h1>Your Profile</h1>
          <Form />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}
