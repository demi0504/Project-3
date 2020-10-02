import React from "react";

const Search = () => (
  <div className="containers">
    <h1 className="column is-5 is-offset-1"><strong>What are the dates of your stay?</strong></h1>
      <label for="start">Check In</label>

<input className="column is-offset-1" type="date" id="start" name="trip-start"
       value="2020-10-1"
       min="2020-01-01" max="2021-12-31"/>
      <label for="start" className="row is-5 is-offset-1">Check Out</label>

<input type="date" id="start" name="trip-start"
       value="2020-10-2"
       min="2020-01-01" max="2021-12-31"/>

    <h1><strong>How many dogs need boarding</strong></h1>
    <br/>
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span className="icon is-small">
            {/* <i className="fas fa-angle-down" aria-hidden="true"/> */}
          </span>
        </button>
      </div>
    {/* <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">
        <a href="#" className="dropdown-item">
          1
        </a>
        <a href="#" className="dropdown-item">
          2
        </a>
        <a href="#" className="dropdown-item">
          3
        </a>
        <a href="#" className="dropdown-item">
          4
        </a>
      </div>
    </div> */}
  </div>
    <h1><strong>Does your dog require grooming services?</strong></h1>
    <br/>
      <div className="control">
        <label className="radio">
          <input type="radio" name="answer"/>
          Yes
        </label>
        <label className="radio">
          <input type="radio" name="answer"/>
          No
        </label>
      </div>  
  
  <hr/>
  <h1>Boarders in Nashville</h1>
  
  
  </div>
);




export default Search;
