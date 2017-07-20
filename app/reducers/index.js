import { combineReducers } from 'redux'
import sideDrawer from './sideDrawer.js'
import header from './header.js'

const asmapp = combineReducers({
  sideDrawer,
  header
})

export default asmapp