import React from 'react';
import './styles/HeroHeadline.css';
import Dot from '../images/DotOrnament.png';
import Ellipse from '../images/Ellipse85.png';
import Img8 from '../images/image8.png';

export default function HeroHeadline() {
  return (
    <div className='container'>
      <div>
      <div>
      <img className='ellipse' src={Ellipse} alt='ellipse'></img>
      <img className='img8' src={Img8} alt='img8'></img>
      <div className='rectangle23'  alt='rectangle'></div>
     
    </div>
    </div>
      <div className='content'>
      <div className='heading'>
      <h1>A Digital Product Agency</h1>
      <div className='body'>
      <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
      </div>
      <div className=''><img className='DotOrnament' src={Dot} alt='Dot Ornament'></img></div>
      

      <button className='btn'>Contact Now</button>
      </div>
      
      </div>
      
    </div>
  )
}
