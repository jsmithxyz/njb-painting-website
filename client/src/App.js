import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Jumbo from "./Jumbotron/jumbotron";
import Builders from "./Builders/builders";
import Services from "./Services/services";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import NavBar from "./Navigation/navbar";

function App() {
  return (
    <Container fluid>
      <NavBar />
      <Jumbo />
      <Services />
      <Builders />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
