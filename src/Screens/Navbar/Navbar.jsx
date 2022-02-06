import React from 'react'
import "./Navbar.scss"
import logo from "../../Assets/logo1.png"


const Navbar = () => {
    return (
        <>
          <div className="navbar__container">
              <div className="logo">
                  <img src={logo} alt="" className="nav__logo"/>
              </div>
              <div className="nav">
                  <div className="home">Home</div>
                  <div className="home">About</div>
                  <div className="home">Contact</div>
                  <div className="home">Adress</div>
                  <div className="home">Products</div>
              </div>
              </div>  
        </>
    )
}

export default Navbar
