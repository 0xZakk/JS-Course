import React from 'react'
import { style } from 'glamor'
import { Container } from 'react-responsive-grid'

import PostHero from '../heros/postHero'
import Intro from './intro'

const styles = {
  body: {

  }
}

class Post extends React.Component {

  render () {
    const post = this.props.route.page.data
    
    return (
      <div>
        <PostHero title={ post.title }></PostHero>
        <Intro { ...post }></Intro>
        <Container className={ style( styles.body ) }>
          <div dangerouslySetInnerHTML={ {  __html: post.body } } />
        </Container>
      </div>
    )
  }

}

Post.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default Post
