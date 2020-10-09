import React, { Component } from "react";
import Axios from 'axios';
import OneImage from "../OneImage"
import ThreeImage from "../ThreeImage"
import ContactAlertModal from "../ContactAlertModal";
import DogSVG from "../DogSVG/DogSVG"

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        message: ''
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target);

    const { name, email, message } = this.state;

    const form = await Axios.post('/api/contact-form', {
      name, 
      email, 
      message
    })
  }

  openModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }
  
  render() {
    return (
      <div>
        <DogSVG />
        <h1>Contact Us!</h1>
        <OneImage />
        <section className="section">
          <div className="container">
            <form id="contact-form" onSubmit={this.handleFormSubmit.bind(this)} method="POST">
            <div className="field">
              <div className="control">
                <input 
                className="input is-primary" 
                type="text" 
                placeholder="Name" 
                value={this.state.name}
                name="name"
                onChange={this.handleInputChange.bind(this)}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input 
                className="input is-primary" 
                type="text" 
                placeholder="Email" 
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange.bind(this)}
                />
              </div>
            </div>

            <div className="control">
              <textarea 
                className="textarea has-fixed-size" 
                placeholder="Message"
                value={this.state.message}
                name="message"
                onChange={this.handleInputChange.bind(this)}
              ></textarea>
            </div>
            
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
            <ContactAlertModal 
            closeModal={this.openModal} 
            modalState={this.state.modalState} 
            >
              {this.state.fullName}
            </ContactAlertModal>
            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
            </form>
          </div>
        </section>
        <ThreeImage />
      </div>
    );
  }
};

export default Contact;
