import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Router, Route, browserHistory } from 'react-router'

import Foods from './components/Foods'
import Home from './components/Home'
import Vodka from './components/Vodka'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="/foods" component={Foods}/>
          <Route path="/vodka" component={Vodka}/>
        </Router>
      </div>
    );
  }
}

export default App;
