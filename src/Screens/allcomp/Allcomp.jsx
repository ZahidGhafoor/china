import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Adress from '../Adress/Adress';
import Contact from '../Contact/Contact';
import Product from '../Products/Product';
import Slider from '../Slider/Slider';

const Allcomp = () => {
    return (
        <>

                    {/* <Route  path='/' component={Slider} />
                    <Route  path='/' component={About} />
                    <Route  path='/' component={Contact} />
                    <Route  path='/' component={Adress} /> */}

                    <Slider/>
                    <About/>
                    <Contact/>
                    <Adress/>



      
              
         
        </>
    )
};

export default Allcomp;
