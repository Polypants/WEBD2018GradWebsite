import React, { Component } from 'react';
import './StudentDetail.css';
import classNames from 'classnames';

class StudentDetail extends Component {
  constructor(props) {
    super(props);

    this.transitionCircleStyles = {
      height: `${window.innerHeight + window.innerWidth}px`,
      width: `${window.innerHeight + window.innerWidth}px`,
      transform: `translateX(${this.props.mousePos.x - (window.innerWidth / 2)}px) translateY(${this.props.mousePos.y - (window.innerHeight / 2)}px) translate(-50%, -50%) scale(0)`,
      transition: `none`
    }

    this.state = {
      scrollY: 0,
      isLoading: true,
      isLoaded: false,
      isCircleTransitioned: false,
      isCircleDisplayNone: false
    };
  }

  componentDidMount() {
    this.refs.transitionCircle.addEventListener("transitionend", () => {
      this.setState({ isCircleTransitioned: true });
      setTimeout(() => {
        this.setState({ isCircleDisplayNone: true });
      }, 1100);
    }, false);

    this.refs.StudentDetail.addEventListener("scroll", this.onScroll);

    setTimeout(() => {
      this.setState({ isLoading: false });
      this.transitionCircleStyles = {
        height: `${window.innerHeight + window.innerWidth}px`,
        width: `${window.innerHeight + window.innerWidth}px`,
        transform: `translateX(0) translateY(0) translate(-50%, -50%) scale(1)`,
        transition: `transform 0.5s cubic-bezier(.5,.01,1,.46), opacity 1s 0.3s`
      };
    }, 0);

    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 1500);
  }

  componentWillUnmount() {
    this.refs.StudentDetail.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    this.setState({ scrollY: this.refs.StudentDetail.scrollTop });
  }

  render() {
    var StudentDetailClasses = classNames(
      'StudentDetail',
      {'StudentDetail--isLoading': this.state.isLoading},
      {'StudentDetail--isLoaded': this.state.isLoaded},
      {'StudentDetail--isCircleTransitioned': this.state.isCircleTransitioned},
      {'StudentDetail--isCircleDisplayNone': this.state.isCircleDisplayNone}
    );
    // var transitionCircleStyles = {};
    // if (this.state.isLoading) {
    //   transitionCircleStyles = {}
    // } else {
    //   transitionCircleStyles = {
    //     height: `${window.innerHeight + window.innerWidth}px`,
    //     width: `${window.innerHeight + window.innerWidth}px`,
    //     transform: `translate(-50%, -50%) scale(1) translateX(0) translateY(0)`,
    //     transition: `transform 10s cubic-bezier(.4,0,1,.6), opacity 0.8s 10s`
    //   }
    // }
    return (
      <div className={StudentDetailClasses} ref="StudentDetail">
        <div 
          className="StudentDetail_transitionCircle"
          style={this.transitionCircleStyles}
          ref="transitionCircle"
        ></div>
        <div className="StudentDetail_container">
          <img
            onClick={this.props.closeStudentDetail}
            className="StudentDetail_closeButton"
            src="Assets/close.svg"
            alt="close button"
          ></img>
          <div className="StudentDetail_profile_text">
            <div className="StudentDetail_profile_text_wrapper">
              <h3 className="StudentDetail_profile_text_name">{this.props.selectedStudent.name}</h3>
              <p className="StudentDetail_profile_text_title">{this.props.selectedStudent.title}</p>
              <div className="StudentDetail_profile_text_icons">
                {this.props.selectedStudent.twitter !== "none" &&
                  <a
                    href={this.props.selectedStudent.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/twitter.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.facebook !== "none" &&
                  <a
                    href={this.props.selectedStudent.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/facebook.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.instagram !== "none" &&
                  <a
                    href={this.props.selectedStudent.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/instagram.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.behance !== "none" &&
                  <a
                    href={this.props.selectedStudent.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/behance.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.linkedin !== "none" &&
                  <a
                    href={this.props.selectedStudent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/linkedin.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.github !== "none" &&
                  <a
                    href={this.props.selectedStudent.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/github.svg" alt=""></img>
                  </a>
                }
              </div>
              <p className="StudentDetail_profile_text_bio">{this.props.selectedStudent.description}</p>
              {this.props.selectedStudent.portfolio !== "none" &&
                <a
                  href={this.props.selectedStudent.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="StudentDetail_profile_text_icons_button">Portfolio</button>
                </a>
              }
              <div className="StudentDetail_mobileBottomBar">
                <div className="StudentDetail_mobileIcons">
                {this.props.selectedStudent.twitter !== "none" &&
                  <a
                    href={this.props.selectedStudent.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/twitter.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.facebook !== "none" &&
                  <a
                    href={this.props.selectedStudent.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/facebook.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.instagram !== "none" &&
                  <a
                    href={this.props.selectedStudent.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/instagram.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.behance !== "none" &&
                  <a
                    href={this.props.selectedStudent.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/behance.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.linkedin !== "none" &&
                  <a
                    href={this.props.selectedStudent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/linkedin.svg" alt=""></img>
                  </a>
                }
                {this.props.selectedStudent.github !== "none" &&
                  <a
                    href={this.props.selectedStudent.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="StudentDetail_profile_text_icons_icon" src="Assets/github.svg" alt=""></img>
                  </a>
                }
                </div>
                {this.props.selectedStudent.portfolio !== "none" &&
                  <a
                    href={this.props.selectedStudent.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="StudentDetail_mobilePortfolioButton">Portfolio</button>
                  </a>
                }
              </div>
            </div>
          </div>
          <div className="StudentDetail_profile_mugshot">
            <img
              style={this.props.isMobile ? {
                transform: `translateY(${ this.state.scrollY * 0.50 }px)`,
                filter: `blur(${ this.state.scrollY / 50 }px)`,
                opacity: 1 - (this.state.scrollY / 200)
              } : {
                transform: `translateX(-25%)`
              }}
              className="StudentDetail_profile_mugshot_student" 
              src="Assets/yuri.png"
              alt=""
            ></img>
            <img
              style={this.props.isMobile ? {
                transform: `translateY(${ this.state.scrollY * 0.50 }px) translateX(55%) scale(0.4)`,
                filter: `blur(${ this.state.scrollY / 50 }px)`
              } : {
                transform: `translateX(0%) scale(0.3)`
              }}
              className="StudentDetail_profile_mugshot_circle1"
              src="Assets/circle2.svg"
              alt=""
            ></img>
            <img
              style={this.props.isMobile ? {
                transform: `translateY(${ this.state.scrollY * 0.50 }px) translateX(55%) scale(0.2)`,
                filter: `blur(${ this.state.scrollY / 50 }px)`
              } : {
                transform: `translateX(-25%) scale(0.5)`
              }}
              className="StudentDetail_profile_mugshot_circle2"
              src="Assets/circle2.svg"
              alt=""
            ></img>
            <img
              style={this.props.isMobile ? {
                transform: `translateY(${ this.state.scrollY * 0.50 }px) translateX(55%) rotate(-10deg)`,
                filter: `blur(${ this.state.scrollY / 50 }px)`
              } : {
                transform: `translateX(10%)`
              }}
              className="StudentDetail_profile_mugshot_triangle1"
              src="Assets/triangle3.svg"
              alt=""
            ></img>
            <img
              style={this.props.isMobile ? {
                transform: `translateY(${ this.state.scrollY * 0.50 }px) translateX(55%) rotate(10deg)`,
                filter: `blur(${ this.state.scrollY / 50 }px)`
              } : {
                transform: `translateX(25%) rotate(15deg)`
              }}
              className="StudentDetail_profile_mugshot_triangle2"
              src="Assets/triangle5.svg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentDetail;