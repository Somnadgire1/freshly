import React from 'react';
import './styles/HappyClient.css';
import Dots from '../images/DotA.png';
import Person from '../images/dany.png';
import Group71 from '../images/Group71.png';

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
        <div className='container'>
        <div className='group72'>
          <h1>Matthew Paul</h1>
          <p>Perfect, very good job! Thank you for the amazing<br></br> design and work. Really impressed with the high quality<br></br> and quick turnaround time. Highly recommend.</p>
          <div className='ellipseSmall'>
            <span className='ellipse88'></span>
            <span className='ellipse89'></span>
            <span className='ellipse90'></span>
            <span className='ellipse91'></span>
            <span className='ellipse92'></span>
          </div>
          </div>
          <div className='container'>
          <div className='group71'>
            <img src={Group71} alt='groups'></img>
          </div>
          </div>
        </div>
        
    </div>
  )
}
