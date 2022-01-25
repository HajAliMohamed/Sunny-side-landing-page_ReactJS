import React from 'react';
import "./card.css"
export default function Card(props) {
  return <div className='card'>
      <img src={props.img} alt='img'/>
      <p>{props.desc}</p>
      <div>
      <h4> {props.name} </h4>
      <small>{props.profs}</small>
      </div>

  </div>;
}
