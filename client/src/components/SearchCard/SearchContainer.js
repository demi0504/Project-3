import React from "react";


function SearchContainer(props) {


  
    return (

      <div>
    

        <div className="card">
          <div className="column is-12">
            <div className="media-content">
              <p className="title is-4">Name: {props.name}</p>
            </div>
            <div className="media-content">
              <p className="title is-4">Address: {props.address}</p>
              <p className="title is-4">City: {props.city}, State: {props.state} Zip: {props.zip}</p>
            </div>
            <div className="media-content">
              <p className="title is-4">Phone: {props.phone}</p>
            </div>
            <div className="content">
              {props.about}
            </div>
            <button className="button is-light">More Info</button>
          </div>
        </div>
      </div>

    );
  
};

export default SearchContainer;
