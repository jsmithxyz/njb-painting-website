import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "../src/Navigation/navbar";
import Jumbo from "../src/Jumbotron/jumbotron";
import Builders from "../src/Builders/builders";
import Services from "../src/Services/services";
import Contact from "../src/Contact/contact";

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Jumbo />
      <Services />
      <Builders />
      <Contact />
    </Container>
  );
}

export default App;
