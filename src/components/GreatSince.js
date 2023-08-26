import React from 'react';
import './styles/GreatSince.css';
import Unsplash from '../images/unsplash.png';
import PlayBtn from '../images/playBtn.png';

export default function GreateSince() {
  return (
    <div className='container greatSince'>
      <div className='geo'>
        <div className='rect'>
        <div className='rectangle26'></div>
        <div className='ellipse86'></div>
        </div>
        </div>
        <div className='unsplash'>
        <div className='image'>
          <img src={Unsplash} alt='unsplash'></img>
        </div>
        <div className='playBtn'>
        <img src={PlayBtn} alt='PlayBtn'></img>
        </div>
        </div>
        <div className='card-body'>
        <div className='containt'>
          <h1>Great Digital Product Agency since 2016 </h1>
          <p>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
        </div>
        </div>
        
    </div>
  )
}
