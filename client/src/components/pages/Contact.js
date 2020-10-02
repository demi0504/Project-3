import React from "react";
import OneImage from "../OneImage"

const Contact = () => (
  <div>
    <h1>Contact Us!</h1>
    <OneImage />
    <section class="section">
      <div class="container">
        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Name" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-primary" type="text" placeholder="Email" />
          </div>
        </div>

        <div class="control">
          <textarea class="textarea has-fixed-size" placeholder="Message"></textarea>
        </div>
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
