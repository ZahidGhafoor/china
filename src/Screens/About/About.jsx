import React from 'react'
import "./About.scss"

import about from "../../Assets/about.png"


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const About = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className="about__container">
        <div className="left">
          <div className="heading">
            ABOUT US
            </div>
          <div className="para">
            JLC Group was established in Dubai, UAE in 2015 for Distribution of FMCG Products and Trading of Mineral & Mining Products, Consultancy Services. JLC Group comprises of JLC Global FZC (a Free Zone Company) & JLC General Trading LLC. JLC Group is part of an Indian Group of Companies which was established in the year 1950. The group has grown significantly in the region since its establishment and holds financial & equity interests in companies worldwide. JLC General Trading LLC is involved in FMCG distribution with brands such as Patanjali, SriSri Tattva, Dabur, Hyson Tea to name a few. We have a wide distribution network in the region with presence in many Hypermarkets & Supermarkets.
            </div>
          <button onClick={handleClickOpen} className="about__btn">Learn More</button>

        </div>
          <img src={about} alt="" className="about__img" />
        <div className="right">

        </div>
      </div>


      {/* MUI  */}

      <div>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, necessitatibus sed! Praesentium officia reiciendis eaque repellat ipsam, quia neque, at corporis quidem perspiciatis rerum. Consectetur tenetur nulla laudantium voluptatibus. Voluptate dicta, quasi ad iusto ea incidunt mollitia ipsum quidem eveniet ut, in pariatur amet corporis maxime odit quos aliquam rem repudiandae culpa doloremque! Tenetur, neque. Voluptatibus nihil culpa odio veniam tempore asperiores! Ex eaque amet facere non. Non dolore labore vero commodi iure tempora voluptatibus, deserunt soluta fugiat. At, neque fugit. Animi id repellendus voluptas? Optio laborum libero, cumque sit deserunt placeat aut sint, nostrum fuga quam eos illum cupiditate molestiae! Dolore aut quam culpa. Repudiandae porro hic maxime ullam cum ducimus? Animi reprehenderit adipisci tempore, quod laborum accusamus alias ipsam corrupti ex fugiat consequatur molestias sed iste sint eos officia nam saepe! Vero quasi totam beatae atque eveniet, accusantium distinctio quae tempora similique modi, esse tempore, sequi sunt veniam non recusandae deleniti magnam deserunt dicta et! Cum quod sapiente nostrum veritatis magni, alias voluptas incidunt quidem repellendus maiores atque excepturi porro illum nobis obcaecati dolorem ab, exercitationem autem enim inventore debitis modi beatae quisquam earum. Commodi optio asperiores blanditiis eveniet debitis saepe totam ut corrupti ullam repellat sed error vitae, dicta assumenda voluptate. Odit natus deserunt expedita quasi quia aliquid aut! Praesentium, iusto. Eius, reiciendis eaque? Quis asperiores maxime eius deserunt! Tenetur alias laborum id magnam ex quisquam fugit accusamus exercitationem corrupti dolorum dolorem, aliquam qui pariatur nisi praesentium corporis vel dicta molestiae quasi minima autem cum. Minima ratione perferendis, iure debitis cupiditate illo doloremque vero accusantium eligendi totam quidem illum tempora autem, nihil sed consequatur saepe dolore aut esse? Molestias ut nisi unde laudantium nobis quisquam, odit officia voluptates laboriosam vero rem. Necessitatibus voluptatem quo corrupti. Nostrum dolore dicta sed sit animi quasi dolorem pariatur ipsum modi atque.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default About
