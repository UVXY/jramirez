import React, { Component } from 'react';
import {
  Card,
} from 'react-bootstrap';

export default class index extends Component {
  render() {
  return (
    <Card className="bg-dark text-white">
    <Card.Img src={require('../assets/images/rock.jpg')} alt="Card image" />
    <Card.ImgOverlay >
      <Card bg="primary" text="white">Card title
      <Card.Text >
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      </Card>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>
  );
}
}
