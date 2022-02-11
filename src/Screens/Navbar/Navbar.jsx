import React from 'react'
import "./Navbar.scss"
import logo from "../../Assets/logo1.png"
import Mobile from './Mobile'

import { NavLink } from 'react-router-dom'

;







const Navbar = () => {
    return (
        <>
          <div className="navbar__container">
              <div className="logo">
                  <img src={logo} alt="" className="nav__logo"/>
              </div>
              <div className="nav">
                  <NavLink exact activeClassName='active' to="/" className="home">Home</NavLink>
                  <NavLink activeClassName='active' to="/about" className="home">About</NavLink>
                  <NavLink activeClassName='active' to="/contact" className="home">Contact</NavLink>
                  <NavLink activeClassName='active' to="/adress" className="home">Adress</NavLink>
                  <NavLink activeClassName='active' to="/products" className="home">Products</NavLink>
              </div>
             
              

              <div className="mobile__nav">
                  <Mobile/>
              </div>
              </div>  
        </>
    )
}

export default Navbar
