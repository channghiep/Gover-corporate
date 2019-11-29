import React, {Component} from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import {
  Link
} from 'react-router-dom';
//css
import './navbar.css';
//components
class Navbar extends Component {
  handleButtonClick = () => {
    console.log("working");
    window.location.href="http://gover-app.com"
  }
  render() {
    return (
      <div className="topNav">
        <div className="logoDiv">
          <Link href="/" className="logoLink"><img href="/" className="logo" alt="Gover_Logo" src="gover_logo.svg"/></Link>
        </div>
      
      <ResponsiveMenu
        menuOpenButton={<FaBars className="menu-open"/>}
        menuCloseButton={<FaTimes className="menu-close" />}
        changeMenuOn="910px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <nav>
            <Link href="/pricing" className="nav-pricing">pricing</Link>
            <Link href="/about" className="nav-about">about us</Link>
            <Link href="/contact" className="nav-contact">contact us</Link>
            <button className="login"  onClick={this.handleButtonClick}>login</button>
          </nav> 
        }
      />
      </div>
    );
  }
}
export default Navbar;