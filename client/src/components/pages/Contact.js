import React from "react";
import OneImage from "../OneImage"

const Contact = () => (
  <div>
    <h1>Contact Us!</h1>
    <OneImage />
    <section className="section">
      <div className="container">
        <div className="field">
          <div className="control">
            <input className="input is-primary" type="text" placeholder="Name" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input className="input is-primary" type="text" placeholder="Email" />
          </div>
        </div>

        <div className="control">
          <textarea className="textarea has-fixed-size" placeholder="Message"></textarea>
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
