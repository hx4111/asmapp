import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'
import yellow from 'material-ui/colors/yellow'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'
import './less/index.less'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index.js'

injectTapEventPlugin()

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const theme = createMuiTheme({
    palette: createPalette({
        primary: yellow,
        accent: {
            ...green,
            A400: '#00e677',
        },
        error: red
    }),
})

ReactDOM.render( 
    <MuiThemeProvider theme={theme} >
        <Provider store={store}>
            <Routes />
        </Provider>
    </MuiThemeProvider>, 
    document.getElementById('root')
)