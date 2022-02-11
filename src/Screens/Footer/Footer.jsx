import React from 'react'
import "./Footer.scss"

import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <>
          <div className="footer__container">
             <div className="upper">
                 <div className="first">
                     <div className="icon">
                         <CallIcon className="call__icon"/>
                     </div>
                     <div className="text">+962 6 4650025</div>
                 </div>
                 <div className="first">
                     <div className="icon">
                         <LocationOnIcon className="call__icon"/>
                     </div>
                     <div className="text">4 Almutanabbi St. Jabal Amman, 3rd Circle, China</div>
                 </div>
                 <div className="first">
                     <div className="icon">
                         <MailIcon className="call__icon"/>
                     </div>
                     <div className="text">info@zahidghafoor.com</div>
                 </div>
                 
             </div>
              </div>  
              <Fade bottom>
             <div className="footer__bottom">
                 <div className="icons">
                 <div className="icons1"><FacebookIcon className="bottom__icons"/></div>
                 <div className="icons1"><TwitterIcon className="bottom__icons"/></div>
                 <div className="icons1"><InstagramIcon className="bottom__icons"/></div>
                 <div className="icons1"><LinkedInIcon className="bottom__icons"/></div>
                 <div className="icons1"><YouTubeIcon className="bottom__icons"/></div>
                 </div>
                 <div className="line1">SHIREEN TRADING 2017</div>
                 <div className="line1">ALL RIGHTS RESERVED.</div>
             </div>
             </Fade>


        </>
    )
}

export default Footer
