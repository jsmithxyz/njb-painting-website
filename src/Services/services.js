import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./services.css";

class Services extends Component {
  render() {
    return (
      <div className='row-services'>
        <p className='services-header'>Our Services</p>
        <hr className='services-break'></hr>
        <Row>
          <Col className='service-box'>
            <img src='paintbucket.svg' alt='Painting Services' />
            <h3 className='desc-header'>Painting Services</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
          <Col className='service-box'>
            <img
              src='https://img.icons8.com/dusk/64/000000/home.png'
              alt='Clientele'
              height='75'
              width='75'
            />
            <h3 className='desc-header'>Clients</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='service-box'>
            <img
              src='https://img.icons8.com/dusk/64/000000/order-delivered.png'
              alt='Locations Serviced'
              height='75'
              width='75'
            />
            <h3 className='desc-header'>Locations Served</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
          <Col className='service-box'>
            <img
              src='https://img.icons8.com/dusk/64/000000/money.png'
              alt='Affordable Prices'
              height='75'
              width='75'
            />
            <h3 className='desc-header'>Affordable Prices</h3>
            <p className='description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              possimus fuga necessitatibus obcaecati. Odit eum consequatur dolor
              possimus enim aperiam voluptatem, ipsum sequi repellendus quae
              reprehenderit vel perspiciatis impedit quas.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;
