import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const Notification = ({ showToast, setShowToast, year, commonName }) => {
  return (
    <ToastContainer position="top-center">
      <Toast
        bg="light"
        show={showToast}
        onClose={() => setShowToast(!showToast)}
        delay={5000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Note</strong>
        </Toast.Header>
        <Toast.Body>
          There were no sightings of {commonName} in {year}. Plase make another
          selection.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Notification;
