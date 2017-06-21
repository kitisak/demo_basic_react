import React, { Component } from 'react'
import Navigation from './Navigation'

class Foods extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <h3>All my food page</h3>
        <hr/>
        <ul>
          <li>Food 01</li>
          <li>Food 02</li>
          <li>Food 03</li>
          <li>Food 04</li>
        </ul>
      </div>
    )
  }
}

export default Foods;
