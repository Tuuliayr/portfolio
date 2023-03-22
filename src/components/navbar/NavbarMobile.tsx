import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const NavbarMobile: React.FC = () => {
    const {t} = useTranslation();

    return (
        <BrowserRouter>
            <div className="navbar-mobile">
                <div className="nav-links-mobile">
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
                        offset={-80}
                        duration={500}
                    >
                        {t("navigation.work")}
                    </Link>
                    <Link
                        activeClass="active"
                        to="contactMe"
                        smooth={true}
                        spy={true}
                        offset={-80}
                        duration={500}
                    >
                        {t("navigation.contact")}
                    </Link>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default NavbarMobile;