import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-3"
            alt="React Bootstrap logo"
          />
          <Navbar.Text className="fs-5 fw-semibold">
            Whale Sightings Data
          </Navbar.Text>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
