import React from "react";
import Navigationbar from "./components/layout/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Caisse from "./components/layout/Caisse";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Container>
      <div>
        <Navigationbar />
      </div>
      <div>
        <Caisse />
      </div>
    </Container>
  );
};

export default App;
