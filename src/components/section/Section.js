import React from 'react';
import "./section.css"
import Tab from './tab/Tab';
import data from '../../data';
import Tab2 from './tab2/Tab2';
export default function Section() {

  let imgOrder = false;
if(window.innerWidth< 769 ){
    imgOrder = true;
}


  return <div className='section'>
      <Tab title={data[0].title} pargh={data[0].pargh} more={data[0].more} img={data[0].img} order={false} imageOrder={false} />  

      <Tab title={data[1].title} pargh={data[1].pargh} more={data[1].more} img={data[1].img} order={true} imageOrder={imgOrder}/>
      
      <Tab2/>

  </div>;
}
