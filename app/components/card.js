import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Icon from 'material-ui/icon'

export default class IndexCard extends React.Component {
    state = {

    }

    render() {
        <div>
            <Card>
                <CardMedia>
                    <div className="card-header">
                        <span>{ card.wantDate }</span>
                        <span>action</span>
                    </div>
                    <img src="" alt=""/>
                </CardMedia>
                <div>
                    <div className="card-info">
                        <p>{ card.userName }</p>
                        <div>
                            { card.sex == 0 ? (<span className="card-male">{ card.age }</span>) : (<span className="card-famale">{ card.age }</span>)}
                            { card.in > 0 ? (<span className="card-in">get{ card.in }</span>) : "" }
                            { card.out > 0 ? (<span className="card-out">put{ card.out }</span>) : "" }
                        </div>
                    </div>
                    <div className="card-action">
                        <Icon className="iconfont icon-message"></Icon>
                    </div>
                </div>
            </Card>
        </div>
    }
}