import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="mt-3">
      <p>Welcome to the Point Blue Conservation Science.</p>
      <p>
        Here you can access whale sighting data collected from the Farallon
        Islands lighthouse. <br />
        Please make your selections below to visualize the data in the graph
        format.
      </p>
    </Container>
  );
};

export default Welcome;
