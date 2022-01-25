import React from 'react';
import images from './images';
import "./imgs.css"
export default function Imgs() {
  return <div className='imgs'>
        {images.map((i)=>{
            return <img src={i} alt="imgs"/>
        })}
  </div>;
}
