import React from 'react'

export default class MainContent extends React.Component {

  render() {
    return (
      <div className="zlf-main" style={{marginTop: 16}}>
        {this.props.children}
      </div>
    )
  }
}