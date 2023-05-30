import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../images/pb_logo.svg';

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top me-3"
            alt="Point Blue logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
