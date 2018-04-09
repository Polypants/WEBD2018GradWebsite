import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <div className="Event_wrapper">
          <div className="Event_item Event_item_1">
            <div className="text_container_1">
              <h1 className="Event_title">Event<br/><span>Details</span></h1>
            </div>
          </div>
          <div className="Event_item Event_item_2">
            <div className="text_container_2">
              <h3 className="Event_title">WHERE</h3>
              <p>The Burroughes Building<br/>639 Queen St.W, Toronto, ON<br/>M5V 2B7</p>
            </div>
          </div>
          <div className="Event_Item Event_Item_3">
            <div className="text_container_3">
              <h3 className="Event_title">WHEN</h3>
              <p>April 25th 2018<br/>5pm - 8pm</p>
            </div>
          </div>
        </div>
      <div className="Event_reservation" id="GoogleMap">
        <div className="text_container_4">
          <h2 className="Event_mapTitle">WE CAN'T WAIT TO MEET YOU!</h2>
          <div className="Event_rsvpButton">RSVP Now</div>
        </div>
      </div>
      </div>
    );
  }
}

export default Event;