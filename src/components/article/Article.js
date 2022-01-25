import React from 'react';
import clients from './clients';
import Card from './card/Card';
import "./article.css"
export default function Article() {
  return<div className='article' id='projects'>
        <h1>Client testimonials</h1>

        <div className='clients'>
            {clients.map((c)=>{
                return <Card img={c.img} desc={c.desc} name={c.name} profs={c.profs}/>
            })}
        </div>

  </div>;
}
