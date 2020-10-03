import React from "react";
import Modal from "../SignupModal";


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
    );
  }
}

export default Signup;
