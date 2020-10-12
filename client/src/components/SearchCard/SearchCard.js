import React from "react";

function SearchCard(props) {
  return (
    
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
        <button className="button is-light">More Info</button>
      </div>
    </div>

  );
}

export default SearchCard;