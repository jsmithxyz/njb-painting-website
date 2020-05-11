import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand className='brand' href='#home'>
          NJB Painting
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <a href='#about'>About</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href='#about'>Services</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href='#about'>Builders</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href='#about'>Contact</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
