import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
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
              src='TollBrothers.png'
              alt='Toll Brothers'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src='MeyerHome.png'
              alt='Meyer Home'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src='KHovnanian.jpeg'
              alt='K Hovnanian'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img src='Lennar.png' alt='Lennar' height='275' width='275' />
          </Col>
          <Col>
            <img src='SalLapio.png' alt='Sal Lapio' height='275' width='275' />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src='Traditions.png'
              alt='Traditions of America'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src='CountyBuilders.png'
              alt='County Builders Inc.'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src='JPOrleans.png'
              alt='JP Orleans'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img
              src='PulteHomes.png'
              alt='Pulte Homes'
              height='275'
              width='275'
            />
          </Col>
          <Col>
            <img src='WBHomes.png' alt='W.B Homes' height='275' width='275' />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Builders;
