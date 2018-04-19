import React, { Component } from 'react';

import Slider from 'react-slick';
import { Element } from 'react-scroll';

import './MobileStudentListSlider.css';
import './MobileStudentList.css';

class MobileStudentList extends Component {
  render() {
    var sliderSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Element name="Team">
        <div className="MobileStudentList">
          <h3 className="MobileStudentList_top_title">Network with</h3>
          <h2 className="MobileStudentList_bottom_title">Innovators</h2>
          <Slider {...sliderSettings} className="MobileStudentList_slider">
            {this.props.randomizedStudentData.map(function(student, index) {
              if (index % 4 === 0) {
                return (
                  <div key={student.url} className="MobileStudentList_slider_wrapper">
                    <div className="MobileStudentList_slider_first_shapes">
                      <img 
                        className="MobileStudentList_slider_first_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_first_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_first_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_first_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                    </div>
                    <div 
                    className="MobileStudentList_slider_first_content"
                    onClick={() => {
                      this.props.setSelectedStudent(student);
                    }}
                    >
                      <div className="MobileStudentList_slider_mugshot_cropper">
                        <img
                          alt={student.name}
                          src="Assets/monika.png"
                          className="MobileStudentList_slider_mugshot"
                        ></img>
                      </div>
                      <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                      <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 4 === 1) {
                return (
                  <div key={student.url} className="MobileStudentList_slider_wrapper">
                    <div className="MobileStudentList_slider_second_shapes">
                      <img
                        className="MobileStudentList_slider_second_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_second_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_second_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_second_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div 
                      className="MobileStudentList_slider_second_content"
                      onClick={() => {
                        this.props.setSelectedStudent(student);
                      }}
                    >
                      <div className="MobileStudentList_slider_mugshot_cropper">
                        <img
                          alt={student.name}
                          src="Assets/monika.png"
                          className="MobileStudentList_slider_mugshot"
                        ></img>
                      </div>
                      <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                      <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 4 === 2) {
                return (
                  <div key={student.url} className="MobileStudentList_slider_wrapper">
                    <div className="MobileStudentList_slider_third_shapes">
                      <img
                        className="MobileStudentList_slider_third_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_third_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_third_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_third_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div
                      className="MobileStudentList_slider_third_content"
                      onClick={() => {
                        this.props.setSelectedStudent(student);
                      }}
                    >
                      <div
                        className="MobileStudentList_slider_mugshot_cropper"
                        onClick={() => {
                          this.props.setSelectedStudent(student);
                        }}
                      >
                        <img
                          alt={student.name}
                          src="Assets/monika.png"
                          className="MobileStudentList_slider_mugshot"
                        ></img>
                      </div>
                      <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                      <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else if (index % 4 === 3) {
                return (
                  <div key={student.url} className="MobileStudentList_slider_wrapper">
                    <div className="MobileStudentList_slider_fourth_shapes">
                      <img
                        className="MobileStudentList_slider_fourth_circle1"
                        src="Assets/circle2.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_fourth_circle2"
                        src="Assets/circle.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_fourth_triangle1"
                        src="Assets/triangle7.svg"
                        alt=""
                      ></img>
                      <img
                        className="MobileStudentList_slider_fourth_triangle2"
                        src="Assets/triangle1.svg"
                        alt=""
                      ></img>
                    </div>
                    <div
                      className="MobileStudentList_slider_fourth_content"
                      onClick={() => {
                        this.props.setSelectedStudent(student);
                      }}
                    >
                      <div className="MobileStudentList_slider_mugshot_cropper">
                        <img
                          alt={student.name}
                          src="Assets/monika.png"
                          className="MobileStudentList_slider_mugshot"
                        ></img>
                      </div>
                      <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                      <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            }, this)}
          </Slider>
        </div>
      </Element>
    );
  }
}

export default MobileStudentList;