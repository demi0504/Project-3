import React, { Component } from "react";
import { Hero } from "react-bulma-components";
import SearchContainer from "../SearchCard/SearchContainer"
import API from "../../utils/API";
import { Button } from "react-bulma-components";
import { Columns, Container } from 'react-bulma-components'
import { BrowserRouter as Link } from "react-router-dom";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       collapsed: true,
       stateInput: [],
       businesses: [],
       filteredBusinesses: [],
       hasGrooming: ""
      };
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    API.getFacilities()
      .then(res => 
        {console.log("Working!!" + JSON.stringify(res))
          this.setState({ 
          businesses: res.data,
          filteredBusinesses: res.data })})
      .catch(err => console.log(err));
  };

  cityFilter = city => {
    // const filteredBiz = this.state.filteredBusinesses;
    // if (this.state.zip === stateInput) {
    //   return 
    // }
    const stateInput = this.state.stateInput;

    const businesses = this.state.businesses.filter(biz => biz.city === city);
    if (this.state.city === stateInput) {
      this.setState({ businesses: businesses });
      console.log(businesses)
    }
  }

  handleToggle() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  handleChangeByCity = (event) => {
    var value = event.target.value
    this.setState(state => ({
      cityInput: value,
    }) )
  }
  handleChangeByState = (event) => {
    var value = event.target.value
    this.setState(state => ({
      stateInput: value,
    }) )
  }
  handleSearchByCity = () => {
    API.getFacilityCity(this.state.cityInput)
    .then(res =>
      { 
        this.setState({ businesses: res.data })})
    .catch(err => console.log(err));
  }
  handleSearchByState = () => {
    API.getFacilityState(this.state.stateInput)
    .then(res =>
      { console.log(JSON.stringify(res))
        this.setState({ businesses: res.data })})
    .catch(err => console.log(err));
  }
  
  handleGroomingChange = (event) => {
      let groomingBusinesses;
      this.setState({
      hasGrooming: event.target.value
    })

    if(event.target.value === "groom"){
     groomingBusinesses = this.state.filteredBusinesses.filter(function(business){
        return business.hasOwnProperty("groomingServices")
      })
    }

    if(event.target.value === "nogroom"){
      groomingBusinesses = this.state.filteredBusinesses.filter(function(business){
         return !business.hasOwnProperty("groomingServices")
       })
     }
    
     
    this.setBusinesses(groomingBusinesses)
  }

  setBusinesses = (filteredBusinesses) => {
    this.setState({
      businesses: filteredBusinesses
    })
  }

  render() {
    return (
    <div>
      <Hero className="is-large has-background">
        <img className="hero-background is-transparent" src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg" alt="dog in hotel"/>
          <div className="hero-body">
            <Container>
              <h2 className="subtitle">
                <div className="thick">
                  Here you can search for a place to keep your pup!
                </div>
              </h2>
            </Container>
          </div>   
      </Hero>
      <div className="section">
        <Container>
          <Columns>
            <Columns.Column className="is-4">
              <h1><strong>Search by State</strong></h1>
                      <div className="control mb-2">
                        <div className="select is-primary">
                          <select
                            name="state"
                            onChange={this.handleChangeByState}
                            value={this.state.stateInput}
                          >
                          <option></option>
                          <option>CA</option>
                          <option>IL</option>
                          <option>NY</option>
                          <option>TN</option>
                          <option>TX</option>
                          <option>WA</option>
                          </select>
                        </div>
                      <div className="control">
                          <button className="button is-info" 
                          onClick={this.handleSearchByState}>
                            Search
                          </button>
                        </div>
                    </div>
                  </Columns.Column>  

      <Columns.Column className="is-6">                              
        <h1><strong>Does your dog require grooming services?</strong></h1>
                <br/>
                    <div className="control">
                      <label className="radio">
                        <input type="radio" name="answer" value="groom" checked={this.state.hasGrooming === "groom"} onChange={this.handleGroomingChange}/>
                        Yes
                      </label>
                      <label className="radio">
                        <input type="radio" name="answer" value="nogroom" checked={this.state.hasGrooming === "nogroom"} onChange={this.handleGroomingChange}/>
                        No
                      </label>
                    </div> 
        </Columns.Column>
          <Columns.Column>
            <h1><strong>Search by City</strong></h1>
              <div className="control mb-2">
                <div className="select is-primary">
                  <select
                    name="city"
                    onChange={this.handleChangeByCity}
                    value={this.state.cityInput}
                    
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
              <div class="control">
                  <button className="button is-info"
                  onClick={this.handleSearchByCity}>
                    Search
                  </button>
                </div>
            </div>
                    </Columns.Column>
                  </Columns>
                </Container> 
              </div>   
              
        <div className="section">
          <Container>
            <Columns>
            <Columns.Column className="is-three-fifths is-offset-one-fifth">
          {this.state.businesses.map((biz, index) => {
            const price = biz.boardingServices[0].service1[0].price;
    
            return (
              <SearchContainer
                cityFilter={this.cityFilter}
                id={biz._id}
                key={index}
                name={biz.name}
                address={biz.address}
                city={biz.city}
                state={biz.state}
                zip={biz.zip}
                phone={biz.phone}
                price={price}
              />
            )
          })}
          </Columns.Column>
          </Columns>
          </Container>
          </div>
        </div>
        );
      }
    }


export default Search;
