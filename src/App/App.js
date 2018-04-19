import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import firebase from 'firebase';
import classNames from 'classnames';
import { scroller, animateScroll as scroll } from 'react-scroll';

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
      isMobile: false,
      isLoading: true,
      isGraphicOutOfView: true,
      isStudentDetailCircleTransitioned: false,
      isWheeling: false,
      isIntroLocked: true,
      isTransitioningFromDetail: false,
      isDataRetrieved: false,
      studentData: [],
      randomizedStudentData: [],
      selectedStudent: null,
      mousePos: {x: 0, y: 0},
      mousePercent: {x: 0.5, y: 0.5},
      touchStartPos: {x: 0, y: 0},
      touchEndPos: {x: 0, y: 0},
      introStage: 0,
      scrollTopBeforeDetailOpen: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onWheel);
    window.addEventListener('resize', this.onResize);
    this.onResize();

    firebase.initializeApp({
      apiKey: 'AIzaSyByMtWsHIpivSm9z3OSk4Qst40gDxmfzWU',
      authDomain: 'webd-bios.firebaseapp.com',
      databaseURL: 'https://webd-bios.firebaseio.com',
      projectId: 'webd-bios',
      storageBucket: 'webd-bios.appspot.com',
      messagingSenderId: '1017191453567'
    });

    firebase.database().ref().once('value').then((data) => {
      var dataArray = Object.values(data.val());
      var randomizedStudentData = dataArray.concat().sort(function() {
        return Math.random() - 0.5;
      });
      this.setState({ isDataRetrieved: true, studentData: dataArray, randomizedStudentData: randomizedStudentData });
    });
  }

  onStudentDetailCircleTransitioned = () => {
    this.setState({
      isStudentDetailCircleTransitioned: true,
      scrollTopBeforeDetailOpen: window.scrollY
    });
  }

  closeStudentDetail = (student) => {
    this.setState({
      isStudentDetailCircleTransitioned: false,
      isTransitioningFromDetail: true
    });
    scroll.scrollTo(this.state.scrollTopBeforeDetailOpen, {
      duration: 0,
      smooth: false
    });
    setTimeout(() => {
      this.setState({
        selectedStudent: null,
        scrollTopBeforeDetailOpen: 0
      });
    }, 50);
    setTimeout(() => {
      this.setState({isTransitioningFromDetail: false});
    }, 500);
  }

  onWheel = (e) => {
    if (!this.state.isLoading) {
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
      if (this.state.introStage === 3 && this.state.isIntroLocked) {
        this.setState({isIntroLocked: false});
      }
    }
  }

  onTouchStart = (e) => {
    if (!this.state.isLoading) {
      this.setState({
        touchStartPos: {x: e.touches[0].clientX, y: e.touches[0].clientY},
        touchEndPos: {x: e.touches[0].clientX, y: e.touches[0].clientY}
      });
    }
  }

  onTouchMove = (e) => {
    if (!this.state.isLoading) {
      this.setState({
        touchEndPos: {x: e.touches[0].clientX, y: e.touches[0].clientY}
      });
    }
  }

  onTouchEnd = (e) => {
    if (!this.state.isLoading) {
      console.log(this.state.touchEndPos.y, this.state.touchStartPos.y);
      if (this.state.touchEndPos.y < this.state.touchStartPos.y) {
        this.setState({introStage: this.state.introStage + 1});
      }
      if (this.state.introStage === 1 && this.state.isIntroLocked) {
        this.setState({isIntroLocked: false});
      }
    }
  }

  onNavItemClick = (location, offset) => {
    this.setState({
      isIntroLocked: false,
      introStage: this.state.introStage + 10
    });
    setTimeout(() => {
      scroller.scrollTo(location, {
        duration: 500,
        smooth: true,
        offset: offset
      });
    }, 0);
  }

  onMouseMove = (e) => {
    var percentY = e.clientY / window.innerHeight;
    var percentX = e.clientX / window.innerWidth;
    this.setState({ 
      mousePos: {x: e.clientX, y: e.clientY},
      mousePercent: {x: percentX, y: percentY}
    });
  }

  onResize = () => {
    if (window.innerWidth < 600) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  }

  onGraphicImagesLoaded = () => {
    this.setState({ isGraphicOutOfView: false });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3600);
  }

  setSelectedStudent = (student) => {
    this.setState({ selectedStudent: student });
  }

  render() {
    var appClasses = classNames(
      'App',
      {'App--isLoading': this.state.isLoading},
      {'App--isIntroLocked': this.state.isIntroLocked},
      {'App--isStudentDetailCircleTransitioned': this.state.isStudentDetailCircleTransitioned},
      {'App--isTransitioningFromDetail': this.state.isTransitioningFromDetail}
    );
    return (
      <div
        className={appClasses}
        onMouseMove={this.onMouseMove}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <Route path="/" render={() => (
          <Nav
            isMobile={this.state.isMobile}
            onNavItemClick={this.onNavItemClick}
          />
        )} />
        <Route path="/" render={() => (
          <Intro
            isGraphicOutOfView={this.state.isGraphicOutOfView}
            onGraphicLoaded={this.onGraphicLoaded}
            onGraphicImagesLoaded={this.onGraphicImagesLoaded}
            mousePercent={this.state.mousePercent}
            introStage={this.state.introStage}
          />
        )} />
        {this.state.selectedStudent !== null &&
          <Route path="/" render={() => (
            <StudentDetail
              onStudentDetailCircleTransitioned={this.onStudentDetailCircleTransitioned}
              mousePos={this.state.mousePos}
              isMobile={this.state.isMobile}
              selectedStudent={this.state.selectedStudent}
              closeStudentDetail={this.closeStudentDetail}
            />
          )} />
        }

        {this.state.isMobile &&
          <Route path="/" render={() => (
            <MobileStudentList
              randomizedStudentData={this.state.randomizedStudentData}
              setSelectedStudent={this.setSelectedStudent}
            />
          )} />
        }
        {!this.state.isMobile &&
          <Route path="/" render={() => (
            <StudentList
              randomizedStudentData={this.state.randomizedStudentData}
              setSelectedStudent={this.setSelectedStudent}
            />
          )} />
        }
        <Route path="/" component={Event} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
