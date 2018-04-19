import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0,
    };
  }

  componentWillMount() {
    var year = new Date().getFullYear();
    this.setState({ year: year });
  }

  render() {
    return (
      <div className="Footer">
        <div className="Footer_line"></div>
        <p>&copy; {this.state.year} Humber College Web Design & Interactive Media</p>
      </div>
    );
  }
}

export default Footer;
