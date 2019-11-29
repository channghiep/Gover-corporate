import React, {Component} from 'react';

//components

//css

import './download.css';
import UncontrolledLottie from '../uncontrolledlottie/uncontrolledlottie.js';

//includes

class Download extends Component {
  render() {
    return (
        <div className="download">
            
            {/* <div className='download-img'>
              <img src="download_mob.svg" alt="download_mob"/>
            </div> */}

            <div className="download-img">
              <div className="lottie">
              <UncontrolledLottie />
              </div>
              <img></img>
            </div>

            <div className='download-info'>  
            <div className='download-text'>

              <h1>easy inspections</h1>

              <p>The inspection app that will make your work easier, faster, and better.</p>
            </div>

            <div className='download-button'>
              
              <img src="google_play.svg" alt="googleplay"/>
              <img src="app_store.svg" alt="appstore"/>
            </div>

            </div>
            
        </div>
    );
  }
}

export default Download;