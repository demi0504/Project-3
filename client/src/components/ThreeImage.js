import React, { Component } from "react";
import ThreeApi from "../utils/ThreeAPI";

class ThreeImage extends Component {
  state = {
    result: {}
  };

  componentDidMount() {
    this.searchDog();
  }

  searchDog = query => {
    ThreeApi.findThreeDog(query)
      .then(res =>
        {console.log(res.data)
        this.setState({ result: res.data.message })})
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <img alt={this.state.result[0]} src={this.state.result[0]}/>
          </li>
          <li>
            <img alt={this.state.result[1]} src={this.state.result[1]}/>
          </li>
          <li>
            <img alt={this.state.result[2]} src={this.state.result[2]}/>
          </li>
        </ul>
      </div>
    );
  }
}


export default ThreeImage;