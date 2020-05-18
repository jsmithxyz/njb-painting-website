import React, { Component } from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Navbar color='dark' dark>
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
