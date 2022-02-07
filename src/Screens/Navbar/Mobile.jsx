import React from 'react'
import "./Mobile.scss"

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';

import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';

const Mobile = () => {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="mobile__container">
            <div className="home">Home</div>
                  <div className="home">About</div>
                  <div className="home">Contact</div>
                  <div className="home">Adress</div>
                  <div className="home">Products</div>
                  <div className="home"><CloseIcon   className='icons' /></div>
            </div>

        </Box>
    );
    return (
        <>
            <div>
                {['top'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div className="burger" onClick={toggleDrawer(anchor, true)}>
                            <MenuIcon className='iconss' />
                        </div>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Mobile
