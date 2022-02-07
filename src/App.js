import React from 'react'
import About from './Screens/About/About'
import Adress from './Screens/Adress/Adress'
import Contact from './Screens/Contact/Contact'
import Footer from './Screens/Footer/Footer'
import Navbar from './Screens/Navbar/Navbar'
import Slider from './Screens/Slider/Slider'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Slider/>
    <About/>
    <Contact/> 
    <Adress/> 
    <Footer/>
    </>
  )
}

export default App

