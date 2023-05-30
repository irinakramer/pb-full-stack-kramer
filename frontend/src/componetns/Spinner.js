import React from 'react';
import { Container, Spinner as Loader } from 'react-bootstrap';

const spinnerStyle = {
  display: 'flex',
  height: '80vh',
  alignItems: 'center',
  justifyContent: 'center',
};

const Spinner = () => {
  return (
    <Container style={spinnerStyle}>
      <Loader animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Loader>
    </Container>
  );
};

export default Spinner;
