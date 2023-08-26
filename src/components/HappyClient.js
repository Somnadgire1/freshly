import React from 'react';
import './styles/HappyClient.css';
import Dots from '../images/DotA.png';
import Person from '../images/dany.png';

export default function HappyClient() {
  return (
    <div className='container happyClient'>
      <div className='graph'>
        <div className='dia'>
        <div className='dots'><img src={Dots} alt='dots'></img></div>
        <div className='ellipse93'></div>
        <div className='ellipse94'></div>
        </div>
        <div className='heading clientHead'>
          <h1>What our happy client say</h1>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className='person'><img src={Person} alt='dany'></img></div>
        </div>
        
    </div>
  )
}
