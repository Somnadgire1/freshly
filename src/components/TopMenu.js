import React from 'react';
import './styles/TopMenu.css';
import HeroHeadline from './HeroHeadline';
import OurClient from './OurClient';
import Services from './Services';
import GreateSince from './GreatSince';
import HappyClient from './HappyClient';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

export default function TopMenu() {
  return (
    <div className='topmenu'>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand fs-3" href="/">A+ Studio</a>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a className="nav-link" href='/'>Home</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href='/'>What We Do</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">Project</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#">Contact</a>
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
<NewsLetter/>
<Footer/>
    </div>
  )
}
