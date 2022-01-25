import React from 'react';
import "./footer.css"
import logo from "./logo.svg"
import fb from "./icon-facebook.svg"
import inst from "./icon-instagram.svg"
import pint from "./icon-pinterest.svg"
import twit from "./icon-twitter.svg"
export default function Footer() {
  return <div className='footer' id='contact'>
      <img src={logo} alt='img'/>

      <ul>
          <li><a href="#/">About</a></li>
          <li><a href="#/">Services</a></li>
          <li><a href="#/">Projects</a></li>
      </ul>
      
      <ul>
          <li><a href='#/'> <img src={fb} alt='img'/> </a></li>
          <li><a href='#/'> <img src={inst} alt='img'/> </a></li>
          <li><a href='#/'> <img src={pint} alt='img'/> </a></li>
          <li><a href='#/'> <img src={twit} alt='img'/> </a></li>
      </ul>

      <small><a href='https://www.frontendmentor.io/home'> Frontend mentor challenge </a>, Created by <a href='https://www.linkedin.com/in/hajalimohamed/'> Haj Ali Mohamed</a></small>
  </div>;
}
