import React from 'react';
import "./mobileNav.css"
export default function MobileNab(props) {

    const lis = document.querySelectorAll(".mobileNav ul li")
    lis.forEach((li)=>{
        li.addEventListener("click",()=>{
            props.close()
        })
    })
  return <div className='mobileNav' style={props.isClicked ? {transform : "translateX(0)"} : {transform : "translateX(100%)"}}>

        <div className='humb' onClick={()=>{
            props.close()
        }}>
            <span className='span1'></span>
            <span className='span2'></span>
        </div>

        <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact' className='button'>Contact Us</a></li>
                </ul>

  </div>;
}
