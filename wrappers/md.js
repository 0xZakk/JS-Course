import React from 'react'
import access from 'safe-access'

import 'css/markdown-styles.css'
import Helmet from "react-helmet"
import { config } from 'config'

import Post from '../components/post/'
import Page from '../components/page/'
import Homework from '../components/lessons/homework'
import Slides from '../components/lessons/slides'

class MarkdownWrapper extends React.Component {

  render () {
    const { route } = this.props
    const post = route.page.data
    let layout, template

    layout = post.layout

    switch ( layout ) {
      case 'page':
        template = <Page { ...this.props } />
        break;
      case 'post':
        template = <Post { ...this.props } />
        break;
      case 'homework':
        template = <Homework { ...this.props } />
        break;
      case 'slides':
        template = <Slides { ...this.props } />
        break;
      default:

    }

    return (
      <div>
        { template }
      </div>
    )
  }

}

MarkdownWrapper.propTypes = {
  router: React.PropTypes.object
}

export default MarkdownWrapper
