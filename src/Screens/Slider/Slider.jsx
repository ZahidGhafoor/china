import React from "react";

// import Carousel from "react-material-ui-carousel";
// import { Paper, Button } from "@material-ui/core";

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import s1 from "../../Assets/s1.jpg";
import s2 from "../../Assets/s2.jpg";
import s3 from "../../Assets/s3.jpg";
import s4 from "../../Assets/s4.jpg";
import s5 from "../../Assets/s5.jpg";
import s6 from "../../Assets/s6.jpg";
import s7 from "../../Assets/s7.jpg";
import s8 from "../../Assets/s8.jpg";
import Fade from 'react-reveal/Fade';


import "./Slider.scss";



const Item = ({ item }) => {
  
  return (
    <Paper className="slider_box">
<Fade duration ={1200} bottom>
      <div className="headline"> 
        <h3> Hello again! </h3> 
        <p> <i>"The Home Of Taste In West Drayton"</i></p>
      </div>
      <img src={item.img} alt="ERROR" id="img" />
</Fade>
    </Paper>
  );
};
  


const Slider = () => {
  var items = [
    {
      img: s1,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s2,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s3,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s4,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s5,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s6,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s7,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s8,
      description: "Probably the most random thing you have ever seen!",
    },
  ];
  
  return (
    <>
      <div className="slider_container">
        <Carousel className="car" indicators={false} navButtonsAlwaysVisible={true}	stopAutoPlayOnHover="false">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
