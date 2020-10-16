import React, { useState } from "react";
import API from "../utils/API";
import Input from "./Input";
import Textarea from "./TextArea";


const Modal = ({ closeModal }) => {
  
  
  
  const [formObject, setFormObject] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    about: "",
    safety: "",
    requirements: "",
    src: "",
    occupancy: "",
    daycare: "",
    boarding: "",
    grooming: ""
  })



  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.address && formObject.city && formObject.state && formObject.zip && formObject.phone) {
      API.saveFacility({
        name: formObject.name,
        address: formObject.address,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
        phone: formObject.phone,
        about: formObject.about,
        safety: formObject.safety,
        requirements: formObject.requirements,
        src: formObject.src,
        occupancy: formObject.occupancy,
        daycare: formObject.daycare,
        boarding: formObject.boarding,
        grooming: formObject.grooming
      })
        .then(() => setFormObject({
          name: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          about: "",
          safety: "",
          requirements: "",
          src: "",
          occupancy: "",
          daycare: "",
          boarding: "",
          grooming: ""
        }))
    } 
  };

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
            <h2>Facility Name</h2>
            <Input 
              onChange={handleInputChange}
              name="name"
              placeholder=""
              value={formObject.name}
            />
            <h2>Address</h2>
            <Input 
              onChange={handleInputChange}
              name="address"
              placeholder="Street"
              value={formObject.address}
            />
            <div className="columns">
              <div className="column">
                <div className="control">
                  <input className="input is-primary" 
                          type="text" 
                          placeholder="City"
                          onChange={handleInputChange}
                          name="city"
                          value={formObject.city}
                    />
                </div>
              </div>
              <div className="column">
                <div className="control">
                  <div className="select is-primary">
                    <select
                      onChange={handleInputChange}
                      name="state"
                      value={formObject.state}
                    >
                      <option>AL</option>
                      <option>AK</option>
                      <option>AR</option>
                      <option>AZ</option>
                      <option>CA</option>
                      <option>CO</option>
                      <option>CT</option>
                      <option>DE</option>
                      <option>FL</option>
                      <option>GA</option>
                      <option>HI</option>
                      <option>IA</option>
                      <option>ID</option>
                      <option>IL</option>
                      <option>IN</option>                      
                      <option>KS</option>
                      <option>KY</option>
                      <option>LA</option>
                      <option>MA</option>
                      <option>MD</option>
                      <option>ME</option>                                            
                      <option>MI</option>
                      <option>MN</option>
                      <option>MO</option>
                      <option>MS</option>                      
                      <option>MT</option>
                      <option>NC</option>
                      <option>ND</option>
                      <option>NE</option>
                      <option>NH</option>
                      <option>NJ</option>
                      <option>NM</option>
                      <option>NV</option>                  
                      <option>NY</option>                      
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
                      <option>VA</option>
                      <option>VT</option>                      
                      <option>WA</option>
                      <option>WI</option>
                      <option>WV</option>                      
                      <option>WY</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="control">
                    <input className="input is-primary"
                           type="text" 
                           placeholder="Zip Code"
                           onChange={handleInputChange}
                           name="zip"
                           value={formObject.zip}
                    />
                </div>
              </div>
            </div>
            <h2>Phone</h2>
            <Input 
              onChange={handleInputChange}
              name="phone"
              placeholder=""
              value={formObject.phone}
            />
            <h2>Max Occupancy</h2>
            <Input 
              onChange={handleInputChange}
              name="occupancy"
              placeholder=""
              value={formObject.occupancy}
            />
            <h2>Give a brief description of your business:</h2>
            <Textarea
              onChange={handleInputChange}
              name="about"
              placeholder=""
              value={formObject.about}
            />
            <h2>What are your safety precautions or procedures?</h2>
            <Textarea
              onChange={handleInputChange}
              name="safety"
              placeholder="Ex: Facilities monitored 24/7.  Live web cams.  Staff certified in first aid and CPR."
              value={formObject.safety}
            />
            <h2>Do you have any requirements?</h2>
            <Textarea
              onChange={handleInputChange}
              name="requirements"
              placeholder="Ex: All Dogs must have up to date vet records."
              value={formObject.requirements}
            />
            <h2>Do you have a website?</h2>
            <Input 
              onChange={handleInputChange}
              name="src"
              placeholder="http://www. yourwebsite .com/"
              value={formObject.src}
            />
            <h2>Do you offer day care services?</h2>
            <div className="control">
                <label className="radio">
                    <input type="radio"
                           value="Yes"
                           checked={formObject.daycare === "Yes"}
                           onChange={handleInputChange}
                           name="daycare"
                    />
                    Yes
                </label>
                
                <label className="radio">
                    <input type="radio"
                           value="No"
                           checked={formObject.daycare === "No"}
                           onChange={handleInputChange}
                           name="daycare"
                    />
                    No
                </label>
            </div>
            <h2>Do you offer boarding services?</h2>
            <div className="control">
                <label className="radio">
                    <input type="radio"
                           value="Yes"
                           checked={formObject.boarding === "Yes"}
                           onChange={handleInputChange}
                           name="boarding"
                    />
                    Yes
                </label>
                
                <label className="radio">
                    <input type="radio"
                           value="No"
                           checked={formObject.boarding === "No"}
                           onChange={handleInputChange}
                           name="boarding"
                    />
                    No
                </label>
            </div>
            <h2>Do you offer grooming services?</h2>
            <div className="control">
                <label className="radio">
                    <input type="radio"
                           value="Yes"
                           checked={formObject.grooming === "Yes"}
                           onChange={handleInputChange}
                           name="grooming"
                    />
                    Yes
                </label>
                
                <label className="radio">
                    <input type="radio"
                           value="No"
                           checked={formObject.grooming === "No"}
                           onChange={handleInputChange}
                           name="grooming"
                    />
                    No
                </label>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success"
                  disabled={!(formObject.name && formObject.address && formObject.city && formObject.state && formObject.zip && formObject.phone)}
                  onClick={handleFormSubmit}            
          >Submit</button>
          <a className="button" onClick={closeModal}>Cancel</a>
        </footer>
      </div>
    </div>
  );
}

export default Modal;