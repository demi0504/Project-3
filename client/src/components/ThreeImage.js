import React, { Component } from "react";
import ThreeApi from "../utils/ThreeAPI";
import "./style/imgstyle.css";

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
        {this.setState({ result: res.data.message })})
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <img alt={this.state.result[0]} src={this.state.result[0]} className="image-dog"/>
          </li>
          <li>
            <img alt={this.state.result[1]} src={this.state.result[1]} className="image-dog"/>
          </li>
          <li>
            <img alt={this.state.result[2]} src={this.state.result[2]} className="image-dog"/>
          </li>
        </ul>
      </div>
    );
  }
}


export default ThreeImage;