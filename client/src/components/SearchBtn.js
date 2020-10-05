import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
	} from "react-router-dom";
import Search from "./pages/Search";
import { Button } from "react-bulma-components";

function SearchBtn (){
  return(
    <Router>
      <Link to="/search"><Button className="is-dark is-medium">Book A Stay</Button></Link>        
      <Switch>
      	<Route path="/search">
        <Search />
      	</Route>
      </Switch>
    </Router>
    )
}

export default SearchBtn;