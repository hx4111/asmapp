import React from 'react'
import Drawer from 'material-ui/Drawer'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            container: {
                drawer: false
            }
        }
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.container.drawer} className="side-slide">
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}