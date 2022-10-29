import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'

export default class Toploadbar extends Component {
  render() {
    return (
        <div>
        <LoadingBar
          color='#f11946'
          progress={this.props.progress}
          height={2}
        /></div>
    )
  }
}
