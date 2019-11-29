import React, {Component} from 'react';

//components


//css

import './work.css'

//includes

class Work extends Component {
  render() {
    return (
        <div className="work">

          <div className="work-title">
            <h1>How Gover works</h1>
          </div>

          <div className='work-content'>

            <div className='work_1'>

              <img src="property_mob.svg" alt="property"/>

              <h2>Add a new property</h2>

              <p>Users select the category of the inspection which is currently active on their property. The process is digitally filed, quickly and easily.</p>

            </div>

            <div className='work_flow'>

              <img src="work_flow.svg" alt="flow"/>

            </div>

            <div className='work_2'>

              <img src="inspection_mob.svg" alt="inspection"/>

              <h2>Create an inspection</h2>

              <p>Gover creates an archive of photos that supports the inspection process, and automatically syncs to the user's smartphone photo gallery.</p>

            </div>

            <div className='work_flow'>

              <img src="work_flow.svg" alt="flow"/>

            </div>

            <div className='work_3'>

              <img src="generate_mob.svg" alt="generate"/>

              <h2>Generate a report</h2>

              <p>The app generates a digital report when the inspection is complete. Without the need for printing, the document can be reviewed and digitally signed. </p>

            </div>

            


          </div>


        </div>
    );
  }
}

export default Work;