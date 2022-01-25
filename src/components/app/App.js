import React, {useState} from 'react'
import "./app.css"
import Header from '../header/Header'
import Section from '../section/Section'
import Article from '../article/Article'
import Imgs from '../imgs/Imgs'
import Footer from '../section/footer/Footer'
import MobileNab from '../mobileNav/MobileNab'
export default function App() {

  const[clicked, setClick] = useState(false)
  function handleClick() {
      setClick(true)
  }

  function handleClose(){
    setClick(false)
  }

  return (
    <div className='main'>
    <MobileNab isClicked={clicked} close={handleClose}/>
      <Header click={handleClick}/>
      <Section/>
      <Article/>
      <Imgs/>
      <Footer/>
    </div>
  )
}
