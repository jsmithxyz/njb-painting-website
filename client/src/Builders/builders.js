import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./builders.css";

class Builders extends Component {
  render() {
    return (
      <div className='builders'>
        <p className='builder-header'>Our Clients</p>
        <hr className='builder-break'></hr>
        <Row>
          <Col>
            <img
              src={require("./BuilderImages/Traditions.png")}
              alt='W.B Homes'
              height='275'
              width='275'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              src={require("./BuilderImages/TollBrothers.png")}
              alt='Toll Brothers'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("./BuilderImages/MeyerHome.png")}
              alt='Meyer Home'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("./BuilderImages/SalLapio.png")}
              alt='K Hovnanian'
              height='275'
              width='275'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={require("./BuilderImages/Pulte.png")}
              alt='Lennar'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("./BuilderImages/JPOrleans.png")}
              alt='Sal Lapio'
              height='275'
              width='275'
            />
          </Col>

          <Col>
            <img
              src={require("./BuilderImages/Lennar.png")}
              alt='Traditions of America'
              height='275'
              width='275'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={require("./BuilderImages/KHovnanian.png")}
              alt='County Builders Inc.'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("./BuilderImages/WBHomes.png")}
              alt='JP Orleans'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("./BuilderImages/CountyBuilders.png")}
              alt='Pulte Homes'
              height='275'
              width='275'
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Builders;