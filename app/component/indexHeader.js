import React from 'react'
import IconToc from 'material-ui-icons/Toc'
import IconStar from 'material-ui-icons/Star'
import IconAddBox from 'material-ui-icons/AddBox'
import Chip from 'material-ui/Chip'

export default class IndexHeader extends React.Component {
    state = {
        bean: 0
    }

    render() {
        return (
            <div className="index-header">
                <div className="index-header-inner">
                    <div className="fl-left">
                        <span><IconToc /></span>
                        <div className="header-bean">
                            <IconStar />
                            { this.state.bean }
                            <IconAddBox />
                        </div>
                    </div>
                    <div className="fl-right">
                        <Chip label="Basic Chip" />
                    </div>
                </div>
            </div>
        )
    }
}