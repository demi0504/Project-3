// import React, { useState } from "react";
// import API from "../../utils/API";
// const Modal = ({ closeModal, modalState }) => {
//   if(!modalState) {
//     return null;
//   }
  
//   // const [facilities, setFacilities] = useState([])
//   // const [formObject, setFormObject] = useState({
//   //   name: "",
//   //   address: "",
//   //   city: "",
//   //   state: "",
//   //   zip: "",
//   //   phone: "",
//   //   about: "",
//   //   safety: "",
//   //   requirements: "",
//   //   src: "",
//   //   occupancy: "",
//   //   daycare: "",
//   //   boarding: "",
//   //   grooming: ""
//   // })

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.name && formObject.address && formObject.city && formObject.state && formObject.zip && formObject.phone) {
//       API.saveFacility({
//         name: formObject.name,
//         address: formObject.address,
//         city: formObject.city,
//         state: formObject.state,
//         zip: formObject.zip,
//         phone: formObject.phone,
//         about: formObject.about,
//         safety: formObject.safety,
//         requirements: formObject.requirements,
//         src: formObject.src,
//         occupancy: formObject.occupancy,
//         daycare: formObject.daycare,
//         boarding: formObject.boarding,
//         grooming: formObject.grooming
//       })
//         .then(() => setFormObject({
//           name: "",
//           address: "",
//           city: "",
//           state: "",
//           zip: "",
//           phone: "",
//           about: "",
//           safety: "",
//           requirements: "",
//           src: "",
//           occupancy: "",
//           daycare: "",
//           boarding: "",
//           grooming: ""
//         }))
//     } 
//   };

//   return(
//     <div className="modal is-active">
//       <div className="modal-background" onClick={closeModal} />
//       <div className="modal-card">
//         <header className="modal-card-head">
//           <p className="modal-card-title">Business Info</p>
//           <button className="delete" onClick={closeModal} />
//         </header>
//         <section className="modal-card-body">
//           <div className="content">
//             <h2>Facility Name</h2>
//             <div className="field">
//               <div className="control">
//                 <input className="input is-primary" type="text" placeholder="" />
//               </div>
//             </div>
//             <h2>Address</h2>
//             <div className="field">
//               <div className="control">
//                 <input className="input is-primary" type="text" placeholder="Street Number" />
//               </div>
//             </div>
//             <div className="columns">
//               <div className="column">
//                 <div className="control">
//                   <input className="input is-primary" type="text" placeholder="City" />
//                 </div>
//               </div>
//               <div className="column">
//                 <div className="control">
//                   <div className="select is-primary">
//                     <select>
//                       <option>AL</option>
//                       <option>AK</option>
//                       <option>AR</option>
//                       <option>AZ</option>
//                       <option>CA</option>
//                       <option>CO</option>
//                       <option>CT</option>
//                       <option>DE</option>
//                       <option>FL</option>
//                       <option>GA</option>
//                       <option>HI</option>
//                       <option>IA</option>
//                       <option>ID</option>
//                       <option>IL</option>
//                       <option>IN</option>                      
//                       <option>KS</option>
//                       <option>KY</option>
//                       <option>LA</option>
//                       <option>MA</option>
//                       <option>MD</option>
//                       <option>ME</option>                                            
//                       <option>MI</option>
//                       <option>MN</option>
//                       <option>MO</option>
//                       <option>MS</option>                      
//                       <option>MT</option>
//                       <option>NC</option>
//                       <option>ND</option>
//                       <option>NE</option>
//                       <option>NH</option>
//                       <option>NJ</option>
//                       <option>NM</option>
//                       <option>NV</option>                  
//                       <option>NY</option>                      
//                       <option>OH</option>
//                       <option>OK</option>
//                       <option>OR</option>
//                       <option>PA</option>
//                       <option>RI</option>
//                       <option>SC</option>
//                       <option>SD</option>
//                       <option>TN</option>
//                       <option>TX</option>
//                       <option>UT</option>
//                       <option>VA</option>
//                       <option>VT</option>                      
//                       <option>WA</option>
//                       <option>WI</option>
//                       <option>WV</option>                      
//                       <option>WY</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div className="column">
//                 <div className="control">
//                     <input className="input is-primary" type="text" placeholder="Zip Code" />
//                 </div>
//               </div>
//             </div>
//             <h2>Phone</h2>
//             <div className="field">
//               <div className="control">
//                 <input className="input is-primary" type="text" placeholder="Ex: 615-997-4323" />
//               </div>
//             </div>
//             <h2>Max Occupancy</h2>
//             <div className="field">
//               <div className="control">
//                 <input className="input is-primary" type="text" placeholder="Ex: 20" />
//               </div>
//             </div>
//             <h2>Give a brief description of your business:</h2>
//             <div className="control">
//               <textarea className="textarea has-fixed-size is-primary" placeholder=""></textarea>
//             </div>
//             <h2>Do you have any requirements?</h2>
//             <div className="control">
//               <textarea className="textarea has-fixed-size is-primary" placeholder="Ex: Must have up to date vet records."></textarea>
//             </div>
//             <h2>Do you have a website?</h2>
//             <div className="field">
//               <div className="control">
//                 <input className="input is-primary" type="text" placeholder="" />
//               </div>
//             </div>
//             <h2>Do you offer day care services?</h2>
//             <div className="control">
//                 <label className="radio">
//                     <input type="radio" value="true" name="answer" />
//                     Yes
//                 </label>
//                 <label className="radio">
//                     <input type="radio" value="false" name="answer" />
//                     No
//                 </label>
//             </div>
//             <h2>Do you offer boarding services?</h2>
//             <div className="control">
//                 <label className="radio">
//                     <input type="radio" value="true" name="answer2" />
//                     Yes
//                 </label>
//                 <label className="radio">
//                     <input type="radio" value="false" name="answer2" />
//                     No
//                 </label>
//             </div>
//             <h2>Do you offer grooming services?</h2>
//             <div className="control">
//                 <label className="radio">
//                     <input type="radio" value="true" name="answer3" />
//                     Yes
//                 </label>
//                 <label className="radio">
//                     <input type="radio" value="false" name="answer3" />
//                     No
//                 </label>
//             </div>
//           </div>
//         </section>
//         <footer className="modal-card-foot">
//           <button className="button is-success">Submit</button>
//           <a className="button" onClick={closeModal}>Cancel</a>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Modal;