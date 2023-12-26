import React, { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

const Caisse = () => {
  const [montantCheque, setMontantCheque] = useState("");
  const [numeroCheque, setNumeroCheque] = useState("");
  const [chequeStatements, setChequeStatements] = useState([]);
  const [montantTpe, setMontantTpe] = useState("");
  const [numeroTpe, setNumeroTpe] = useState("");
  const [tpeStatements, setTpeStatements] = useState([]);

  const handleAddChequeStatement = () => {
    const newChequeStatement = {
      montantCheque,
      numeroCheque,
    };

    setChequeStatements([...chequeStatements, newChequeStatement]);
    setMontantCheque("");
    setNumeroCheque("");
  };

  const handleAddTpeStatement = () => {
    const newTpeStatement = {
      montantTpe,
      numeroTpe,
    };

    setTpeStatements([...tpeStatements, newTpeStatement]);
    setMontantTpe("");
    setNumeroTpe("");
  };

  return (
    <Row className="mt-3 ml-5">
      <Col md={3}>
        <Card
          style={{
            backgroundColor: "rgba(0, 126, 127, 0.75)",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            <h3 style={{ color: "#FFF7D6" }}>Caisse 1</h3>
          </div>
          <Card.Body>
            <Form>
              {/* Recette Field */}
              <Row className="mb-1">
                <Form.Label
                  column
                  md={12}
                  sm={12}
                  className="mb-0.5 d-flex align-items-center"
                  style={{ color: "#FFF7D6" }}
                >
                  Recette
                  <Form.Control
                    type="number"
                    placeholder="Enter Recette"
                    className="custom-input"
                    style={{ marginLeft: "15px" }}
                  />
                </Form.Label>
              </Row>

              {/* Espece Field */}
              <Row className="mb-1">
                <Form.Label
                  column
                  md={12}
                  sm={12}
                  className="mb-2 d-flex align-items-center"
                  style={{ color: "#FFF7D6" }}
                >
                  Espece
                  <Form.Control
                    type="number"
                    placeholder="Enter Espece"
                    className="custom-input"
                    style={{ marginLeft: "15px" }}
                  />
                </Form.Label>
              </Row>

              {/* Cheque Fields */}
              <Row className="mb-1">
                <h5 className="mb-0.5" style={{ color: "#FFF7D6" }}>
                  Cheques
                </h5>
              </Row>
              <Row className="mb-1">
                <Form.Label
                  column
                  md={6}
                  sm={6}
                  className="mb-0.5 mt-0.5 d-flex align-items-center"
                  style={{ color: "#FFF7D6" }}
                >
                  Montant
                  <Form.Control
                    type="number"
                    placeholder="Montant"
                    style={{ marginLeft: "15px" }}
                    value={montantCheque}
                    onChange={(e) => setMontantCheque(e.target.value)}
                  />
                </Form.Label>
                <Form.Label
                  column
                  md={4}
                  sm={4}
                  className="mb-0.5 mt-0.5 d-flex align-items-center"
                  style={{ color: "#FFF7D6" }}
                >
                  N°
                  <Form.Control
                    type="number"
                    style={{ marginLeft: "15px" }}
                    placeholder="N°"
                    value={numeroCheque}
                    onChange={(e) => setNumeroCheque(e.target.value)}
                  />
                </Form.Label>
                {/* Add Button on the same line */}
                <Col md={2} sm={2} className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    onClick={handleAddChequeStatement}
                    style={{ width: "80px" }}
                  >
                    Add
                  </Button>
                </Col>
              </Row>

              {/* Display Cheque Statements */}
              {chequeStatements.length > 0 && (
                <div>
                  <ul style={{ color: "#FFF7D6" }}>
                    {chequeStatements.map((statement, index) => (
                      <li key={index}>
                        Montant: {statement.montantCheque}, Numero:{" "}
                        {statement.numeroCheque}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* TPE Fields */}
              <Row className="mb-1">
                <h5 className="mb-0.5" style={{ color: "#FFF7D6" }}>
                  TPE
                </h5>
              </Row>
              <Row className="mb-1">
                <Form.Label
                  column
                  md={6}
                  sm={6}
                  className="mb-0.5 mt-0.5 d-flex align-items-center"
                  style={{ color: "#FFF7D6" }}
                >
                  Montant
                  <Form.Control
                    type="number"
                    placeholder=" Montant"
                    style={{ marginLeft: "15px" }}
                    value={montantTpe}
                    onChange={(e) => setMontantTpe(e.target.value)}
                  />
                </Form.Label>
                <Form.Label
                  column
                  md={4}
                  sm={4}
                  className="mb-0.5 mt-0.5 d-flex align-items-center"
                  style={{ color: "#FFF7D6" }}
                >
                  N°
                  <Form.Control
                    type="number"
                    style={{ marginLeft: "15px" }}
                    placeholder=" N°"
                    value={numeroTpe}
                    onChange={(e) => setNumeroTpe(e.target.value)}
                  />
                </Form.Label>
                {/* Add Button on the same line */}
                <Col md={2} sm={2} className="d-flex align-items-center">
                  <Button
                    variant="primary"
                    onClick={handleAddTpeStatement}
                    style={{ width: "80px" }}
                  >
                    Add
                  </Button>
                </Col>
              </Row>

              {/* Display TPE Statements */}
              {tpeStatements.length > 0 && (
                <div>
                  <ul style={{ color: "#FFF7D6" }}>
                    {tpeStatements.map((statement, index) => (
                      <li key={index}>
                        Montant: {statement.montantTpe}, Numero:{" "}
                        {statement.numeroTpe}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Caisse;
