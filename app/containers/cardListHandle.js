
import React from 'react'
import { connect } from  'react-redux'
import Card from '../components/card.js'

class CardAsync extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        {
          this.props.cards.map( card => {
            return <Card {...card} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
}

export default connect(mapStateToProps)(CardAsync)