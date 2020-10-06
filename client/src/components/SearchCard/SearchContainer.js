import React, { Component } from "react";
import SearchCard from "./SearchCard";
// import businesses from "";

class SearchContainer extends Component {
  state = {
    // businesses
  };

  render() {
    return (

      <div>
            {/* {this.state.businesses.map(biz => ( */}
          <SearchCard
            // id={biz.id}
            // key={biz.id}

          />
        {/* ))} */}
      </div>

    );
  }
};

export default SearchContainer;
