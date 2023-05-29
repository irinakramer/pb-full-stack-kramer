import React from 'react';
import { Container, Spinner as Loader } from 'react-bootstrap';

const Spinner = () => {
  return (
    <Container className="vw-100 vh-100 d-flex align-items-center justify-content-center">
      <Loader animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Loader>
    </Container>
  );
};

export default Spinner;
