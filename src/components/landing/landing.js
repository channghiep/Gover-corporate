import React, {Component} from 'react';

//components

import Download from '../download/download';
import Work from '../work/work';
import Features from '../features/features';
import Testimonials from '../testimonials/testimonials';

//css

// import './landing.css'

//includes

class Landing extends Component {
    render() {
      return (
        <div className="Landing">

        <Download />
        <Features />
        <Work />
        <Testimonials />
        

        </div>
      );
    }
  }
  
  export default Landing;
  