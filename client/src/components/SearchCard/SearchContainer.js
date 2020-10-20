import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import { Columns, Container } from 'react-bulma-components'
import OneImage from "../OneImage";


function SearchContainer(props) {
    return (
        <div className="card has-text-centered search-margin">
            <div className="media-content">
              <div className="bizName">{props.name}</div>
            </div>
            <div className="media-content">
              <p className="about">{props.address}</p>
              <p className="about">{props.city}, {props.state} {props.zip}</p>
            </div>
            <div className="media-content">
              <p className="about">Price Per Night: ${props.price}</p>
            </div>
            <div className="media-content">
              <p className="about">{props.phone}</p>
            </div>
            <Link to={{ pathname: `/reserve/${props.id}` }}>
              <Button className="is-dark is-medium reso-btn">Make A Reservation</Button>
            </Link>
            <div className="media-content">
              <OneImage />
            </div>
        </div>
    ); 
};

export default SearchContainer;
