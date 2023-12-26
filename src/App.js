import React from "react";
import Navigationbar from "./components/layout/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Caisse from "./components/layout/Caisse";

const App = () => {
  return (
  
      <div>
        <Navigationbar />
        <Caisse/>
      </div>
      

  );
};

export default App;
