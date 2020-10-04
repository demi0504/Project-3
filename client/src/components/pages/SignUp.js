import React from "react";
import Modal from "../SignupModal";
import OneImage from "../OneImage";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false
    };
    
    this.openModal = this.openModal.bind(this);
  }
  
  openModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }
  
  render() {
    return(
      <div>
        <section className="section">
          <OneImage />
        </section>
        <section className="section">
          <OneImage />
        </section>
        <section className="section">
          <OneImage />
        </section>
        <section className="section">
          <h1>Become a part of AirBob!</h1>
          <p>AirBob makes it simple for guests to look up your rates, reviews and availability. Once your business is added, guests can begin booking their pets with you!</p>
        </section>
        <section className="section">
          <div className="container">
            <div className="has-text-centered content">
              
              <a className="button is-primary" onClick={this.openModal}>
                Add Your Business!
              </a>
            </div>
            
            <Modal 
              closeModal={this.openModal} 
              modalState={this.state.modalState} 
            >
              
            </Modal>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
