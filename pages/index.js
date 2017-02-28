import React from 'react'
import sortBy from 'lodash/sortBy'
import { Link } from 'react-router'
import access from 'safe-access'
import { prefixLink } from 'gatsby-helpers'
import include from 'underscore.string/include'
import moment from 'moment'
import { Container } from 'react-responsive-grid'

import PageHero from '../components/heros/pageHero'
import TwoColDescription from '../components/sections/two-col-description'
import PostList from '../components/post/post-list'
import PostListItem from '../components/post/post-list-item'

export default class Index extends React.Component {

  render () {
    console.log( this )

    const lessons = []

    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
    )

    sortedPages.forEach((page) => {

      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404') && access(page, 'data.type') === 'lesson' ) {

        const postData = access( page, 'data' )

        lessons.push( <PostListItem key={page.path} page={ postData } /> )

      }

    })

    return (
      <div>

        <PageHero title="Introduction to JavaScript" body="Welcome to your new clean Gatsby site"/>

        <Container>

          <TwoColDescription>
            <p>Lorem ipsum dolor sit amet, has suas pericula ex, prima reque cum no. Ea has legere laboramus. Modo deseruisse ne usu. Phaedrum scriptorem vim no, nullam tibique oporteat eum id. Eos ex reque rationibus, labores tibique no his. Ridens eirmod feugiat pro ad. Pro in audire alienum. Quando placerat at mei. Mutat verterem electram in vix, et nam inani mundi voluptua, est verterem invenire te. Eu quas ponderum expetenda duo, et eros facete incorrupte usu, duo te harum assueverit. Pro ad movet ignota oblique, eu veri verear pro. Te mea malis nusquam praesent, postea temporibus dissentiet per eu. Ex quo facer velit dictas. Sea in eius commune, in primis propriae vituperata sed, eu euismod fabulas delenit sed.</p>
          </TwoColDescription>

          <PostList posts={lessons}></PostList>

        </Container>

      </div>
    )
  }

}
