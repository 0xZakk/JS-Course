import React from 'react'
import { Container } from 'react-responsive-grid'
import { style } from 'glamor'

const styles = {
  'twoCol': {
    'padding': '4rem 0',
    'columnCount': 2,
    'columnGap': '4rem'
  }
}

export default class TwoColDescription extends React.Component {

  render () {
    return (
      <div className={ style( styles.twoCol ) }>
        { this.props.children }
      </div>
    )
  }

}
