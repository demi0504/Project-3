import React, { Component } from "react";
import SearchCard from "./SearchCard";
import API from "../../utils/API";

class SearchContainer extends Component {
  state = {
    businesses: "",
    filteredBusinesses: ""
  };

  componentDidMount() {
    API.getFacilities()
      .then(res => 
        {console.log("Working!!" + res.data)
          this.setState({ 
          businesses: res.data,
          filteredBusinesses: res.data })})
          
      .catch(err => console.log(err));
  };


  render() {
    return (

      <div>
            {/* {this.state.businesses.map(biz => (
          <SearchCard
            id={biz.id}
            key={biz.id}
          />
         ))} */}
      </div>

    );
  }
};

export default SearchContainer;
