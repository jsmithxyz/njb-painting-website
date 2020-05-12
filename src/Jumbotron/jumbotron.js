import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./jumbotron.css";

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <div className='jumbo'>
          <p className='jumbo-subtext'>
            Family Owned and Operated,{" "}
            <em>
              <strong>NJB Painting Inc.</strong>
            </em>{" "}
            has been your professional painting experts for over 20+ years! We
            offer interior and exterior painting services for both residential
            and commercial clients, at fair and affordable prices, delivering
            the highest standards.
          </p>
          <Button className='call-button'>Call Today!</Button>
        </div>
      </Jumbotron>
    );
  }
}

export default Jumbo;

// <p className='jumbo-subtext'>
//             Family Owned and Operated,{" "}
//             <em>
//               <strong>NJB Painting Inc.</strong>
//             </em>{" "}
//             has been your professional painting experts for over 20+ years! We
//             offer interior and exterior painting services for both residential
//             and commercial clients, at fair and affordable prices, delivering
//             the highest standards.
//           </p>
{
}
