import React, { Component } from "react";
import SearchCard from "./SearchCard";
import API from "../../utils/API";

function SearchContainer(props) {
  // state = {
  //   businesses: "",
  //   filteredBusinesses: ""
  // };

  // componentDidMount() {
  //   API.getFacilities()
  //     .then(res => 
  //       {console.log("Working!!" + res.data)
  //         this.setState({ 
  //         businesses: res.data,
  //         filteredBusinesses: res.data })})
          
  //     .catch(err => console.log(err));
  // };


  // render() {
    return (

      <div>
            {/* {this.state.businesses.map(biz => (
          <SearchCard
            id={biz.id}
            key={biz.id}
          />
         ))} */}

    <div className="card">
      <div className="column is-12">
        <div className="media-content">
          <p className="title is-4">Name:{props.name}</p>
        </div>
        <div className="media-content">
          <p className="title is-4"> Address: {props.address}</p>
          <p className="title is-4"> City: {props.city}, State: {props.state} Zip: {props.zip}</p>
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
  // }
};

export default SearchContainer;
