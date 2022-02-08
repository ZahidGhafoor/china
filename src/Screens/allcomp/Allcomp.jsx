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

                    <Route exact path='/' component={Slider} />
                    <Route exact path='/' component={About} />
                    <Route exact path='/' component={Contact} />
                    <Route exact path='/' component={Adress} />



      
                <Switch>
                    <Route exact path='/products' component={Product} />
                </Switch>
         
        </>
    )
};

export default Allcomp;
