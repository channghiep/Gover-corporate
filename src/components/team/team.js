import React, {Component} from 'react';

//components

//css

import './team.css'

//includes

class Team extends Component{
  render() {
    return (
        <div className='team'>

            <div className='team_title'>

            <h1>Meet the members</h1>

            </div>

            <div className='team_members'>

              <div className='member'>

                <div className='content'>

                <img src="andre.svg" alt="andre"/>

                <h2>Andre Falco</h2>

                <h3>Project Manager</h3>

                <h4 className="andre_text">Background in Communication
                  and Graphic Design. Knowledge
                  in printing process. Responsible
                  for the communication between
                  customer and Printing Shop.
                  Worked as a Freelancer and for a
                  corporation as a graphic designer,
                  restoring and retouching images.</h4>

                  <a class="hire" href="https://www.linkedin.com/in/andrefalco/" target="_blank">linkedin</a>

                  </div>

              </div>

              <div className='member'>

              <div className='content'>

                <img src="denis.svg" alt=""/>

                <h2>Denis Calixto</h2>

                <h3>Lead Developer</h3>
                
                <h4 className="denis_text">Background in Software Archi
                  tecture, Full-Stack Development,
                  and System Analysis. Responsible
                  for maintaining code production
                  standards, applying quality assu
                  rance processes and defining
                  deployment and performance
                  enhancement strategies and tests
                  as well as for building Angular web
                  pages, models, views, controllers
                  and APIs..</h4>

                  <a class="hire" href="https://www.linkedin.com/in/deniscalixto/" target="_blank">linkedin</a>

                  </div>

                </div>

              <div className='member'>

              <div className='content'>
                

                <img src="marinela.svg" alt=""/>

                <h2>Marinela Poso</h2>

                <h3>Lead UX Designer</h3>

                <h4 className="marinela_text">Background in UX/UI Design
                  and Fine Arts Major in Advertising.
                  Oversee the UX and UI design
                  team. Involved in all aspect in the
                  design process, from user
                  research to design handoffs and
                  conformance review.</h4>

                  <a class="hire" href="https://www.linkedin.com/in/marinela-poso/" target="_blank">linkedin</a>
 
                  </div>

              </div>

              <div className='member'>

              <div className='content'>

                <img src="june.svg" alt=""/>

                <h2>June Jung</h2>

                <h3>Front-end Developer</h3>

                <h4 className="text_june">Background in Fashion Design
                  and Mass garment production
                  Management. Responsible for
                  Front-end development using
                  Angular, for UX and for some
                  general UI design process.</h4>

                  <a class="hire" href="https://www.linkedin.com/in/junejungjunejung/" target="_blank">linkedin</a>

                  </div>

              </div>

              <div className='member'>

              <div className='content'>

                <img src="brian.svg" alt=""/>

                <h2>Brian Nguyen</h2>

                <h3>Android Developer</h3>

                <h4 className="text_brian">Background in Banking and
                  Financial Investment. Responsible
                  for compiling instruction docu
                  -ment and seeking for a new
                  business partner while keeping
                  contact with a current partner in
                  the assigned market.</h4>

                  <a class="hire" href="https://www.linkedin.com/in/channghiep/" target="_blank">linkedin</a>

                  </div>

              </div>
              
              <div className='member'>

              <div className='content'>

                <img src="thanh.svg" alt=""/>

                <h2>Thanh Nguyen</h2>

                <h3>UX/UI Designer</h3>

                <h4 className="thanh_text">Background in Product Design
                  with a specialization in 3D
                  Modeling.
                  Collaborated and delivered
                  graphics and branding projects
                  as a partner. The projects involve
                  branding identity deliverables,
                  digital marketing campaign
                  execution, and responsive
                  corporate website design and
                  development solutions.</h4>

                  <a class="hire" href="https://www.linkedin.com/in/thanhmng/" target="_blank">linkedin</a>

                  </div>

              </div>

              <div className='member'>

              <div className='content'>

                <img src="marcelo.svg" alt=""/>

                <h2>Marcelo Caram</h2>

                <h3>Quality Assurance</h3>

                <h4 className="text_marcelo">add more...</h4>

                <a class="hire" href="https://www.linkedin.com/in/marcelocaram/" target="_blank">linkedin</a>

                </div>
              </div>



            </div>
        </div>
    );
  }
}

export default Team;