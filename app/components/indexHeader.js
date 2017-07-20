import React from 'react'
import Icon from 'material-ui/Icon'
import Chip from 'material-ui/Chip'

const Header = ({bean, toggleDrwer}) => {
  return (
    <div className="index-header">
      <div className="index-header-inner">
        <div>
          <span onClick={toggleDrwer}><Icon className="iconfont icon-ic_toc" color="primary"></Icon></span>
          <div className="header-bean">
            <Icon className="iconfont icon-ic_album" color="primary"></Icon>
            {bean}
            <Icon className="iconfont icon-ic_add_box" color="primary"></Icon>
          </div>
        </div>
        <div>
          <Chip label="Basic Chip" />
        </div>
      </div>
    </div>
  )
}

export default Header