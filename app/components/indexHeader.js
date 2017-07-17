import React from 'react'
import Icon from 'material-ui/Icon'
import Chip from 'material-ui/Chip'

export default class IndexHeader extends React.Component {
    state = {
        bean: 0
    }

    render() {
        return (
            <div className="index-header">
                <div className="index-header-inner">
                    <div>
                        <span><Icon className="iconfont icon-ic_toc" color="primary"></Icon></span>
                        <div className="header-bean">
                            <Icon className="iconfont icon-ic_album" color="primary"></Icon> 
                            { this.state.bean }
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
}