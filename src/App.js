import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "../src/Navigation/navbar";
import Jumbo from "../src/Jumbotron/jumbotron";
function App() {
  return (
    <Container fluid>
      <NavBar />
      <Jumbo />
    </Container>
  );
}

export default App;
