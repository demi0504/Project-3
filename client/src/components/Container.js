import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Signup from "./pages/SignUp";

class Container extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Search") {
      return <Search />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Signup />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Container;
