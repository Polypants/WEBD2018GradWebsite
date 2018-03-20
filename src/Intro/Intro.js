import React, { Component } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import EventButton from '../EventButton/EventButton';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="intro_container">
        <div className="intro_item intro_item_title">
          <h1>Rise</h1>
          <h1>Above the</h1>
          <h1>Ordinary</h1>
        </div>
        <div className="intro_item intro_description_container">
          <div className="intro_description_left">
            <div className="intro_description_left_grid_container">
              <p className="intro_description">Humber College</p>
              <p className="intro_description">Web design & interactive media</p>
              <p className="intro_description">Class of 2018 grad show</p>
            </div>
          </div>
          <div className="intro_description_socialMedia">
            <div className="socialMediaIcons">
            <img src="https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png" alt="instagram" height="25" width="25" />
            <img src="http://icons.iconarchive.com/icons/yootheme/social-bookmark/256/social-facebook-box-blue-icon.png" alt="facebook" height="25" width="25" />
            <img src="data:image/png;base64,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" alt="tweeter" height="25" width="25" />
            </div>
          </div>
          <div className="intro_description_eventButton">
            <EventButton />
          </div>
        </div>
        <div className="intro_item verticalLine  verticalLine--border"></div>
        <div className="intro_item verticalLine verticalLine--second"></div>
      </div>
    );
  }
}

export default Intro;