import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./jumbotron.css";

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Row>
          <Col>
            <p className='jumbo-subtext'>
              Family Owned and Operated, <br />
              <mark>NJB Painting Inc.</mark>
              <br />
              has been your professional painting experts for over 20+ years!
              <a className='btn' href='tel:2674107284'>
                Call Today!
              </a>
            </p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Jumbo;
