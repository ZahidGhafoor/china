import React from 'react'
import About from './Screens/About/About'
import Adress from './Screens/Adress/Adress'
import Contact from './Screens/Contact/Contact'
import Footer from './Screens/Footer/Footer'
import Navbar from './Screens/Navbar/Navbar'
import Product from './Screens/Products/Product'
import Slider from './Screens/Slider/Slider'

import "./App.css"
import Mobile from './Screens/Navbar/Mobile'



const App = () => {
  return (
    <>
    <Navbar/>
  
     <Slider/>
    <About/>
    <Contact/> 
    <Adress/>
  {/* <Product/> */}
  <Footer/>
    </>
  )
}

export default App

