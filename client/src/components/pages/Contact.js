import React, { Component } from "react";
import Axios from 'axios';
import ContactAlertModal from "../ContactAlertModal";
import { Columns, Container } from 'react-bulma-components' 
import "../style/imgstyle.css";

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

    const form = await Axios.post('/api/contact-form/send', {
      name, 
      email, 
      message
    })
  }

  resetForm(){
    document.getElementById('contact-form').reset();
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
        <section className="section">
          <Container>
            <Columns>
              <Columns.Column className="is-half">
                <h1 className="thick">Let's Talk!</h1>
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
                  <p class="help">Don't worry, we won't share your email with anyone.</p>
                </div>
                <div className="control">
                  <textarea 
                    className="textarea has-fixed-size is-primary" 
                    placeholder="Message"
                    value={this.state.message}
                    name="message"
                    onChange={this.handleInputChange.bind(this)}
                  ></textarea>
                </div>
                <div className="control">
                  <button className="button is-primary contact-btn">Submit</button>
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
              </Columns.Column>
              <Columns.Column>
              <img className="is-transparent" src="https://images.dog.ceo/breeds/poodle-standard/n02113799_2292.jpg" alt="standard poodle with a bubble"/>
              </Columns.Column>
            </Columns>
          </Container>
        </section>
      </div>
    );
  }
};

export default Contact;
