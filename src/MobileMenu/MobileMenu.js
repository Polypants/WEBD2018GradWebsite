import React, { Component } from 'react';
import './MobileMenu.css';

class MobileMenu extends Component {
  constructor(props){
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active:false,
    };
  }
  addActiveClass(){
    const currentState = this.state.active;
    this.setState({active:!currentState});
  }
  render() {
    return (
      <div className="Container">
          <div className="Navigation-Wrapper">
            <span>Logo here</span>
            <nav>
              <a className='Hamburger-Button' href="#" onClick={this.addActiveClass}><span></span></a>
              <ul className={this.state.active ? 'Show-Mobile-Menu': null}>
                <li>Team</li>
                <li>RSVP</li>
              </ul>
            </nav>
          </div>
      </div>
    );
  }
}

export default MobileMenu;