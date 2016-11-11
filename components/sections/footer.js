import React from 'react'
import { Container, Grid } from 'react-responsive-grid'
import { style } from 'glamor'

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100px',
    marginTop: '4rem',
    padding: '2rem 0'
  },
  title: {
    color: 'white',
    margin: 0
  }
}

export default class Footer extends React.Component {

  render() {
    return (
      <footer className={ style( styles.footer ) }>
        <Container>
          <Grid columns={2}>
            <h3 className={ style( styles.title ) }>Intro to JS</h3>
            <h5 className={ style( styles.title ) }>Zakk Fleischmann</h5>
          </Grid>
          <Grid columns={4}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Grid>
        </Container>
      </footer>
    )
  }

}
