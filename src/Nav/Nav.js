import React, { Component } from 'react';

import classNames from 'classnames';

import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      isNotAtTop: false,
      isMobileMenuOpen: false,
      previousScrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onMobileButtonClick = () => {
    this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen});
  }

  onScroll = () => {
    if (window.scrollY > 0) {
      this.setState({isNotAtTop: true});
    } else {
      this.setState({isNotAtTop: false});
    }

    if (window.scrollY < window.innerHeight) {
      this.setState({isAt100FromTop: true});
    } else {
      this.setState({isAt100FromTop: false});
    }

    if (window.scrollY > this.state.previousScrollY) {
      this.setState({isHidden: true});
    }
    if (window.scrollY < this.state.previousScrollY) {
      this.setState({isHidden: false});
    }

    this.setState({previousScrollY: window.scrollY});
  }

  onLinkClick = (location, offset) => {
    this.props.onNavItemClick(location, offset);
    this.setState({isMobileMenuOpen: false});
  }

  render() {
    var navClassNames = classNames(
      'Nav',
      {'Nav--isNotAtTop': this.state.isNotAtTop},
      {'Nav--isMobileMenuOpen': this.state.isMobileMenuOpen}
    );
    return (
      <div className={navClassNames}>
        <div className="Nav_background"></div>
        <div className="Nav_mobileMenu">
          <nav>
            <ul>
              <li onClick={() => {this.onLinkClick('Intro', 0)}}>HOME</li>
              <li onClick={() => {this.onLinkClick('Team', -150)}}>TEAM</li>
              <li onClick={() => {this.onLinkClick('Event', -100)}}>EVENT</li>
            </ul>
          </nav>
        </div>
        <img src="./Assets/logo.png" alt="logo" className="Nav_logo"/>
        {!this.props.isMobile &&
          <div className="Nav_desktop">
            <nav>
              <ul>
                <li onClick={() => {this.onLinkClick('Intro', 0)}}>HOME</li>
                <li onClick={() => {this.onLinkClick('Team', -150)}}>TEAM</li>
                <li onClick={() => {this.onLinkClick('Event', -100)}}>EVENT</li>
              </ul>
            </nav>
          </div>
        }
        {this.props.isMobile &&
          <div className="Nav_mobileButton" onClick={this.onMobileButtonClick}>
            <div className="Nav_mobileButtonLine1 Nav_mobileButtonLine"></div>
            <div className="Nav_mobileButtonLine2 Nav_mobileButtonLine"></div>
            <div className="Nav_mobileButtonLine3 Nav_mobileButtonLine"></div>
          </div>
        }
      </div>
    );
  }
}

export default Nav;