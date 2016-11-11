import React from 'react'
import { style } from 'glamor'

const styles = {
  postList: {
    margin: 0
  }
}

export default class PostList extends React.Component {

  render () {

    return (
      <div className={ style( styles.postList ) }>
        { this.props.posts }
      </div>
    )

  }

}
