import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' id='navigation'>
        <Navbar.Brand className='brand' href='#home'>
          <i className='fas fa-paint-roller'></i>
          NJB Painting Inc.
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <a href='/services'>Services</a>
          </Navbar.Text>
          <Navbar.Text>
            <a href='#about'>Clients</a>
          </Navbar.Text>
          <Navbar.Text id='last-child'>
            <a href='#about'>Contact</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
