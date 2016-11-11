import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import { style, merge } from 'glamor'
import baffle from 'baffle'
import TweenMax from 'gsap'

const styles = {
  postItem: {
    listStyleType: 'none',
    margin: 0,
    borderBottom: '1px solid black',
  },
  postItemHeader: {
    display: 'flex',
    color: 'black',
    padding: '1rem 0',
    cursor: 'pointer'
  },
  postItemBody: {
    fontFamily: 'monospace',
    height: 0,
    overflow: 'hidden',
    padding: '0 2rem'
  },
  postItemBodySection: {
    padding: '0.5rem 0',
    ':first-of-type': {
      position: 'relative',
      left: '-1rem'
    },
    ':last-of-type': {
      textAlign: 'center',
      paddingBottom: '2.5rem'
    }
  },
  headerLink: {
    position: 'relative',
    textDecoration: 'none',
    color: 'black',
    padding: '0.5rem 1rem',
    transition: 'all 300ms ease',
    verticalAlign: 'baseline',
    ':before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'black',
      height: '100%',
      width: 0,
      transition: 'all 300ms ease',
      zIndex: -1
    },
    ':hover': {
      color: 'white'
    },
    ':hover:before': {
      width: '100%'
    }
  },
  cta: {
    display: 'inline-block',
    border: '1px solid black',
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'black',
    padding: '0.5rem 1rem',
    transition: 'all 300ms ease',
    verticalAlign: 'baseline',
    margin: '0 auto',
    ':before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'black',
      height: '100%',
      width: 0,
      transition: 'all 300ms ease',
      zIndex: -1
    },
    ':hover': {
      color: 'white'
    },
    ':hover:before': {
      width: '100%'
    }
  },
  noMargin: {
    margin: 0
  },
  cross: {
    marginLeft: 'auto',
    height: '2rem',
    width: '2rem',
    display: 'flex',
    flexDirection: 'column',
    transform: 'rotate(45deg)'
  },
  crossItem: {
    backgroundColor: 'black',
    width: '2rem',
    height: '1px',
    margin: '2px',
    transformOrigin: 'left',
    pointerEvents: 'none',
    ':first-of-type': {
      transform: 'rotate(45deg) translateX(0.2rem)'
    },
    ':last-of-type': {
      transform: 'rotate(-45deg) translateX(0.2rem)',
      marginTop: 'auto'
    },
  }
}

export default class PostListItem extends React.Component {

  togglePostBody( e ) {

    let postItemHeader = e.target.tagName !== 'A' ? e.target.parentNode : e.target
    let postItem = postItemHeader.parentNode
    let postItemBody = postItemHeader.nextSibling

    if ( postItem.classList.contains('is-active') ) {
      postItem.classList.remove('is-active')

      TweenMax.to(postItemBody, 0.5, { height: 0 })
      TweenMax.to(postItemHeader.lastChild, 0.5, { rotation: '45deg'})
    } else {
      postItem.classList.add('is-active')

      TweenMax.to(postItemHeader.lastChild, 0.5, { rotation: '0'})
      TweenMax.set(postItemBody, { height: 'auto' })
      TweenMax.from(postItemBody, 0.5, { height: 0 })
    }

  }

  render () {
    const post = this.props.page

    const learningObjectives = []

    if ( typeof post.learningObjectives === 'string' ) {
      post.learningObjectives.split(';').forEach((learningObjective, index) => {
        if ( learningObjective.length > 0) {
          learningObjectives.push( <li key={index}>{learningObjective}</li> )
        }
      })
    }

    return (
      <div className={ style( styles.postItem ) }>

        <a className={ style( styles.postItemHeader ) } onClick={ this.togglePostBody } >

          <h3 className={ style( styles.noMargin ) }>
            { post.title }
          </h3>

          <div className={ style( styles.cross ) }>
            <span className={ style( styles.crossItem ) }></span>
            <span className={ style( styles.crossItem ) }></span>
          </div>

        </a>

        <div className={ style( styles.postItemBody ) }>

          <div className={ style( styles.postItemBodySection ) }>
            <Link to={ prefixLink( post.path ) } className={ style( styles.headerLink ) }>Lesson</Link>
            <Link to={ prefixLink( post.path + 'slides/' ) } className={ style( styles.headerLink ) }>Slides</Link>
            <Link to={ prefixLink( post.path + 'homework/' ) } className={ style( styles.headerLink ) }>Homework</Link>
          </div>

          <div className={ style( styles.postItemBodySection ) }>
            <h6 className={ style( styles.noMargin ) }>Description:</h6>
            <p>{ post.description }</p>
          </div>

          <div className={ style( styles.postItemBodySection ) }>
            <h6 className={ style( styles.noMargin ) }>Learning Objectives:</h6>
            <ul>
              {learningObjectives}
            </ul>
          </div>

          <div className={ style( styles.postItemBodySection ) }>
              <Link to={ prefixLink( post.path ) } className={ style( styles.cta ) }>
                Start Lesson
              </Link>
          </div>

        </div>

      </div>
    )

  }

}
