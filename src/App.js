import React from 'react'
import Footer from './Screens/Footer/Footer'
import Navbar from './Screens/Navbar/Navbar'


import "./App.css"
import Mobile from './Screens/Navbar/Mobile'
import Allcomp from './Screens/allcomp/Allcomp'
import { Route, Switch } from 'react-router-dom'
import Product from './Screens/Products/Product'
import Venture from './Screens/Venture/Venture'
import Test from './Screens/Redux/Text'



const App = () => {
  return (
    <>
      {/* <Navbar />
      <Switch>
        <Route exact path="/" component={Allcomp} />
        <Route path="/products" component={Product} />
      </Switch>
      <Footer /> */}
      <Venture/>
      {/* <Allcomp />
      <Footer /> 
      <Test/> */}
    </>
  )
}

export default App

