import React from 'react';
import './style/MainPart.css'

export default function MainPart({ans}) {
  return (
  <div className='main-cont '>
      <div className='text-part-cont'>
        <div className='first-child'> {ans}</div>
        <div className='second-child'></div>
      </div>
  </div>
    );
}
