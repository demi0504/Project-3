import React, { Component } from "react";
import { Columns, Container } from 'react-bulma-components'
import SearchContainer from "../SearchCard/SearchContainer"
import API from "../../utils/API";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       collapsed: true,
       stateInput: "",
       businesses: [],
       filteredBusinesses: []
      };
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    API.getFacilities()
      .then(res => 
        {console.log("Working!!" + JSON.stringify(res.data))
          this.setState({ 
          businesses: res.data,
          filteredBusinesses: res.data })})
      .catch(err => console.log(err));
  };

  handleToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  handleChange = (event) => {
    var value = event.target.value
    this.setState(state => ({
      stateInput: value
    }) )
  }
  handleSearch = () => {
    API.getFacilityState(this.state.stateInput)
    .then(res =>
      {this.setState({ result: res.data.city })})
    .catch(err => console.log(err));
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
                          <input type="date" id="start" name="trip-start" value="2020-10-01" min="2020-01-01" max="2021-12-31"/>
                        </div>
                      </Columns.Column>
                      <Columns.Column>
                        <div class="field">
                          <label className="label" for="start">Check Out</label>
                          <input type="date" id="start" name="trip-start" value="2020-10-01" min="2020-01-01" max="2021-12-31"/>
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
                  <input className="input" type="text" onChange={this.handleChange} value={this.state.stateInput}/>
                  {/* <div className="select is-rounded">
                    <select>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div> */}
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

          <h1 className="column is-5 is-offset-1"><strong>Search by State</strong></h1>
          <div className="column is-5 is-offset-1">
                <div className="control mb-2">
                  <div className="select is-primary">
                    <select
                      name="state"
                      
                    >
                      <option>AL</option>
                      <option>AK</option>
                      <option>AR</option>
                      <option>AZ</option>
                      <option>CA</option>
                      <option>CO</option>
                      <option>CT</option>
                      <option>DE</option>
                      <option>FL</option>
                      <option>GA</option>
                      <option>HI</option>
                      <option>IA</option>
                      <option>ID</option>
                      <option>IL</option>
                      <option>IN</option>
                      <option>KS</option>
                      <option>KY</option>
                      <option>LA</option>
                      <option>MA</option>
                      <option>MD</option>
                      <option>ME</option>
                      <option>MI</option>
                      <option>MN</option>
                      <option>MO</option>
                      <option>MS</option>
                      <option>MT</option>
                      <option>NC</option>
                      <option>ND</option>
                      <option>NE</option>
                      <option>NH</option>
                      <option>NJ</option>
                      <option>NM</option>
                      <option>NV</option>
                      <option>NY</option>
                      <option>OH</option>
                      <option>OK</option>
                      <option>OR</option>
                      <option>PA</option>
                      <option>RI</option>
                      <option>SC</option>
                      <option>SD</option>
                      <option>TN</option>
                      <option>TX</option>
                      <option>UT</option>
                      <option>VA</option>
                      <option>VT</option>
                      <option>WA</option>
                      <option>WI</option>
                      <option>WV</option>
                      <option>WY</option>
                    </select>
                  </div>
                </div>
                <div class="control">
                    <a class="button is-info">
                      Search
                    </a>
                  </div>
              </div>

              <hr/>

          <h1 className="column is-5 is-offset-1"><strong>Search by City</strong></h1>
          <div className="column is-5 is-offset-1">
            <div className="control mb-2">
              <div className="select is-primary">
                <select
                  name="city"
                  onChange={this.handleChange}
                  value={this.state.stateInput}
                >
                  <option></option>
                  <option>Austin</option>
                  <option>Chicago</option>
                  <option>Los Angeles</option>
                  <option>Nashville</option>
                  <option>New York</option>
                  <option>Seattle</option>
                </select>
              </div>
            </div>
            <div class="control">
                <a class="button is-info"
                onClick={this.handleSearch} >
                  Search
                </a>
              </div>
          </div>
          <hr/>

          <h1 className="column is-5 is-offset-1"><strong>Search By Zipcode</strong></h1>
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

          <hr/>
          <h1 className="column is-5 is-offset-1"><strong>Boarders in Nashville</strong></h1>
            <div className="column is-5 is-offset-1">
              <div class="field has-addons">
                <div class="control">
                  <input class="input" type="text" placeholder="Find a Boarder"/>
                    </div>
                  <div class="control">
                    <a onClick={this.handleSearch} class="button is-info">
                      Search
                    </a>
                  </div>
                </div>
            </div>

          {this.state.businesses.map(biz => (
          <SearchContainer
            id={biz.id}
            key={biz.id}
            name={biz.profName}
            address={biz.address}
            city={biz.city}
            zip={biz.zip}
            phone={biz.phone}
          />
         ))}
            
            
          </div>
        );
                }
        }


export default Search;
