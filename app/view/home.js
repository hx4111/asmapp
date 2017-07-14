import React from 'react'
import SideDrawer from '../component/sideDrawer.js'
import IndexHeader from '../component/indexHeader.js'

export default class Home extends React.Component {
    state = {
        
    }

    render() {

        return (
            <div>
                <SideDrawer />
                <IndexHeader />
            </div>
        )
    }
}