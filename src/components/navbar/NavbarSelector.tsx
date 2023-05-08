import React from 'react';
import Navbar from '../navbar/Navbar';
import NavbarMobile from '../navbar/NavbarMobile';
import TopBarMobile from '../navbar/TopBarMobile';
import { useMediaQuery } from '@mui/material';

const NavbarSelector: React.FC = () => {
    const smallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <>
            {smallScreen ?
                <>
                    <TopBarMobile/>
                    <NavbarMobile/>
                </>
            :
                <Navbar/>
            }
        </>
    );
}

export default NavbarSelector;