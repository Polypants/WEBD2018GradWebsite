import React, { Component } from 'react';
import './TeamItem.css';

class TeamItem extends Component {
  render() {
    return (
      <div className="TeamItem">
        <div className="TeamItem_image" style={{ backgroundImage: 'url(/Assets/test.jpg)' }}></div>
        <h1>{this.props.singleStudentData.name}</h1>
      </div>
    );
  }
}

export default TeamItem;