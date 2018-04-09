import React, { Component } from 'react';
import './Nav.css';
import classNames from 'classnames';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
      previousScrollY: 0,
      isNotAtTop: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
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

  render() {
    var navClassNames = classNames(
      "Nav",
      { "Nav--isHidden": this.state.isHidden },
      { "Nav--isNotAtTop": this.state.isNotAtTop }
    );
    return (
      <div className={navClassNames}>
        <img src="./Assets/logo.png" alt="logo" className="Nav_logo"/>
        <div className="Nav_desktop">
          <nav>
            <ul>
              <li>HOME</li>
              <li>TEAM</li>
              <li>EVENT</li>
              <li>RSVP</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;