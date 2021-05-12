import React from 'react';
import React, { useState } from 'react';
import {
  Button,
  Card,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function Navigation() {
  const style = {
    color: 'white'
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src="https://react-bootstrap.netlify.app/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link style={style} to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link style={style} to="/shop">
              Shop
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
