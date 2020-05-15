import React, { Component } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import "./jumbotron.css";
import NavBar from "../Navigation/navbar";

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <Row>
          <Col>
            <NavBar />
            <div className='jumbo'>
              <p className='jumbo-subtext'>
                Family Owned and Operated, <br />
                <strong>NJB Painting Inc.</strong>
                <br />
                has been your professional painting experts for over 20+ years!
                <a class='btn' href='#'>
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
