import React from 'react'
import { connect } from 'react-redux'
import SideDrawer from '../components/sideDrawer.js'
import { sideDrawerOpenHandle } from '../actions/index.js'

const mapStateToProps = (state) => ({
  open: state.sideDrawerOpen
})

const mapDispatchToProps = {
  handleOpen: sideDrawerOpenHandle
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)