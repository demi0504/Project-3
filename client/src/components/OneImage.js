import React, { Component } from "react";
import OneApi from "../utils/OneAPI";

class OneImage extends Component {
  state = {
    result: {}
  };

  componentDidMount() {
    this.searchDog();
  }

  searchDog = query => {
    OneApi.findOneDog(query)
      .then(res =>
        {console.log(res.data)
        this.setState({ result: res.data.message })})
      .catch(err => console.log(err));
  };

  

  render() {
    return (
      <div>
        This is Working!
        <ul>
          <li>
            <img alt={this.state.result} src={this.state.result}/>
          </li>
        </ul>
      </div>
    );
  }
}


export default OneImage;