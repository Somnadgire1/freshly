import React from 'react';
import './styles/TopMenu.css';
import HeroHeadline from './HeroHeadline';
import OurClient from './OurClient';
import Services from './Services';
import GreateSince from './GreatSince';
import HappyClient from './HappyClient';

export default function TopMenu() {
  return (
    <div className='topmenu'>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">A+ Studio</a>
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav">
        <li class="navbar-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="#">What We Do</a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="#">Project</a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="navbar-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<HeroHeadline/>
<OurClient/>
<Services/>
<GreateSince/>
<HappyClient/>
    </div>
  )
}
