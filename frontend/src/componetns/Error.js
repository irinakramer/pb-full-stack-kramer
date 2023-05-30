import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = () => {
  return (
    <Alert variant="danger" className="text-center">
      Oops, we're experiencing a data error. Please contact your administrator.
    </Alert>
  );
};

export default Error;
