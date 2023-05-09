import React from 'react';
import Navbar from './desktop/Navbar';
import NavbarMobile from './mobile/NavbarMobile';
import TopBarMobile from './mobile/TopBarMobile';
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