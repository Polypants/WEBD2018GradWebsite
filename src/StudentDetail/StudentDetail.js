import React, { Component } from 'react';
import './StudentDetail.css';

class StudentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({ value: !this.state.value });
  }
    
  render() {
    return (
      <div className="StudentDetail">
        <section className="StudentDetail_showProfileButton">
            <button onClick={this.onClick} >View Student Profile</button>
        </section>
        <section className={this.state.value ? 'StudentDetail_profile': 'StudentDetail_profile_hide'}>
            <img onClick={this.onClick} className="StudentDetail_closeButton" src="Assets/close.svg"></img>
            <div className="StudentDetail_profile_text">
                <div className="StudentDetail_profile_text_wrapper">
                    <h3 className="StudentDetail_profile_text_name">YURI (ゆり)</h3>
                    <p className="StudentDetail_profile_text_title">Designer</p>
                    <div className="StudentDetail_profile_text_icons">
                        <a href="">
                            <img className="StudentDetail_profile_text_icons_icon" src="Assets/twitter.svg"></img>
                        </a>
                        <a href="">
                            <img className="StudentDetail_profile_text_icons_icon" src="Assets/facebook.svg"></img>
                        </a>
                        <a href="">
                            <img className="StudentDetail_profile_text_icons_icon" src="Assets/instagram.svg"></img>
                        </a>
                    </div>
                    <p className="StudentDetail_profile_text_bio">A rotating wheel. Turning an axle. Grinding. Bolthead. Linear gearbox. Falling sky. Seven holy stakes. A docked ship. A portal to another world. A thin rope tied to a thick rope. A torn harness. Parabolic gearbox. Expanding universe. Time controlled by slipping cogwheels. Existence of God. A prayer written in blood.</p>
                    <button className="StudentDetail_profile_text_icons_button">Portfolio</button>
                </div>
            </div>
            <div className="StudentDetail_profile_mugshot" style={{ backgroundImage: 'url(/Assets/yuri.png)' }}>
                <img className="StudentDetail_profile_mugshot_circle1" src="Assets/circle2.svg"></img>
                <img className="StudentDetail_profile_mugshot_circle2" src="Assets/circle2.svg"></img>
                <img className="StudentDetail_profile_mugshot_triangle1" src="Assets/triangle3.svg"></img>
                <img className="StudentDetail_profile_mugshot_triangle2" src="Assets/triangle5.svg"></img>
            </div>
        </section>
      </div>
    );
  }
}

export default StudentDetail;