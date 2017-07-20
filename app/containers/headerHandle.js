import React from 'react'
import Header from '../components/indexHeader.js'
import { connect } from 'react-redux'
import { sideDrawerOpenHandle } from '../actions'

const mapStateToProps = (state) => {
  return {
    bean: state.header.bean
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrwer: () => {
      dispatch(sideDrawerOpenHandle())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
