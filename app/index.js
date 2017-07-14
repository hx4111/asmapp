import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import './less/index.less'

injectTapEventPlugin()

const theme = createMuiTheme({
    palette: createPalette({
        type: 'light', // Switching the dark mode on is a single property value change.
    }),
})

ReactDOM.render( 
    <MuiThemeProvider theme={theme} >
        <App />
    </MuiThemeProvider>, 
    document.getElementById('root')
)