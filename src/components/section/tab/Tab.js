import React from 'react';
import "./tab.css"




export default function Tab(props) {
  return <div className='tab' id='about'>
  <div style={props.order ? {order : 2} : {}}> 
      <h1>{props.title}</h1>
      <p>{props.pargh}</p>
      <h4>{props.more}</h4>
  </div>
  <img style={props.imageOrder ? {order : 2} : {}} src={props.img} alt='img'/>
</div> ;
}
