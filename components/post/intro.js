import React from 'react'
import { style } from 'glamor'
import moment from 'moment'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import { Container } from 'react-responsive-grid'

const styles = {
  intro: {
    fontFamily: 'monospace',
    padding: '2rem 0',
    marginBottom: '2rem',
    borderBottom: '1px solid black'
  },
  header: {
    marginTop: 0,
    ':first-of-type': {
      marginBottom: 0
    }
  },
  mono: {
    fontFamily: 'monospace',
    fontWeight: 'normal',
    margin: '0 0.5rem',
    verticalAlign: 'middle'
  }
}

const Intro = React.createClass({
  render: function() {
    const intro = this.props

    const learningObjectives = []

    if ( typeof intro.learningObjectives === 'string' ) {
      intro.learningObjectives.split(';').forEach((learningObjective, index) => {
        if ( learningObjective.length > 0) {
          learningObjectives.push( <li key={index}>{learningObjective}</li> )
        }
      })
    }


    console.log( intro )
    return (
      <div>
        <Container className={ style( styles.intro ) }>

          <h6 className={ style( styles.header ) }>
            Lesson { intro.index }
            <span className={ style( styles.mono ) }>x</span>
            { moment(intro.date).format('MMMM Do YYYY')}
          </h6>

          <p>{ intro.description }</p>

          <h6 className={ style( styles.header ) }>
            <Link to={ prefixLink( intro.path + 'slides/' ) } className={ style( styles.headerLink ) }>Slides</Link>
            <span className={ style( styles.mono ) }>x</span>
            <Link to={ prefixLink( intro.path + 'homework/' ) } className={ style( styles.headerLink ) }>Homework</Link>
          </h6>

          <h6 className={ style( styles.noMargin ) }>Learning Objectives:</h6>


          {learningObjectives}

        </Container>
      </div>
    );
  }
});

export default Intro
