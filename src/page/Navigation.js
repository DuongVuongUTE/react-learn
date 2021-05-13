import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Navigation() {
  const style = {
    color: 'white',
    margin: '0 0 0 10px',
    textDecoration : 'none',
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt="logo"
            src="https://react-bootstrap.netlify.app/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Link style={style} to="/">
            Home
          </Link>
          <Link style={style} to="/shop">
            Shop
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}
