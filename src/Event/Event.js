import React, { Component } from 'react';
import { Element } from 'react-scroll';

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import greyStyleMap from './GreyStyleMap.json';

import './Event.css';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDqWPXhLzG-Br3bXIN5T5gTZyiRqdRFvvI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `32vh`, width:`100%` }} />,
    containerElement: <div className='googleMapWrapper' />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 43.647100, lng: -79.403348 }}
    defaultOptions={{ styles: greyStyleMap }}
    mapTypeControl={false}
  >
    {props.isMarkerShown && <Marker position={{ lat: 43.647100, lng: -79.403348 }} />}
  </GoogleMap>
);

class Event extends Component {
  render() {
    return (
      <Element name="Event">
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
            <div className="Event_item Event_item_3">
              <div className="text_container_3">
                <h3 className="Event_title">WHEN</h3>
                <p>April 25th 2018<br/>5pm - 8pm</p>
              </div>
            </div>
          </div>
          <div className="Event_reservation" id="GoogleMap">
            <MyMapComponent
              isMarkerShown
              mapTypeControl={false}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `32vh`, width:`100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div className="text_container_4">
              <h2 className="Event_mapTitle">WE CAN'T WAIT TO MEET YOU!</h2>
              <a
                href="https://www.eventbrite.ca/e/elevate-portfolio-show-and-networking-event-tickets-44610745942"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="Event_rsvpButton">RSVP Now</div>
              </a>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Event;