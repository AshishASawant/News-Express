import React, { Component } from 'react'
import load from "../loading2.gif"

export default class loading extends Component {
  render() {
    return (
      <div className='text-center' style={{marginTop:"50px"}}>
        <img src={load} alt="loading"  />
      </div>
    )
  }
}
