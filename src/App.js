import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Food from "./Components/Food";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <div id="navbar">RECEPIES</div>

      <Food />
    </div>
  );
}

export default App;
