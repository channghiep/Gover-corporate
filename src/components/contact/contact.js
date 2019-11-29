import React, {Component} from 'react';

//components

import Newsletter from '../newsletter/newsletter'

//css

import './contact.css'

//includes



class Contact extends Component{

  
  render() {
    return (
        <div className='contact'>

          <div className='contact_content'>

            <img className='contact_img' src="contact.png" alt="contact"/>

            <div className='contact_title'>

            <h1>Contact Us</h1>

            </div>

            <div className="form_container">

            <div className='form'>

              <div className="name_container">

              <div className='name'>
                <label className="label_name">name</label>
                <input className="input_name" type="text" placeholder="Enter your name..."
                minLength="2" required/>
              </div>

              <div className='email'>
                <label className="label_email">email</label>
                <input className="input_email" type="email" placeholder="Enter your email..." required/>
              </div>
              
              </div>

              <div className='subject'>
                <label className="label_subject">subject</label>
                <input className="input_subject" type="text" placeholder="Enter the subject..." required/>
              </div>

              <div className='message'>
                <label className="label_message">message</label>
                <textarea className="text_message" type="text" placeholder="Enter your message..."
                tabindex="5"/>
              </div>

              <div className="button">
                <button className="send_button">submit</button>
              </div>

              </div>

            </div>

            </div>

            <Newsletter />

        </div>
    );
  }
}

export default Contact;