import React from 'react';
import './styles/NewsLatter.css';
import Group73 from '../images/DotA.png';
export default function NewsLetter() {
  return (
    <div className='container'>
      <div className='newsletter'>
      <div className='rectangle30'>
      <div className='container subscribe'>
        <h1>Subscribe Newsletter</h1>
        <p>I will update good news and promotion service not spam</p>
    </div>
    <div className='rectangle32A'></div>
    </div>
    <div className='container'>
    <div className='rectangle31'>
    <div className='rectangle32'>
        <input placeholder='Enter your email address..'></input>
        <button className='btn'>Contact Now</button>
    </div>
    </div>
    </div>
      </div>
      <div className='group73'><img src={Group73} alt='dots'></img></div>
    </div>
  )
}
