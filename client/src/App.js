import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './components/pages/Search';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import Login from './components/Login';
import Register from './components/Register';


function App() {

  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <Route path="/contact" component={Contact} />
        <Route path="/reserve/:id" component={Reservation} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
