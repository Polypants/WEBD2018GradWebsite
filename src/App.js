import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    );
  }
}

export default App;