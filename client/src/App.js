import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import About from './components/About';
import ContactUs from './components/ContactUs';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <Navbar/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/contactus" component={ContactUs}/>
          <Footer/>
        </div>
       </Router>
    );
  }
}

export default App;
