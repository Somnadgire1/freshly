import React from 'react';
import './styles/Services.css';
import DotOrnament from '../images/DotOrnament.png';
import Wallet from '../images/wallet.png';
import Code from '../images/code.png';
import Chart from '../images/chart.png';
import SearchBox from '../images/searchBox.png';

export default function Services() {
  return (
    <div className='container service'>
      <div className='diagram'>
        <div className='rectangles'>
        <div className='DotOrnament2'><img src={DotOrnament} alt='dots'></img></div>
        <div className='ellipse87'></div>
        <div className='rectangle24'></div>
        <div className='rectangle25'></div>
        </div>
        <div className='groups'>
        <div class="card group69">
            <div class="card-body">
                <h5 class="card-title">How can we help <br></br>your Business ?</h5>
                <p class="card-text">We build readymade websites, mobile applications,<br></br> and elaborate online business services.</p>
            </div>
         </div>
        <div class="card group65">
            <div class="card-body">
            <div className='business mt-4'><img src={SearchBox} alt='SearchBox'></img></div>
                <h5 class="card-title mt-5">Business Idea Planning</h5>
                <p class="card-text mt-4">We present you a proposal and discuss niffty-gritty like</p>
            </div>
         </div>
         <div class="card group66">
            <div class="card-body">
                <div className='development mt-4'><img src={Code} alt='Code'></img></div>
            
                <h5 class="card-title mt-5">Development Website and App</h5>
                <p class="card-text mt-4">Communication protocols apart from engagement models</p>
            </div>
         </div>
         <div class="card group67">
            <div class="card-body">
            <div className='financial mt-4'><img src={Wallet} alt='wallet'></img></div>
                
                <h5 class="card-title mt-5">Financial Planning System</h5>
                <p class="card-text mt-4">Protocols apart from aengage models, pricing billing</p>
            </div>
         </div>
         <div class="card group68">
            <div class="card-body">
            <div className='market mt-4'><img src={Chart} alt='Chart'></img></div>
            
                <h5 class="card-title mt-5">Market Analysis Project</h5>
                <p class="card-text mt-4">Protocols apart from aengage models, pricing billing</p>
            </div>
         </div>
            </div>
        
        </div>
        </div>

  )
}
