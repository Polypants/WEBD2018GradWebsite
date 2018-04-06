import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import firebase from 'firebase';

import Intro from '../Intro/Intro';
import MobileTeam from '../MobileTeam/MobileTeam';
import Event from '../Event/Event';
import MobileMenu from '../MobileMenu/MobileMenu';
import StudentDetail from '../StudentDetail/StudentDetail';
import MobileStudentList from '../MobileStudentList/MobileStudentList';
import StudentList from '../StudentList/StudentList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRetrieved: false,
      studentData: [],
      randomizedStudentData: [],
      isMobile: false,
      windowWidth: window.innerWidth
    };
  }

  onResize = () => {
    this.setState({ windowWidth: window.innerWidth });

    if (this.state.windowWidth < 600) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);

    // initialize firebase for student profile data
    firebase.initializeApp({
      apiKey: "AIzaSyByMtWsHIpivSm9z3OSk4Qst40gDxmfzWU",
      authDomain: "webd-bios.firebaseapp.com",
      databaseURL: "https://webd-bios.firebaseio.com",
      projectId: "webd-bios",
      storageBucket: "webd-bios.appspot.com",
      messagingSenderId: "1017191453567"
    });
    // get data from database and load into app state
    firebase.database().ref().once('value').then((data) => {
      // convert the object returned into an array
      var dataArray = Object.values(data.val());
      // create new randomized array
      var randomizedStudentData = dataArray.concat().sort(function() {
        return Math.random() - 0.5;
      });
      // load arrays into app state
      this.setState({ dataRetrieved: true, studentData: dataArray, randomizedStudentData: randomizedStudentData });
    });
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={MobileMenu} />
        <Route path='/' component={Intro} />
        {
          this.state.isMobile &&
          <Route path='/' render={() => (
            <MobileTeam studentData={this.state.randomizedStudentData} dataRetrieved={this.state.dataRetrieved} />
          )} />
        }
        <Route path='/' component={Event} />
        <Route path='/' component={StudentDetail} />
        {
          this.state.isMobile &&
          <Route path='/' component={MobileStudentList} />
        }
        {
          !this.state.isMobile &&
          <Route path='/' component={StudentList} />
        }
      </div>
    );
  }
}

export default App;