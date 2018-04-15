import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import firebase from 'firebase';
import classNames from 'classnames';

import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import Event from '../Event/Event';
import StudentDetail from '../StudentDetail/StudentDetail';
import MobileStudentList from '../MobileStudentList/MobileStudentList';
import StudentList from '../StudentList/StudentList';
import Footer from '../Footer/Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRetrieved: false,
      studentData: [],
      randomizedStudentData: [],
      isMobile: false,
      isLoading: true,
      selectedStudent: null,
      mousePos: {x: 0, y: 0},
      mousePercent: { x: 0.5, y: 0.5 },
      isIntroLocked: true,
      introStage: 0,
      isWheeling: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("wheel", this.onWheel);
    }, 3600);

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

    // set isLoading bool to trigger App--isLoading class for animations
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3600);
  }

  onWheel = (e) => {
    if (e.deltaY > 0) {
      if (!this.state.isWheeling) {
        this.setState({introStage: this.state.introStage + 1});
      }
      this.setState({isWheeling: true});
      clearTimeout(this.wheelTimeout);
      this.wheelTimeout = setTimeout(() => {
        this.wheelTimeout = undefined;
        this.setState({isWheeling: false});
      }, 250);
    }
    if (this.state.introStage === 3 
        && this.state.isIntroLocked) {
      this.setState({isIntroLocked: false});
    }
  }

  onNavItemClick = () => {
    this.setState({
      isIntroLocked: false,
      introStage: this.state.introStage + 10
    });
  }

  onMouseMove = (e) => {
    var percentY = e.clientY / window.innerHeight;
    var percentX = e.clientX / window.innerWidth;
    this.setState({ 
      mousePos: {x: e.clientX, y: e.clientY},
      mousePercent: {x: percentX, y: percentY}
    });
  }

  setSelectedStudent = (student) => {
    this.setState({ selectedStudent: student });
  }

  closeStudentDetail = (student) => {
    this.setState({ selectedStudent: null });
  }

  onResize = () => {
    if (window.innerWidth < 600) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  render() {
    var appClasses = classNames(
      'App',
      {'App--isLoading': this.state.isLoading},
      {'App--isIntroLocked': this.state.isIntroLocked}
    );
    return (
      <div className={appClasses} onMouseMove={this.onMouseMove}>
        <Route path='/' render={() => (
          <Nav
            isMobile={this.state.isMobile}
            onNavItemClick={this.onNavItemClick}
          />
        )} />
        <Route path='/' render={() => (
          <Intro
            mousePercent={this.state.mousePercent}
            introStage={this.state.introStage}
          />
        )} />
        {this.state.selectedStudent !== null &&
          <Route path='/' render={() => (
            <StudentDetail
              mousePos={this.state.mousePos}
              isMobile={this.state.isMobile}
              selectedStudent={this.state.selectedStudent}
              closeStudentDetail={this.closeStudentDetail}
            />
          )} />
        }

        {this.state.isMobile &&
          <Route path='/' render={() => (
            <MobileStudentList
              randomizedStudentData={this.state.randomizedStudentData}
              setSelectedStudent={this.setSelectedStudent}
            />
          )} />
        }
        {!this.state.isMobile &&
          <Route path='/' render={() => (
            <StudentList
              randomizedStudentData={this.state.randomizedStudentData}
              setSelectedStudent={this.setSelectedStudent}
            />
          )} />
        }
        <Route path='/' component={Event} />
        <Route path='/' component={Footer} />
      </div>
    );
  }
}

export default App;
