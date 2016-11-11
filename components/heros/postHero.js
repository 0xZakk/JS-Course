import React from 'react'
import { style } from 'glamor'

const styles = {
  postHero: {
    height: '45vh',
    minHeight: '400px',
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

export default class PostHero extends React.Component {

  render () {

    return (
      <div className={ style( styles.postHero ) }>
          <h1 className={ style( styles.title ) }>{ this.props.title }</h1>
      </div>
    )

  }

}
