import React, { Component } from "react";
import { Columns, Container } from 'react-bulma-components'
import SearchContainer from "../SearchCard/SearchContainer"

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
            <div className="section">
              <Container>
                <Columns>
                  <Columns.Column className="is-5">
                    <h1>What are the dates of your stay?</h1>
                    <Columns>
                      <Columns.Column>
                        <div class="field">
                          <label className="label" for="start">Check In</label>
                          <input type="date" id="start" name="trip-start" value="2020-10-1" min="2020-01-01" max="2021-12-31"/>
                        </div>
                      </Columns.Column>
                      <Columns.Column>
                        <div class="field">
                          <label className="label" for="start">Check Out</label>
                          <input type="date" id="start" name="trip-start" value="2020-10-1" min="2020-01-01" max="2021-12-31"/>
                        </div>
                      </Columns.Column>
                    </Columns>
                  </Columns.Column>
                </Columns>
              </Container>
            </div>
          
          
            <h1 className="column is-5 is-offset-1"><strong>How many dogs need boarding</strong></h1>
              <br/>
                <div className="column is-5 is-offset-1">  
                  <div className="select is-rounded">
                    <select>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
            <h1 className="column is-5 is-offset-1"><strong>Does your dog require grooming services?</strong></h1>
            <br/>
              <div className="column is-5 is-offset-1">
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
              </div>
          <hr/>
          <h1 className="column is-5 is-offset-1"><strong>Boarders in Nashville</strong></h1>
            <div className="column is-5 is-offset-1">
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

            <SearchContainer />

          </div>
        );
                }
        }


export default Search;
