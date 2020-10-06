import React from "react";

function SearchCard(props) {
  return (
    
    <div class="card">
      <div class="column is-6 card-image">
        <figure class="image">
          <img src={props.image} alt="Placeholder" />
        </figure>
      </div>
      <div class="column is-6">
        <div class="media-content">
          <p class="title is-4">{props.name}Title</p>
        </div>
        <div class="content">
          {props.description} Description
        </div>
      </div>
    </div>

  );
}

export default SearchCard;