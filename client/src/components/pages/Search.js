import React, { Component } from "react";
import { Columns, Container } from 'react-bulma-components'






class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }
  
  handleToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  
  render() {
    return (
      <div className="container">
        <p className="column is-5 is-offset-1 thick"><strong>Bring out ye dogs</strong></p>
          <h1 className="column is-5 is-offset-2 thick">What are the dates of your stay?</h1>
        <div className="section">
          <Columns>
            <label className="column is-offset-one-fifth" for="start">Check In</label>
                <input className="column" type="date" id="start" name="trip-start" value="2020-10-1" min="2020-01-01" max="2021-12-31"/>
                
              
            <label for="start" className="column is-offset-one-fifth">Check Out</label>
              <input className="column" type="date" id="start" name="trip-start" value="2020-10-2" min="2020-01-01" max="2021-12-31"/>
            </Columns>
          </div>
            <h1 className="column is-5 is-offset-1"><strong>How many dogs need boarding</strong></h1>
              <br/>
                <div className={"dropdown" + (this.state.collapsed ? "" : " is-active")} tabIndex="0" onBlur={() => this.handleToggle()}>
                  <div className="dropdown-trigger">
                      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.handleToggle()}>
                          <span>Number of Dogs</span>
                          <span className="icon is-small">
                              <i className="fas fa-angle-down" aria-hidden="true"></i>
                          </span>
                      </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                          <a href="#" className="dropdown-item">1</a>
                          <a href="#" className="dropdown-item">2</a>
                          <a href="#" className="dropdown-item">3</a>
                          <a href="#" className="dropdown-item">4</a>
                          <a href="#" className="dropdown-item">5</a>
                      </div>
                  </div>
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
          <h1><strong>Boarders in Nashville</strong></h1>
            <div class="field has-addons">
              <div class="control">
                <input class="input" type="text" placeholder="Find a Boarder"/>
                  </div>
                <div class="control">
                  <a class="button is-info">
                    Search
                  </a>
                </div>
              </div>
          </div>
        );
                }
        }


export default Search;
