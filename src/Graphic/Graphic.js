import React, { Component } from 'react';
import './Graphic.css';
import classNames from 'classnames';

class Graphic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOutOfView: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOutOfView: false });
    }, 0);
  }

  render() {
    // style={{ transform: `rotateX(${this.state.rot.x}deg) rotateY(${this.state.rot.y}deg)` }}
    var containerClasses = classNames( 'Graphic', { 'Graphic--isOutOfView': this.state.isOutOfView } );
    return (
      <div className={ containerClasses }>
        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 150 }px, ${ (this.props.mousePercent.y - 0.5) * 56 }px)`
          } : {}}
        >
          <img src="./Assets/triangle6.svg" alt="" className="Graphic_triangle5 Graphic_shape" />
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 70 }px, ${ (this.props.mousePercent.y - 0.5) * 26.25 }px)`
          } : {}}
        >
          <img src="./Assets/circle2.svg" alt="" className="Graphic_circle3 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 80 }px, ${ (this.props.mousePercent.y - 0.5) * 30 }px)`
          } : {}}
        >
          <img src="./Assets/circle2.svg" alt="" className="Graphic_circle1 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 140 }px, ${ (this.props.mousePercent.y - 0.5) * 52 }px)`
          } : {}}
        >
          <img src="./Assets/circle2.svg" alt="" className="Graphic_circle2 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 100 }px, ${ (this.props.mousePercent.y - 0.5) * 37 }px)`
          } : {}}
        >
          <img src="./Assets/triangle4.svg" alt="" className="Graphic_triangle3 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 55 }px, ${ (this.props.mousePercent.y - 0.5) * 20 }px)`
          } : {}}
        >
          <img src="./Assets/triangle7.svg" alt="" className="Graphic_triangle1 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 100 }px, ${ (this.props.mousePercent.y - 0.5) * 37 }px)`,
            mixBlendMode: `overlay`
          } : { mixBlendMode: `overlay` }}
        >
          <img src="./Assets/triangle5.svg" alt="" className="Graphic_triangle6 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 110 }px, ${ (this.props.mousePercent.y - 0.5) * 40 }px)`
          } : {}}
        >
          <img src="./Assets/triangle3.svg" alt="" className="Graphic_triangle7 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 35 }px, ${ (this.props.mousePercent.y - 0.5) * 13 }px)`,
            mixBlendMode: `overlay`
          } : { mixBlendMode: `overlay` }}
        >
          <img src="./Assets/triangle1.svg" alt="" className="Graphic_triangle2 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 70 }px, ${ (this.props.mousePercent.y - 0.5) * 26 }px)`
          } : {}}
        >
          <img src="./Assets/triangle2.svg" alt="" className="Graphic_triangle4 Graphic_shape"/>
        </div>

        <div
          className="Graphic_shapeContainer" 
          style={ window.innerWidth >= 800 ? { 
            transform: `translate(${ (this.props.mousePercent.x - 0.5) * 40 }px, ${ (this.props.mousePercent.y - 0.5) * 15 }px)`,
            mixBlendMode: `overlay`
          } : { mixBlendMode: `overlay` }}
        >
          <img src="./Assets/circle.svg" alt="" className="Graphic_circle4 Graphic_shape"/>
        </div>
      </div>
    );
  }
}

export default Graphic;
