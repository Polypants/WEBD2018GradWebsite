import React, { Component } from 'react';

import classNames from 'classnames';

import './Graphic.css';

class Graphic extends Component {
  componentDidMount() {
    var imagesArray = [
      this.refs.image1,
      this.refs.image2,
      this.refs.image3,
      this.refs.image4,
      this.refs.image5,
      this.refs.image6,
      this.refs.image7,
      this.refs.image8,
      this.refs.image9,
      this.refs.image10,
      this.refs.image11
    ];
    var counter = 0;
    var incrementCounter = () => {
      counter++;
      if (counter === imagesArray.length) {
        this.props.onGraphicImagesLoaded();
      }
    }
    imagesArray.forEach((img) => {
      img.addEventListener('load', incrementCounter, false);
    });
  }

  render() {
    var containerClasses = classNames('Graphic', { 'Graphic--isOutOfView': this.props.isGraphicOutOfView });
    return (
      <div className={containerClasses}>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 75}px, ${(this.props.mousePercent.y - 0.5) * 56}px)`,
          } : {}}
        >
          <img ref="image1" src="./Assets/triangle6.svg" alt="" className="Graphic_triangle5 Graphic_shape" />
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 35}px, ${(this.props.mousePercent.y - 0.5) * 26}px)`
          } : {}}
        >
          <img ref="image2" src="./Assets/circle2.svg" alt="" className="Graphic_circle3 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 40}px, ${(this.props.mousePercent.y - 0.5) * 30}px)`
          } : {}}
        >
          <img ref="image3" src="./Assets/circle2.svg" alt="" className="Graphic_circle1 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 70}px, ${(this.props.mousePercent.y - 0.5) * 52}px)`
          } : {}}
        >
          <img ref="image4" src="./Assets/circle2.svg" alt="" className="Graphic_circle2 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 50}px, ${(this.props.mousePercent.y - 0.5) * 37}px)`
          } : {}}
        >
          <img ref="image5" src="./Assets/triangle4.svg" alt="" className="Graphic_triangle3 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 27}px, ${(this.props.mousePercent.y - 0.5) * 20}px)`
          } : {}}
        >
          <img ref="image6" src="./Assets/triangle7.svg" alt="" className="Graphic_triangle1 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 50}px, ${(this.props.mousePercent.y - 0.5) * 37}px)`,
            mixBlendMode: `overlay`
          } : { mixBlendMode: 'overlay' }}
        >
          <img ref="image7" src="./Assets/triangle5.svg" alt="" className="Graphic_triangle6 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 55}px, ${(this.props.mousePercent.y - 0.5) * 40}px)`
          } : {}}
        >
          <img ref="image8" src="./Assets/triangle3.svg" alt="" className="Graphic_triangle7 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 17}px, ${(this.props.mousePercent.y - 0.5) * 13}px)`,
            mixBlendMode: 'overlay'
          } : { mixBlendMode: 'overlay' }}
        >
          <img ref="image9" src="./Assets/triangle1.svg" alt="" className="Graphic_triangle2 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 35}px, ${(this.props.mousePercent.y - 0.5) * 26}px)`
          } : {}}
        >
          <img ref="image10" src="./Assets/triangle2.svg" alt="" className="Graphic_triangle4 Graphic_shape"/>
        </div>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${(this.props.mousePercent.x - 0.5) * 20}px, ${(this.props.mousePercent.y - 0.5) * 15}px)`,
            mixBlendMode: 'overlay'
          } : {mixBlendMode: 'overlay'}}
        >
          <img ref="image11" src="./Assets/circle.svg" alt="" className="Graphic_circle4 Graphic_shape"/>
        </div>
      </div>
    );
  }
}

export default Graphic;
