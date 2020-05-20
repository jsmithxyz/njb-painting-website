import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://dry-chamber-20638.herokuapp.com/send",
      data: this.state,
    }).then((response) => {
      if (response.data.message === "success") {
        console.log("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className='contact' id='contact'>
        <Row>
          <Col className='contact-column'>
            <h1 className='contact-header'>Send Us a Message!</h1>
            <hr className='contact-break'></hr>
            <form
              id='contact-form'
              onSubmit={this.handleSubmit.bind(this)}
              method='POST'
            >
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  aria-describedby='emailHelp'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  className='form-control'
                  rows='5'
                  placeholder='Enter a Message for Us!'
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>
              <button type='submit' className='btn-submit'>
                Submit
              </button>
            </form>
          </Col>
          <Col>
            <h1 className='contact-header' id='contact-header-right'>
              Contact Us!
            </h1>
            <h3 className='contact-address'>
              NJB Painting INC
              <br />
              PO Box 112
              <br />
              Sellersville, PA 18969
            </h3>
            <h3 className='contact-info'>
              Nathan Bailey - <em>President</em>
              <br />
              Billie Machain - <em>Sales/Operations Manager</em>
              <br />
              Matt Bailey - <em>Service Manager</em>
            </h3>
            <h3 className='contact-email'>
              <a href='mailto:njbpainting@comcast.net'>
                njbpainting@comcast.net
              </a>
              <br />
              <a href='tel:5702941517'>267-410-7284</a>
            </h3>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
