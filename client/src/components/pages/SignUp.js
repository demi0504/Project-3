import React from "react";
import Modal from "../SignupModal";
import { Hero } from "react-bulma-components";
import { Columns, Container } from 'react-bulma-components'
import { Button } from "react-bulma-components";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isModalOpen: false
    };
    
    this.openModal = this.openModal.bind(this);
  }
  
  openModal() {  
  
    this.setState((prev, props) => {
      const newState = !prev.isModalOpen;
      
      return { isModalOpen: newState };
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

                { this.state.isModalOpen && <Modal closeModal={this.openModal} />}
                                
              </Columns.Column>
              <Columns.Column className="is-one-third">
                <p className="about">Login to easily adjust pricing, services and hours all in one place. Here's another sentence for looks.</p>
              </Columns.Column>
            </Columns>
          </Container>
        </section>
        <section>
          <Container>
            <Columns>
            <Columns.Column className="is-full">
              <div style={{textAlign: "center"}}>
              <img src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg" alt="Dog"/>
              </div>
            </Columns.Column>
            </Columns>
          </Container>
        </section>
      </div>
    );
  }
}

export default Signup;

