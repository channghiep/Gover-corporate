import React, {Component} from 'react';

//components

//css

import './footer.css'

//includes

class Footer extends Component {
  render() {
    return (
        <div className='footer'>

        <footer className="footer_content">

            <div className="footer_container">

            <img className="logo_footer" src="gover_footer.svg" alt="logof"/>

            <h3>
            Gover © 2019 All Rights Reserved.
            </h3>

            </div>

            <div className='footer_social'>
              <a className='instagram' href="">
                <img src="instagram_mob.svg" alt="instagram"/>
              </a>
              <a className='facebook' href="">
                <img src="facebook_mob.svg" alt="facebook"/>
              </a>
              <a className='twitter' href="">
                <img src="twitter_mob.svg" alt="twitter"/>
              </a>
            </div>

            
            

        </footer>

        </div>

    );
  }
}

export default Footer;