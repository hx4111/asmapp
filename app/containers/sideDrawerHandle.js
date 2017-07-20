import React from 'react'
import { connect } from 'react-redux'
import SideDrawer from '../components/sideDrawer.js'
import { sideDrawerOpenHandle } from '../actions/index.js'

const mapStateToProps = (state) => {
  return {
    open: state.sideDrawer.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpen: () => {
      dispatch(sideDrawerOpenHandle())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)