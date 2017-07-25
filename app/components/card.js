import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Icon from 'material-ui/icon'

export default class IndexCard extends React.Component {
  
  render() {
    return (
      <div>
        <Card>
          <CardMedia>
            <div className="card-header">
              <span>{ wantDate }</span>
              <span>action</span>
            </div>
            <img src="" alt=""/>
          </CardMedia>
          <div>
            <div className="card-info">
              <p>{ userName }</p>
              <div>
                { sex == 0 ? (<span className="card-male">{ age }</span>) : (<span className="card-famale">{ age }</span>)}
                { inFlowers > 0 ? (<span className="card-in">get{ inFlowers }</span>) : "" }
                { outFlowers > 0 ? (<span className="card-out">put{ outFlowers }</span>) : "" }
              </div>
            </div>
            <div className="card-action">
              <Icon className="iconfont icon-message"></Icon>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}