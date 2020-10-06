import React, { Component } from "react";
import OneAPI from "../utils/OneAPI";
import "./style/imgstyle.css";

class OneImage extends Component {
  state = {
    result: {}
  };

  componentDidMount() {
    this.searchDog();
  }

  searchDog = query => {
    OneAPI.findOneDog(query)
      .then(res =>
        {this.setState({ result: res.data.message })})
      .catch(err => console.log(err));
  };

  

  render() {
    return (
      <div>
        <ul>
          <li>
            <img alt={this.state.result} src={this.state.result} className="style"/>
          </li>
        </ul>
      </div>
    );
  }
}


export default OneImage;