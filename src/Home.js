import React, { Component } from 'react';

import { Title } from "./components/Title"
import { RSVP } from "./components/RSVP"

class Home extends Component {
  render() {
    return (
      <div>
	      <Title />
	      <RSVP />
      </div>
    );
  }
}

export default Home;