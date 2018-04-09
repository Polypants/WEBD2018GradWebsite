import React, { Component } from 'react';
import './StudentDetail.css';

class StudentDetail extends Component {
  render() {
    return (
      <div className="StudentDetail">
        <img onClick={this.props.closeStudentDetail} className="StudentDetail_closeButton" src="Assets/close.svg" alt="close button"></img>
        <div className="StudentDetail_profile_text">
          <div className="StudentDetail_profile_text_wrapper">
            <h3 className="StudentDetail_profile_text_name">{this.props.selectedStudent.name}</h3>
            <p className="StudentDetail_profile_text_title">{this.props.selectedStudent.title}</p>
            <div className="StudentDetail_profile_text_icons">
              {this.props.selectedStudent.twitter !== "none" &&
                <a href={this.props.selectedStudent.twitter}>
                  <img className="StudentDetail_profile_text_icons_icon" src="Assets/twitter.svg" alt=""></img>
                </a>
              }
              {this.props.selectedStudent.facebook !== "none" &&
                <a href="">
                  <img className="StudentDetail_profile_text_icons_icon" src="Assets/facebook.svg" alt=""></img>
                </a>
              }
              {this.props.selectedStudent.instagram !== "none" &&
                <a href={this.props.selectedStudent.instagram}>
                  <img className="StudentDetail_profile_text_icons_icon" src="Assets/instagram.svg" alt=""></img>
                </a>
              }
              {this.props.selectedStudent.behance !== "none" &&
                <a href={this.props.selectedStudent.behance}>
                  <img className="StudentDetail_profile_text_icons_icon" src="Assets/behance.svg" alt=""></img>
                </a>
              }
              {this.props.selectedStudent.linkedin !== "none" &&
                <a href={this.props.selectedStudent.linkedin}>
                  <img className="StudentDetail_profile_text_icons_icon" src="Assets/linkedin.svg" alt=""></img>
                </a>
              }
              {this.props.selectedStudent.github !== "none" &&
                <a href={this.props.selectedStudent.github}>
                  <img className="StudentDetail_profile_text_icons_icon" src="Assets/github.svg" alt=""></img>
                </a>
              }
            </div>
            <p className="StudentDetail_profile_text_bio">{this.props.selectedStudent.description}</p>
            <button className="StudentDetail_profile_text_icons_button">Portfolio</button>
          </div>
        </div>
        <div className="StudentDetail_profile_mugshot" style={{ backgroundImage: 'url(/Assets/yuri.png)' }}>
          <img className="StudentDetail_profile_mugshot_circle1" src="Assets/circle2.svg" alt=""></img>
          <img className="StudentDetail_profile_mugshot_circle2" src="Assets/circle2.svg" alt=""></img>
          <img className="StudentDetail_profile_mugshot_triangle1" src="Assets/triangle3.svg" alt=""></img>
          <img className="StudentDetail_profile_mugshot_triangle2" src="Assets/triangle5.svg" alt=""></img>
        </div>
      </div>
    );
  }
}

export default StudentDetail;