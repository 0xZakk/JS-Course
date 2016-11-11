import React from 'react'
import { Link } from 'react-router'

import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import PageHero from '../components/heros/pageHero'
import Footer from '../components/sections/footer'

import { rhythm } from '../utils/typography'

class Template extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }

}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template
