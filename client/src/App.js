import React, {useContext} from 'react';
import { AuthContext } from "./Context/AuthContext"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Reservation from './components/Reservation';


function App() {
  // const { user, serUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // console.log(user);
  // console.log(isAuthenticated);

  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <Route path="/contact" component={Contact} />
        <Route path="/reserve" component={Reservation} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
