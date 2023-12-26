import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Caisse = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          {/* First Input Field */}
          <Form.Group controlId="inputField1">
            <Form.Label>Input Field 1</Form.Label>
            <Form.Control type="text" placeholder="Enter value for Field 1" />
          </Form.Group>

          {/* Second Input Field */}
          <Form.Group controlId="inputField2">
            <Form.Label>Input Field 2</Form.Label>
            <Form.Control type="text" placeholder="Enter value for Field 2" />
          </Form.Group>

          {/* Third Input Field (Divided) */}
          <Form.Row>
            {/* Montant de Cheque */}
            <Form.Group as="Col" controlId="montantCheque">
              <Form.Label>Montant de Cheque</Form.Label>
              <Form.Control type="text" placeholder="Enter montant" />
            </Form.Group>

            {/* N° de Cheque */}
            <Form.Group as="Col" controlId="numeroCheque">
              <Form.Label>N° de Cheque</Form.Label>
              <Form.Control type="text" placeholder="Enter numéro" />
            </Form.Group>
          </Form.Row>

          {/* Button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Caisse;
