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
            <div class="field">
              <div class="control">
                <input class="input is-primary" type="text" placeholder="Primary input" />
              </div>
            </div>
            <h1>Address</h1>
            <div class="field">
              <div class="control">
                <input class="input is-primary" type="text" placeholder="Primary input" />
              </div>
            </div>
            <h1>Phone</h1>
            <div class="field">
              <div class="control">
                <input class="input is-primary" type="text" placeholder="Primary input" />
              </div>
            </div>
            <h1>Max Occupancy</h1>
            <div class="field">
              <div class="control">
                <input class="input is-primary" type="text" placeholder="Primary input" />
              </div>
            </div>
            <h1>Do you offer day care services?</h1>
            <div class="control">
                <label class="radio">
                    <input type="radio" name="answer" />
                    Yes
                </label>
                <label class="radio">
                    <input type="radio" name="answer" />
                    No
                </label>
            </div>
            <h1>Do you offer boarding services?</h1>
            <div class="control">
                <label class="radio">
                    <input type="radio" name="answer" />
                    Yes
                </label>
                <label class="radio">
                    <input type="radio" name="answer" />
                    No
                </label>
            </div>
            <h1>Do you offer grooming services?</h1>
            <div class="control">
                <label class="radio">
                    <input type="radio" name="answer" />
                    Yes
                </label>
                <label class="radio">
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