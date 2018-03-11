import React, { Component } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="Intro_exampleElement">
          <h1 className="Intro_exampleElement_title">The Introduction</h1>
        </div>
      </div>
    );
  }
}

export default Intro;