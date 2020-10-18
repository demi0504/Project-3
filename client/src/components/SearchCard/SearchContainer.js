import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import OneImage from "../OneImage";


function SearchContainer(props) {


  
    return (

      <div>
        <OneImage />
        <div className="card">
          <div className="column is-12">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.address}</p>
              <p className="title is-4">{props.city}, {props.state} {props.zip}</p>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.phone}</p>
            </div>
            <div className="content">
              {props.about}
            </div>
            <button className="button is-light is-medium">More Info</button>
            <Link to={{ pathname: `/reserve/${props.id}` }}>
              <Button className="is-dark is-medium reso-btn">Reserve</Button>
            </Link>
          </div>
        </div>
      </div>

    );
  
};

export default SearchContainer;
