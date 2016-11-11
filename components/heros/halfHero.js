import React from 'react'
import { style } from 'glamor'

const styles = {
  postHero: {
    height: '25vh',
    minHeight: '200px',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white'
  }
}

export default class HalfHero extends React.Component {

  render () {
    return (
      <div className={ style( styles.postHero ) }>
        <h1 className={ style( styles.title ) }>{ this.props.title }</h1>
      </div>
    )
  }

}
