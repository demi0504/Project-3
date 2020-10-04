import React, { Component } from "react";
import OneImage from "../OneImage"
import ThreeImage from "../ThreeImage"

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

  handleFormSubmit = event => {
    event.preventDefault();
    //Should change alert to modal
    alert(`${this.state.fullName}, message sent!`);
    this.setState({
      fullName: "",
      Email: "",
      Message: ""
    });
  };
  
  
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
              >Submit</button>
            </div>
          </div>
        </section>
        <ThreeImage />
      </div>
    );
  }
};

export default Contact;
