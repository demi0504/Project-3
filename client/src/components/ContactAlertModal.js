import React from "react";

const ContactAlertModal = ({ closeModal, modalState }, props) => {
  if(!modalState) {
    return null;
  }
  
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Form Submission:</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <h1>{props.fullname}, message sent!</h1>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={closeModal}>OK</button>
        </footer>
      </div>
    </div>
  );
}

export default ContactAlertModal;