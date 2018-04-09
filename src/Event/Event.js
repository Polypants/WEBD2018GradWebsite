import React, { Component } from 'react';
import EventButton from '../EventButton/EventButton';
import './Event.css';

class Event extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <div className="Event">
        <div className="Event_Wrapper">
          <div className="Event_Item Event_Item_1 Event_exampleElement">
            <div className="text_container_1">
              <h1 className="Event_exampleElement_title">Event<br/>Details</h1>
            </div>
          </div>
          <div className="Event_Item Event_Item_2 Event_exampleElementLocation">
            <div className="text_container_2">
              <h3 className="Event_exampleElement_title">WHERE</h3>
              <p>The Burroughes Building<br/>639 Queen St.W, Toronto, ON<br/>M5V 2B7</p>
            </div>
          </div>
          <div className="Event_Item Event_Item_3 Event_exampleElementTime">
            <div className="text_container_3">
              <h3 className="Event_exampleElement_title">WHEN</h3>
              <p>April 25th 2018<br/>5pm - 8pm</p>
            </div>
          </div>
        </div>
      <div className="Event_exampleReservation" id="GoogleMap">
        <div className="text_container_4">
          <h2 className="Event_exampleElement_title">WE CAN'T WAIT TO MEET YOU!</h2>
          <EventButton className="Event_ReservatoinButton"/>
        </div>
      </div>
      </div>
    );
  }
}

export default Event;