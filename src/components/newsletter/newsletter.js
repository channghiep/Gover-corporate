import React, {Component} from 'react';

//components

//cs

import './newsletter.css'

//includes

class Newsletter extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An email was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <div className="newsletter">

      <h2>Sign up for our newsletter</h2>

      <form className="news_form" onSubmit={this.handleSubmit}>
        <label className="news_label">
          <input placeholder="enter your email here" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button className='news_button' value="submit">
          <img src="submit_btn.svg" alt=""/>
          </button>
      </form>

      </div>
    );
  } 
}

//   render() {
//     return (
//         <div className='newsletter'>
//             <h1>Sign up for our newsletter</h1>
//             <form action=""></form>
//         </div>
//     );
//   }
// }

export default Newsletter;