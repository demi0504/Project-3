import React, { Component } from "react";
import OneAPI from "../utils/OneAPI";


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
        <img alt={this.state.result} src={this.state.result} />
      </div>
    );
  }
}


export default OneImage;