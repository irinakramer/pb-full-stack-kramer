import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

const Controls = () => {
  return (
    <Container className="my-3">
      <Form>
        <Row>
          <Col sm className="mb-2">
            <Form.Group controlId="formGridYear">
              <Form.Label>Year</Form.Label>
              <Form.Select defaultValue="Select...">
                <option>Select...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm className="mb-2">
            <Form.Group controlId="formGridSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Select defaultValue="Select...">
                <option>Select...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-end mb-2">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Controls;
