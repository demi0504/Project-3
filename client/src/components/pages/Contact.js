import React, { Component } from "react";
import OneImage from "../OneImage"
import ThreeImage from "../ThreeImage"
import ContactAlertModal from "../ContactAlertModal";

class Contact extends Component {
  state = {
    fullName: "",
    Email: "",
    Message: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false
    };
    
    this.openModal = this.openModal.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      fullName: "",
      Email: "",
      Message: ""
    });
  };

  openModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Contact Us!</h1>
        <OneImage />
        <section className="section">
          <div className="container">
            <div className="field">
              <div className="control">
                <input 
                className="input is-primary" 
                type="text" 
                placeholder="Name" 
                value={this.state.fullName}
                name="fullName"
                onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input 
                className="input is-primary" 
                type="text" 
                placeholder="Email" 
                value={this.state.Email}
                name="Email"
                onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="control">
              <textarea 
                className="textarea has-fixed-size" 
                placeholder="Message"
                value={this.state.Message}
                name="Message"
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            
            <div className="control">
              <button 
              className="button is-primary"
              onClick={this.handleFormSubmit}
              onClick={this.openModal}
              >Submit</button>
            </div>
            <ContactAlertModal 
            closeModal={this.openModal} 
            modalState={this.state.modalState} 
            >
              {this.state.fullName}
            </ContactAlertModal>
          </div>
        </section>
        <ThreeImage />
      </div>
    );
  }
};

export default Contact;
