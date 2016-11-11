import React from 'react'
import { style } from 'glamor'
import { Container } from 'react-responsive-grid'

import PostHero from '../heros/postHero'
import HalfHero from '../heros/halfHero'

const styles = {
  body: {
    padding: '2rem 0'
  }
}

class Homework extends React.Component {

  render () {
    const post = this.props.route.page.data

    return(
      <div>
        <HalfHero title={ post.title } ></HalfHero>
        <Container className={ style( styles.body ) }>
          <div dangerouslySetInnerHTML={ {  __html: post.body } } />
        </Container>
      </div>
    )

  }

}

Homework.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default Homework
