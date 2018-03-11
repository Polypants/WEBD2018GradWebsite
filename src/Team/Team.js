import React, { Component } from 'react';
import './Team.css';
import TeamItem from '../TeamItem/TeamItem';

const TeamList = ({studentData}) => {
  var randomizedStudentData = studentData.sort(function() {
    return Math.random() - 0.5;
  });
  return (
    <div className="Team_list" style={{ width: 300 * studentData.length }}>
      {randomizedStudentData.map(function(singleStudentData) {
        return <TeamItem key={singleStudentData.name} singleStudentData={singleStudentData} />
      })}
    </div>
  );
}

class Team extends Component {
  render() {
    return (
      <div className="Team">
        {this.props.dataRetrieved &&
          <TeamList studentData={this.props.studentData} />
        }
      </div>
    );
  }
}

export default Team;