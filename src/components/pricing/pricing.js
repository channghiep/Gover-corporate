import React, {Component} from 'react';

//components

import Newsletter from '../newsletter/newsletter'

//cs

import './pricing.css'

//includes

class Pricing extends Component{
  render() {
    return (
        <div className='pricing'>
            <h1 className="page-title">Pricing</h1>

            <div className="pricing-bundle">
              <div className="pricing-personal">
                <img src="pricing_personal.svg" alt="pricing-personal"/>
                <h2>individual pack</h2>
                <div className="amount">
                  <h3>FREE</h3>
                </div>
                <div className="corp-amount">
                  <p className="">30 days trial </p>
                </div>
                <div className="included">
                  <p>1 user limit</p>
                  <p>1 device at a time</p>
                  <p>$0.69 cad per inspection
                      after free trial period</p>
                </div>
                <button className="pricing-button">Get Started</button>
              </div>

              <div className="pricing-business">
                <img src="pricing_business.svg" alt="pricing-business"/>
                <h2>premium pack</h2>
                <div className="amount">
                  <h3>$16.9 cad</h3>
                </div>
                <div className="corp-amount">
                  <p className="">per month </p>
                </div>
                <div className="included">
                  <p>1 user limit</p>
                  <p>10 devices at a time</p>
                  <p>save $30 cad with annual billing</p>
                </div>
                <button className="pricing-button">Get Started</button>
              </div>

              <div className="pricing-corporate">
                <img src="pricing_corporate.svg" alt="pricing-corporate"/>
                <h2>business pack</h2>
                <div className="amount">
                  <h3>$69.9 cad</h3>
                </div>
                <div className="corp-amount">
                  <p className="">per month </p>
                </div>
                <div className="included">
                  <p>unlimited users</p>
                  <p>unlimited devices</p>
                  <p>save $100 cad with annual billing</p>
                </div>
                <button className="pricing-button">Get Started</button>
              </div>
            </div>

            <Newsletter />
        </div>
    );
  }
}

export default Pricing;