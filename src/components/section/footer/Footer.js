import React from 'react';
import "./footer.css"
export default function Footer() {
  return <div className='footer' id='contact'>
      <img src="/images/logo.svg" alt='img'/>

      <ul>
          <li><a href="#/">About</a></li>
          <li><a href="#/">Services</a></li>
          <li><a href="#/">Projects</a></li>
      </ul>
      
      <ul>
          <li><a href='#/'> <img src="/images/icon-facebook.svg" alt='img'/> </a></li>
          <li><a href='#/'> <img src="/images/icon-instagram.svg" alt='img'/> </a></li>
          <li><a href='#/'> <img src="/images/icon-pinterest.svg" alt='img'/> </a></li>
          <li><a href='#/'> <img src="/images/icon-twitter.svg" alt='img'/> </a></li>
      </ul>

      <small><a href='https://www.frontendmentor.io/home'> Frontend mentor challenge </a>, Created by <a href='https://www.linkedin.com/in/hajalimohamed/'> Haj Ali Mohamed</a></small>
  </div>;
}
