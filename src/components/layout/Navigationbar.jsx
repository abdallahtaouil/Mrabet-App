import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <Navbar className="bg-dark" style={{ color: "#FFF7D6" }} >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#FFF7D6" }} >Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: "#FFF7D6" }}>
            Signed in as: <a href="#login" style={{ color: "#FFF7D6" }} >Tebourbi Chokri</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
