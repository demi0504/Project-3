import React from "react";

const Modal = ({ closeModal, modalState }) => {
  if(!modalState) {
    return null;
  }
  
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Business Info</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <h1>Facility Name</h1>
            <div className="field">
              <div className="control">
                <input className="input is-primary" type="text" placeholder="" />
              </div>
            </div>
            <h1>Address</h1>
            <div className="field">
              <div className="control">
                <input className="input is-primary" type="text" placeholder="Street Number" />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="control">
                  <input className="input is-primary" type="text" placeholder="City" />
                </div>
              </div>
              <div className="column">
                <div className="control">
                  <div className="select is-primary">
                    <select>
                      <option>AL</option>
                      <option>AK</option>
                      <option>AZ</option>
                      <option>AR</option>
                      <option>CA</option>
                      <option>CO</option>
                      <option>CT</option>
                      <option>DE</option>
                      <option>FL</option>
                      <option>GA</option>
                      <option>HI</option>
                      <option>ID</option>
                      <option>IL</option>
                      <option>IN</option>
                      <option>IA</option>
                      <option>KS</option>
                      <option>KY</option>
                      <option>LA</option>
                      <option>ME</option>
                      <option>MD</option>
                      <option>MA</option>
                      <option>MI</option>
                      <option>MN</option>
                      <option>MS</option>
                      <option>MO</option>
                      <option>MT</option>
                      <option>NE</option>
                      <option>NV</option>
                      <option>NH</option>
                      <option>NJ</option>
                      <option>NM</option>
                      <option>NY</option>
                      <option>NC</option>
                      <option>ND</option>
                      <option>OH</option>
                      <option>OK</option>
                      <option>OR</option>
                      <option>PA</option>
                      <option>RI</option>
                      <option>SC</option>
                      <option>SD</option>
                      <option>TN</option>
                      <option>TX</option>
                      <option>UT</option>
                      <option>VT</option>
                      <option>VA</option>
                      <option>WA</option>
                      <option>WV</option>
                      <option>WI</option>
                      <option>WY</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="control">
                    <input className="input is-primary" type="text" placeholder="Zip Code" />
                </div>
              </div>
            </div>
            <h1>Phone</h1>
            <div className="field">
              <div className="control">
                <input className="input is-primary" type="text" placeholder="Primary input" />
              </div>
            </div>
            <h1>Max Occupancy</h1>
            <div className="field">
              <div className="control">
                <input className="input is-primary" type="text" placeholder="Primary input" />
              </div>
            </div>
            <h1>Do you offer day care services?</h1>
            <div className="control">
                <label className="radio">
                    <input type="radio" name="answer" />
                    Yes
                </label>
                <label className="radio">
                    <input type="radio" name="answer" />
                    No
                </label>
            </div>
            <h1>Do you offer boarding services?</h1>
            <div className="control">
                <label className="radio">
                    <input type="radio" name="answer" />
                    Yes
                </label>
                <label className="radio">
                    <input type="radio" name="answer" />
                    No
                </label>
            </div>
            <h1>Do you offer grooming services?</h1>
            <div className="control">
                <label className="radio">
                    <input type="radio" name="answer" />
                    Yes
                </label>
                <label className="radio">
                    <input type="radio" name="answer" />
                    No
                </label>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Submit</button>
          <a className="button" onClick={closeModal}>Cancel</a>
        </footer>
      </div>
    </div>
  );
}

export default Modal;