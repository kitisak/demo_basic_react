import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/foods">All Food</Link>
          </li>
          <li>
            <Link to="/vodka">All Vodka from API</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
