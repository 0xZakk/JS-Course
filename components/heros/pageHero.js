import React from 'react'
import { style } from 'glamor'

const styles = {
  container: {
    'height': '100vh',
    'minHeight': 700,
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',
    'backgroundColor': 'black',
    'color': 'white',
  },
  'title': {
    'color': 'white'
  }
}

export default class PageHero extends React.Component {

  render() {

    return (
      <div className={ style( styles.container ) }>
        <h1 className={ style( styles.title ) }>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    )

  }

}
