import React, {Component} from 'react';
import Slider from "react-slick";

//components


//css

import './testimonials.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//includes

class Testimonials extends Component {
  render() {
    var settings = {
      accessibility: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
    };
    return (
      <div className='testimonials'>

        <div className='testimonials-title'>
      <h1>Testimonials</h1>

      </div>

      <Slider {...settings}>

        <div className='test'>

          <div className='test-profile'>

          <img src="leticia_mob.svg" alt="leticia"/>

          <div className='test-title'>
          <h2>Leticia Santos,</h2>
          <h3>stay-at-home mom</h3>
          </div>

          </div>

          <p>As a landlord, I want to provide the best possible home experience to my renters.
              Besides devoting my daytime as a full-time house-mom and taking care of my kids
              also does managing job as a landlord. However, property management can be very
              overwhelming. Using this app save me tons of time and allow me to do things that i love.</p>
        </div>

                <div className='test'>

          <div className='test-profile'>

          <img src="mike_mob.svg" alt="celeste"/>

          <div className='test-title'>
          <h2>Myke Yeo,</h2>
          <h3>real estate agent</h3>
          </div>

          </div>

          <p>A good real estate agent always keep up with local and regional
              market activities, therefore I need an efficient way to organize and update my real estate
              documents, agreements and reports.</p>
        </div>

        <div className='test'>

          <div className='test-profile'>

          <img src="monicqua_mob.svg" alt="leticia"/>

          <div className='test-title'>
          <h2>Monicqua Spencer,</h2>
          <h3>i have bronchitis!!</h3>
          </div>

          </div>
          
          <p>Well I woke up to get me a cold pop and then I thought somebody was barbequing. 
            I said oh lord Jesus it’s a fire. Then I ran out, 
            I didn’t grab no shoes or nothin’ Jesus, I ran for my life. 
              And then the smoke got me, I got bronchitis ain’t nobody got time for that.</p>
        </div>

        
      </Slider>

      </div>
    );
  }
}

export default Testimonials;