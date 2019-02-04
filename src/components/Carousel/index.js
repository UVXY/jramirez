import React, { Component } from 'react';
import "./style.css";
import {
    Carousel,
} from 'react-bootstrap';

export default class index extends Component {
  render() {
    return (
        <Carousel          
        // id='carousel'
        // className='carousal slide'
                >
        <Carousel.Item>
          <img
            src={require('../assets/images/guy.jpg')}
            className="d-block w-100 h-50"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to JR Dynamics</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={require('../assets/images/react.png')}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={require('../assets/images/scenic.JPG')}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
