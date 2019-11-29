import React, {Component} from 'react';

//components


//css

import  './features.css'

//includes

class Features extends Component {
  render() {
    return (
        <div className="features">
          
          <div className='feature-title'>
            <h1>App Features</h1>
          </div>

          <div className='feature-content'>

            <div className='feature_1'>
              
              <img src="template_mob.svg" alt="template"/>

              <div className="template">

              <h2>Custom and easy to use template</h2>

              <p>Users can select on the mobile
                app which type of inspection they
                are doing. They can easily click
                through the process.</p>

              </div> 

            </div>

            <div className='feature_2'>
              
              <img src="speech_mob.svg" alt="speech"/>

              <div className="speech">

              <h2>Notes using speech-to-text</h2>

              <p>Voice memos will be automatically
              transformed into text. Users can
              record the audio for their notes and
              the app will convert it to text..</p>

              </div>

            </div>

            <div className='feature_3'>
              
              <img src="photo_mob.svg" alt="camera"/>

              <div className="camera">

              <h2>Capture inspection photos with notes</h2>

              <p>Automatically syncing the photos
                users take to the item they are
                inspecting. Creating an archive.</p>

              </div>

            </div>

            <div className='feature_4'>
              
              <img src="report_mob.svg" alt="report"/>

              <div className="report">
              <h2>Generate and send reports with signatures</h2>

              <p>The app will generate digital reports
                that can be read and signed without
                the necessity of printing. </p>

              </div>
  
            </div>

          </div>
        </div>
    );
  }
}

export default Features;