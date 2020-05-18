import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Jumbo from "../src/Jumbotron/jumbotron";
import Builders from "../src/Builders/builders";
import Services from "../src/Services/services";
import Contact from "../src/Contact/contact";
import Footer from "../src/Footer/footer";

function App() {
  return (
    <Container fluid>
      <Jumbo />
      <Services />
      <Builders />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
