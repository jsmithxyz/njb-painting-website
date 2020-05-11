import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./jumbotron.css";

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container className='jumbo'>
          <h1>NJB Painting</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            doloremque eveniet labore totam nesciunt quo accusantium commodi
            temporibus? Vitae ab ullam asperiores ratione? Cupiditate
            necessitatibus ut culpa eos officia quia?
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Jumbo;
