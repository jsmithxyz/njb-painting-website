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
              src={require("../Builders/BuilderImages/Traditions.png")}
              alt='W.B Homes'
              height='275'
              width='275'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              src={require("../Builders/BuilderImages/TollBrothers.png")}
              alt='Toll Brothers'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("../Builders/BuilderImages/MeyerHome.png")}
              alt='Meyer Home'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("../Builders/BuilderImages/SalLapio.png")}
              alt='K Hovnanian'
              height='275'
              width='275'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={require("../Builders/BuilderImages/Pulte.png")}
              alt='Lennar'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("../Builders/BuilderImages/JPOrleans.png")}
              alt='Sal Lapio'
              height='275'
              width='275'
            />
          </Col>

          <Col>
            <img
              src={require("../Builders/BuilderImages/Lennar.png")}
              alt='Traditions of America'
              height='275'
              width='275'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={require("../Builders/BuilderImages/KHovnanian.png")}
              alt='County Builders Inc.'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("../Builders/BuilderImages/WBHomes.png")}
              alt='JP Orleans'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src={require("../Builders/BuilderImages/CountyBuilders.png")}
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
