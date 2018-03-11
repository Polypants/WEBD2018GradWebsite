import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import firebase from 'firebase';

import Intro from '../Intro/Intro';
import Team from '../Team/Team';
import Event from '../Event/Event';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      dataRetrieved: false,
      studentData: []
    };
  }

  getWindowWidth = () => {
    // get width of screen for responsive rendering of modules
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    this.getWindowWidth();
    window.addEventListener('resize', this.getWindowWidth);
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
      this.setState({ dataRetrieved: true, studentData: dataArray });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowWidth);
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Intro} />
        <Route path='/' render={() => (
          <Team studentData={this.state.studentData} dataRetrieved={this.state.dataRetrieved} />
        )} />
        <Route path='/' component={Event} />
      </div>
    );
  }
}

export default App;