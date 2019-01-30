import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";

import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";


class About extends Component {
  
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            
              <h1 className="text-center">
                <strong>Juan E. Ramirez</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            
          </Col>
          <Col size="md-12">
            {/* <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card> */}
          </Col>
        </Row>
        
        <Footer />
      </Container>
    );
  }
}

export default About;
