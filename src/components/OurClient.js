import React from 'react';
import '../components/styles/OurClient.css';
import GoogleLogo from '../images/GoogleLogo.png';
import AirbnbLogo from '../images/AirbnbLogo.png';
import UberEatsLogo from '../images/UberEatsLogo.png';
import AmazonLogo from '../images/AmazonLogo.png';

export default function OurClient() {
  return (
    <div className='container-fluid ourClient'>
      <div className='heading'>
            <h1>Our Client</h1>
            <p>Several selected clients, who already <br></br>believe in our service.</p>
      </div>
      <div className='logos'>
        <div className='googleLogo'><img src={GoogleLogo} alt='google'></img></div>
        <div className='airbnbLogo'><img src={AirbnbLogo} alt='google'></img></div>
        <div className='uberEatsLogo'><img src={UberEatsLogo} alt='google'></img></div>
        <div className='amazonLogo'><img src={AmazonLogo} alt='google'></img></div>
        
      </div>
    </div>
  )
}
