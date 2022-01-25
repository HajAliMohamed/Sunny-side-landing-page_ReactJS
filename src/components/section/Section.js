import React from 'react';
import "./section.css"
import Tab from './tab/Tab';
import data from '../../data';
import Tab2 from './tab2/Tab2';
import img1 from "./image-transform.jpg"
import img2 from "./image-stand-out.jpg"
export default function Section() {

  let imgOrder = false;
if(window.innerWidth< 769 ){
    imgOrder = true;
}


  return <div className='section'>
      <Tab title={data[0].title} pargh={data[0].pargh} more={data[0].more} img={img1} order={false} imageOrder={false} />  

      <Tab title={data[1].title} pargh={data[1].pargh} more={data[1].more} img={img2} order={true} imageOrder={imgOrder}/>
      
      <Tab2/>

  </div>;
}
