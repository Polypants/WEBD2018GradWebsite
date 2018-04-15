import React, { Component } from 'react';
import './Intro.css';
import Graphic from '../Graphic/Graphic';
import { Element } from 'react-scroll';
import classNames from 'classnames';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.wheelTimeout = undefined;
    this.state = {
      mousePercent: { x: 0.5, y: 0.5 },
      isMouseInApp: false
    };
  }

  onMouseMove = (e) => {
    var percentY = e.clientY / window.innerHeight;
    var percentX = e.clientX / window.innerWidth;
    this.setState({ mousePercent: { x: percentX, y: percentY } });
  }

  onMouseEnter = () => {
    this.setState({ isMouseInApp: true });
  }

  onMouseLeave = () => {
    this.setState({ isMouseInApp: false });
  }

  render() {
    return (
      <Element name="Intro">
        <div className={classNames(
          "Intro",
          {"Intro--stage2": this.props.introStage === 1 },
          {"Intro--stage3": this.props.introStage === 2 },
          {"Intro--stage4": this.props.introStage >= 3 }
        )}>
          <Graphic
            mousePercent={this.props.mousePercent}
            isMouseInApp={this.state.isMouseInApp}
          />
          <div className="Intro_socialMediaContainer">
            <a
              href="https://twitter.com/elevatewebd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Intro_twitterIcon Intro_socialMediaIcon">
                <img src="./Assets/twitter.svg" alt=""/>
              </div>
            </a>
            <a
              href="https://www.facebook.com/events/295770570953527/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Intro_facebookIcon Intro_socialMediaIcon">
                <img src="./Assets/facebook.svg" alt=""/>
              </div>
            </a>
            <a
              href="https://www.instagram.com/elevatewebd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Intro_instagramIcon Intro_socialMediaIcon">
                <img src="./Assets/instagram.svg" alt=""/>
              </div>
            </a>
          </div>
          <div className="Intro_informationContainer">
            <div className="Intro_titlesContainer">
              <div className="Intro_titleContainer">
                <h1 className="Intro_title">GRADSHOW 2018</h1>
              </div>
              <div className="Intro_subtitleContainer">
                <h2 className="Intro_subtitle">HUMBER COLLEGE WEB DESIGN & INTERACTIVE MEDIA</h2>
              </div>
              <div className="Intro_taglineContainer">
                <h6 className="Intro_tagline">RISE ABOVE THE ORDINARY</h6>
              </div>
            </div>
            <div className="Intro_titlesContainer Intro_titlesContainerStage1">
              <div className="Intro_title2Container">
                <h1 className="Intro_title2">50+</h1>
              </div>
              <div className="Intro_subtitle2Container">
                <h2 className="Intro_subtitle2">Interactive<br/>Projects</h2>
              </div>
            </div>
            <div className="Intro_titlesContainer Intro_titlesContainerStage2">
              <div className="Intro_title3Container">
                <h1 className="Intro_title3">Discover</h1>
              </div>
              <div className="Intro_subtitle3Container">
                <h2 className="Intro_subtitle3">Potential</h2>
              </div>
            </div>
            <div className="Intro_locationContainer">
              <img className="Intro_locationIcon" src="./Assets/location.svg" alt="location icon"/>
              <div className="Intro_locationInformation">
                <h3>April 24th 5-8PM @ The Burroughes</h3>
                <h4>639 Queen St W, Toronto, ON M5V 2B7</h4>
              </div>
            </div>
            <div className="Intro_rsvpButtonContainer">
              <a
                href="https://www.eventbrite.ca/e/elevate-portfolio-show-and-networking-event-tickets-44610745942"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="Intro_rsvpButton">RSVP Now</div>
              </a>
            </div>
          </div>
          <div className="Intro_downArrowContainer">
            <div className="Intro_downArrowShaft"></div>
            <div className="Intro_downArrowHead"></div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Intro;