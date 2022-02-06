import React from 'react'
import "./Contact.scss"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Contact = () => {
    return (
        <>
            <div className="contact__container">
                <div className="heading">GET IN TOUCH</div>

                <div className="bottom__icon">
                    <KeyboardArrowDownIcon className="icon" />
                </div>

                <div className="contact__form">
                    <div className="first">
                        <div className="div1" ><input placeholder="Name" type="text" className="text" /> <br /></div>
                        <div><input placeholder="Email" type="email" className="text" /> <br /></div>
                    </div>
                    <div><input placeholder="Website" type="text" className="text in1" /> <br /></div>
                    <div><textarea placeholder="Message" type="text" className="text area" /> <br /></div>

                    <button className="contact__btn">SEND MESSAGE</button>
                </div>
            </div>
        </>
    )
}

export default Contact
