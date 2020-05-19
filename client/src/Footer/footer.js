import React, { Component } from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Navbar>
          <Container>
            <NavbarBrand id='footer-text'>
              <span>&copy;</span>2020 NJB Painting Inc. All Rights Reserved
            </NavbarBrand>
            <NavbarBrand id='footer-text'>
              Website designed by{" "}
              <a href='https://www.jsmithxyz.com/' target='_blank'>
                jsmithxyz
              </a>
              . Icons by{" "}
              <a href='https://icons8.com/' target='_blank'>
                icons8
              </a>
              .
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
