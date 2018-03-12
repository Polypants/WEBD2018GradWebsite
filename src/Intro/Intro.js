import React, { Component } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import EventButton from '../EventButton/EventButton';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="Intro_leftContent">
          <h1 className="Intro_title">Rise<br/>Above the<br/>Ordinary</h1>
        </div>
        <div className="Intro_rightContent">
          <p className="Intro_description">Humber College<br/>Web design & interactive media<br/>Class of 2018 grad show</p>
          <EventButton />
        </div>
      </div>
    );
  }
}

export default Intro;