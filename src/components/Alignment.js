import React from 'react';
import './styles/Alignment.css';
import AlignmentScale from '../images/AlignmentScale.png'

export default function Alignment() {
  return (
    <div className='container-fluid'>
      <div className='alignment'>
            <img src={AlignmentScale} alt='alignment'></img>
      </div>
    </div>
  )
}
