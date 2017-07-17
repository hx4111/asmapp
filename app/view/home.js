import React from 'react'
import SideDrawer from '../component/sideDrawer.js'
import IndexHeader from '../component/indexHeader.js'
import CardList from '../component/cardList.js'

export default class Home extends React.Component {
    state = {
        
    }

    render() {

        return (
            <div>
                <SideDrawer />
                <IndexHeader />
                <CardList />
            </div>
        )
    }
}