import React, { Component } from 'react';
import './Nav.css';
import classNames from 'classnames';
import { Link } from 'react-scroll';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      previousScrollY: 0,
      isNotAtTop: false,
      isMobileMenuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onMobileButtonClick = () => {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  }

  onScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ isNotAtTop: true });
    } else {
      this.setState({ isNotAtTop: false });
    }

    if (window.scrollY > this.state.previousScrollY) {
      this.setState({ isHidden: true });
    }
    if (window.scrollY < this.state.previousScrollY) {
      this.setState({ isHidden: false });
    }

    this.setState({ previousScrollY: window.scrollY });
  }

  onLinkClick = () => {
    this.setState({ isMobileMenuOpen: false });
    this.props.onNavItemClick();
  }


  render() {
    var navClassNames = classNames(
      "Nav",
      {"Nav--isHidden": this.state.isHidden},
      {"Nav--isNotAtTop": this.state.isNotAtTop},
      {"Nav--isMobileMenuOpen": this.state.isMobileMenuOpen}
    );
    return (
      <div className={navClassNames}>
        <div className="Nav_background"></div>
        <div className="Nav_mobileMenu">
          <nav>
            <ul>
              <li>
                <Link onClick={this.onLinkClick} to="Intro" smooth={true} duration={500}>HOME</Link>
              </li>
              <li>
                <Link onClick={this.onLinkClick} to="Team" offset={-100} smooth={true} duration={500}>TEAM</Link>
              </li>
              <li>
                <Link onClick={this.onLinkClick} to="Event"offset={-65} smooth={true} duration={500}>EVENT</Link>
              </li>
              <li>
                <Link onClick={this.onLinkClick} to="Rsvp" smooth={true} duration={500}>RSVP</Link>
              </li>
            </ul>
          </nav>
        </div>
        <img src="./Assets/logo.png" alt="logo" className="Nav_logo"/>
        {!this.props.isMobile &&
          <div className="Nav_desktop">
            <nav>
              <ul>
                <li>
                  <Link onClick={this.onLinkClick} to="Intro" smooth={true} duration={500}>HOME</Link>
                </li>
                <li>
                  <Link onClick={this.onLinkClick} to="Team" offset={-100} smooth={true} duration={500}>TEAM</Link>
                </li>
                <li>
                  <Link onClick={this.onLinkClick} to="Event" offset={-65} smooth={true} duration={500}>EVENT</Link>
                </li>
                <li>
                  <Link onClick={this.onLinkClick} to="Rsvp" smooth={true} duration={500}>RSVP</Link>
                </li>
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