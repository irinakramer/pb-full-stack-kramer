import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import ApplicationHelper from '../helpers/ApplicationHelper';

const Controls = ({ data }) => {
  const { getYears, getSpecies } = ApplicationHelper;

  const years = getYears(data);
  const species = getSpecies(data);

  return (
    <Container className="my-3">
      <Form>
        <Row>
          <Col sm className="mb-2">
            <Form.Group controlId="formGridYear">
              <Form.Label>Year</Form.Label>
              <Form.Select defaultValue="Select...">
                <option>Select...</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm className="mb-2">
            <Form.Group controlId="formGridSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Select defaultValue="Select...">
                <option>Select...</option>
                {species.map((group) => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
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
