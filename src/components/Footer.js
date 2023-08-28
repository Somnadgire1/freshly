import React from 'react';
import './styles/Footer.css';

export default function Footer() {
  return (
    
      <div className='container'>
        <div className='footer'>
        <div className='line7'></div>
      <div className='card-body'>
      <div class="container">
  <div class="row align-items-start">
    <div class="col aPlusStudio">
      <h1>A+ Studio</h1>
      <p>Leading digital agency with solid design<br></br> and development expertise. We build<br></br> readymade websites, mobile applications,<br></br> and elaborate online business services.</p>
      <div className='socialMedia'>
        <a href='www.facebook.com' className='facebook'><i class="fa-brands fa-facebook"></i></a>
        <a href='www.twitter.com' className='twitter'><i class="fa-brands fa-twitter"></i></a>
        <a href='www.linkedin.com' className='linkedin'><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
    <div class="col whatWeDo">
    <h1>What We Do</h1>
    <ul>
        <li>Web Design</li>
        <li>App Design</li>
        <li>Social Media Manage</li>
        <li>Market Analysis Project</li>
    </ul>
    </div>
    <div class="col companies">
    <h1>Company</h1>
    <ul>
        <li>About Us</li>
        <li>Career</li>
        <li>Become Investor</li>
    </ul>
    </div>
    <div class="col super">
    <h1>Support</h1>
    <ul>
        <li>FAQ</li>
        <li>Policy</li>
        <li>Business</li>
    </ul>
    </div>
    <div class="col contacting">
    <h1>Contact</h1>
    <ul>
        <li>WhatsApp</li>
        <li>Support 24</li>
    </ul>
    </div>
  </div>
      </div>
      <div className='line7'></div>
    <div className='copywriter'>
        <p>Copyright © 2023 Som Nadgire</p>
    </div>
    </div>
    
      </div>
    </div>
  )
}
