import React, {Component} from 'react';

//components

import Team from '../team/team';

//css 

import './about.css'

//includes

class About extends Component{
  render() {
    return (
        <div className='about'>

          <div className='about_content'>

          <div className='about_img'>

            <img src="about_mob.svg" alt="about"/>

          </div>

          <div className ="about_info">
          <div className='about-title'>

            <h1>About Us</h1>

           </div>

           <div className='about-text'> 

            <p>Our team consists of 7 members with varied backgrounds and nationalities. With diverse skills in graphic design, visual art, product sales and web development, our team is more than up to the task of creating innovative projects, as demonstrated by previous collaborations. We are always striving to solve problems in our community, through elegant development and design decisions.</p>

            </div>
            </div>

            </div>

           

            <Team />
            
        </div>
        

    );
  }
}

export default About;