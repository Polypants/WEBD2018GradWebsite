import React, { Component } from 'react';
import './MobileTeam.css';

const MobileTeamItem = ({singleStudentData}) => {
  return (
    <div className="MobileTeam_item">
      <div className="MobileTeam_item_image" style={{ 
        width: `${window.innerWidth * 0.7}px`, 
        height: `${window.innerWidth * 0.7}px`, 
        backgroundImage: 'url(/Assets/test.jpg)' 
      }}></div>
      <h1 className="MobileTeam_item_name">{singleStudentData.name}</h1>
    </div>
  );
}
// style={{
//   padding: `0 ${ (window.innerWidth * 0.15) - 10 }px`, 
//   width: (((window.innerWidth * 0.7) + 20) * studentData.length) 
// }}
const MobileTeamList = ({studentData}) => {
  return (
    <div className="MobileTeam_Slider" style={{ margin: `0 ${ window.innerWidth * 0.15 }px` }}>
      <div className="MobileTeam_list">
        {studentData.map(function(singleStudentData) {
          return <MobileTeamItem key={singleStudentData.name} singleStudentData={singleStudentData} />
        })}
      </div>
    </div>
  );
}

class MobileTeam extends Component {
  render() {
    return (
      <div className="MobileTeam">
        {this.props.dataRetrieved &&
          <MobileTeamList studentData={this.props.studentData} />
        }
      </div>
    );
  }
}

export default MobileTeam;