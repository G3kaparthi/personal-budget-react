import React from 'react'; 
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
    <Menu/>
    <Hero/>
    <div className="mainContainer">
      <Switch>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
      </Switch>
    </div>
    <HomePage/>
    <Footer/>
    </Router>
  );
}

export default App;
