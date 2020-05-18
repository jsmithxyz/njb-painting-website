import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./jumbotron.css";
import NavBar from "../Navigation/navbar";

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <NavBar />
        <Row>
          <Col>
            <div className='jumbo'>
              <p className='jumbo-subtext'>
                Family Owned and Operated, <br />
                NJB Painting Inc.
                <br />
                has been your professional painting experts for over 20+ years!
                <a className='btn' href='#'>
                  Call Today!
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default Jumbo;
