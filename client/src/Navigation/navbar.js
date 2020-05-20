import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-scroll";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' id='navigation'>
        <Navbar.Brand className='brand'>
          <i className='fas fa-paint-roller'></i>
          NJB Painting Inc.
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <a className='nav-link' href='/about'>
              About
            </a>
          </Navbar.Text>
          <Navbar.Text>
            <Link className='nav-link' to='services' smooth duration='800'>
              Services
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link className='nav-link' to='clients' smooth duration='800'>
              Clients
            </Link>
          </Navbar.Text>
          <Navbar.Text id='last-child'>
            <Link className='nav-link' to='contact' smooth duration='800'>
              Contact
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
