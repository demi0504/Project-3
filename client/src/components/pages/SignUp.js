import React from "react";
import Modal from "../SignupModal";
import OneImage from "../OneImage";
import { Hero } from "react-bulma-components";
import { Columns, Container } from 'react-bulma-components'
import { Button } from "react-bulma-components";

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
        <Hero className="is-medium is-light is-bold">
            <div className="hero-body">
              <Container>
                <h1 className="title">Become A Part Of AirBob!</h1>
                <h2 className="subtitle">
                  AirBob makes it simple for guests to look up your rates, reviews and availability. Once your business is added, 
                  guests can begin booking their pets with you!
                </h2>
              </Container>
            </div>   
        </Hero>
        <section className="section">
          <Container>
            <Columns>
              <Columns.Column className="is-one-third">
                <p className="about">Our website makes it easy for potential clients to find your business and see what services you offer.</p>
              </Columns.Column>
              <Columns.Column className="is-one-third">
                <div className="has-text-centered content">
                  <Button className="is-primary" onClick={this.openModal}>
                    Add Your Business!
                  </Button>
                </div>
                <Modal 
                  closeModal={this.openModal} modalState={this.state.modalState}>
                </Modal>
              </Columns.Column>
              <Columns.Column className="is-one-third">
                <p className="about">Login to easily adjust pricing, services and hours all in one place. Here's another sentence for looks.</p>
              </Columns.Column>
            </Columns>
          </Container>
        </section>
        
      </div>
    );
  }
}

export default Signup;

