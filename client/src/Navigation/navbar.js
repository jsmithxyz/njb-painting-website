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
            <Link className='nav-link' to='services' duration='1000' smooth>
              Services
            </Link>
          </Navbar.Text>
          <Navbar.Text>
            <Link className='nav-link' to='clients' duration='1000' smooth>
              Clients
            </Link>
          </Navbar.Text>
          <Navbar.Text id='last-child'>
            <Link className='nav-link' to='contact' smooth duration='1000'>
              Contact
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
