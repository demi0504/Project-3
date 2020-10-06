import React from "react";
import SearchContainer from "../SearchCard/SearchContainer"

const Search = () => (
  <div>
    <h3>What are the dates of your stay?</h3>
      <p>Check In</p>
        {/* calendar/date select functionality */}
      <p>Check Out</p>
        {/* calendar/date select functionality */}

    <h3>How many dogs need boarding</h3>
      {/* number counter 0-5 */}

    <h3>Does your dog require grooming services?</h3>
      {/* yes or no selector */}


    <SearchContainer />

  </div>
);

export default Search;
