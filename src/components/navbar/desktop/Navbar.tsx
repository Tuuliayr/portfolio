import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import LanguageSelector from '../../languageSelector/LanguageSelector';
import MyBackButton from '../../base/myBackButton/MyBackButton';
import NavbarMobile from '../mobile/NavbarMobile';

const Navbar: React.FC = () => {
    const {t} = useTranslation();
    const [isMainPage, setIsMainPage] = useState(true);
    const location = useLocation();
    const smallScreen = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if ( location.pathname === "/") {
            setIsMainPage(true);
        } else {
            setIsMainPage(false);
        }
    }, [location.pathname]);

    return (
            <div className="navbar">
                <div className="nav-left">
                    {!isMainPage && <MyBackButton/>}
                </div>
                <div className="nav-right">
                    {isMainPage && !smallScreen &&
                        <div className="nav-links">
                            <Link
                                activeClass="active"
                                to="aboutMe"
                                smooth={true}
                                spy={true}
                                offset={-108}
                                duration={500}
                            >
                                {t("navigation.about")}
                            </Link>
                            <Link
                                activeClass="active"
                                to="projects"
                                smooth={true}
                                spy={true}
                                offset={-60}
                                duration={500}
                            >
                                {t("navigation.work")}
                            </Link>
                            <Link
                                activeClass="active"
                                to="contactMe"
                                smooth={true}
                                spy={true}
                                offset={-60}
                                duration={500}
                            >
                                {t("navigation.contact")}
                            </Link>
                        </div>
                    }
                    <div>
                        <LanguageSelector/>
                    </div>
                </div>
                {isMainPage && smallScreen && <NavbarMobile/>}
            </div>
    );
}

export default Navbar;
