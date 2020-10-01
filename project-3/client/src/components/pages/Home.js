import React from "react";

const Home = () => (
  <div>
    <div className="columns">
      <div className="column is-5 is-offset-1"> 
        <p id="thick">Worry Free Pet Boarding.</p>
        <div className="columns">
          <div className="column is-narrow">
            <button class="button is-dark is-medium">Book A Stay</button>
          </div>
          <div className="column">
            <button class="button is-light is-medium">Contact</button>
          </div>
        </div>
      </div>
      <div className="column is-6">
        <img src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg" alt="dog in hotel"/>
      </div>
    </div>
    <hr />
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <p className="about">
        Trust AirBob to offer only the best boarding options for your beloved pets. 
        Compare pricing for boarding and grooming options in your area and make a reservation for your pets stay 
        all in one place!
        </p>
      </div>
    </div>
  </div>
);

export default Home;
