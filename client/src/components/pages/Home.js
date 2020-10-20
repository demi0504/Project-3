import React from "react";
import { Hero } from "react-bulma-components";
import { Columns, Container } from 'react-bulma-components'
import { Button } from "react-bulma-components";
import { BrowserRouter as Link } from "react-router-dom";

const Home = () => (
  <div>
    <Hero className="is-large has-background">
      <img className="hero-background is-transparent" src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg" alt="dog in hotel"/>
        <div className="hero-body">
          <Container>
            <p className="thick">Worry Free Pet Boarding.</p>
          </Container>
        </div>   
    </Hero>
    <hr />
    <div className="section">
      <Container>
        <Columns>
          <Columns.Column className="is-half is-offset-one-quarter">
            <p className="about">
              Trust AirBob to offer only the best boarding options for your beloved pets. 
              Compare pricing for boarding and grooming options in your area and make a reservation for your pets stay 
              all in one place!
            </p>
           </Columns.Column>
        </Columns>
      </Container>
    </div>
    <hr />
    <div className="section">
      <Container>
        <Columns>
          <Columns.Column className="is-half is-offset-one-quarter">
            <p className="thick has-text-centered">Add Your Business to AirBob</p>
            <p className="about">Own a pet boarding facility in the area?</p>
           </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column className="is-5 is-offset-1">
            <p className="about">
              If you would like to have your kennel added to our site fill out our sign up 
              form and start receiving bookings today!
            </p> 
          </Columns.Column>
          <Columns.Column className="is-5 is-offset-1">
            <img src="https://2jldgn40oeit3yq3341jybxz-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/Luxury-3-1024x684.jpg" alt="dog in hotel"/>
          </Columns.Column>
        </Columns>
      </Container>
    </div>
  </div>
);

export default Home;
