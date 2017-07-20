import React from 'react'
import SideDrawerHandle from '../containers/sideDrawerHandle.js'
import HeaderHandle from '../containers/headerHandle.js'

export default class Home extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <SideDrawerHandle />
        <HeaderHandle />
      </div>
    )
  }
}