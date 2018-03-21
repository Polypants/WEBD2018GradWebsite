import React, { Component } from 'react';
import './StudentDetail.css';

class StudentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }
    onClick(e){
    e.preventDefault();
    this.setState({value: !this.state.value})
  }
    
  render() {
    return (
      <div className="StudentDetail">
        <section className="StudentDetail_showProfileButton">
            <button onClick={this.onClick.bind(this)} >View Student Profile</button>
        </section>
        <section className={this.state.value ? 'StudentDetail_profile': 'StudentDetail_profile_hide'}>
            <img onClick={this.onClick.bind(this)} className="StudentDetail_closeButton" src="Assets/close.png"></img>
            <div className="StudentDetail_profile_text">
                <div className="StudentDetail_profile_text_wrapper">
                    <h3 className="StudentDetail_profile_text_name">Yuri (ゆり)</h3>
                    <p className="StudentDetail_profile_text_title">Designer</p>
                    <p className="StudentDetail_profile_text_bio">A rotating wheel. Turning an axle. Grinding. Bolthead. Linear gearbox. Falling sky. Seven holy stakes. A docked ship. A portal to another world. A thin rope tied to a thick rope. A torn harness. Parabolic gearbox. Expanding universe. Time controlled by slipping cogwheels. Existence of God. Swimming with open water in all directions. Drowning. A prayer written in blood. A prayer written in time-devouring snakes with human eyes. A thread connecting all living human eyes. A kaleidoscope of holy stakes. Exponential gearbox. A sky of exploding stars. God disproving the existence of God. A wheel rotating in six dimensions. Forty gears and a ticking clock.</p>
                    <div className="StudentDetail_profile_text_icons">
                        <a href="">
                            <img className="StudentDetail_profile_text_icons_icon" src="Assets/facebook.png"></img>
                        </a>
                        <a href="">
                            <img className="StudentDetail_profile_text_icons_icon" src="Assets/instagram.png"></img>
                        </a>
                        <a href="">
                            <img className="StudentDetail_profile_text_icons_icon" src="Assets/twitter.png"></img>
                        </a>
                            <button className="StudentDetail_profile_text_icons_button">Portfolio</button>
                    </div>
                </div>
            </div>
            <div className="StudentDetail_profile_mugshot" style={{ 
            backgroundImage: 'url(/Assets/yuri.png)'
      }}>
            </div>
        </section>
      </div>
    );
  }
}

export default StudentDetail;