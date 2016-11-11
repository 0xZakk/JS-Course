import React from 'react'


class Page extends React.Component {

  render () {

    // console.log( this )

    return (
      <div>
        <h1>Page</h1>
      </div>
    )
  }

}

Page.propTypes = {
    post: React.PropTypes.object,
    pages: React.PropTypes.array,
}

export default Page
