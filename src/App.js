import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//components

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import Pricing from './components/pricing/pricing';
import About from './components/about/about';
import Contact from './components/contact/contact';


//includes
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Navbar />

          <Route exact path='/' component={Landing} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />


        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
