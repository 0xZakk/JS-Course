import React from 'react'
import { style } from 'glamor'
import PostHero from '../heros/postHero'


class Slides extends React.Component {

  render () {

    return(
      <div>
        Slides
      </div>
    )

  }

}

Slides.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default Slides
