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
                    <div className="nav-about">
                        <Link
                            activeClass="active"
                            to="aboutMe"
                            smooth={true}
                            spy={true}
                            offset={-108}
                            duration={500}
                        >
                            {/* {t("navigation.about")} */}
                        </Link>
                    </div>
                    <div className="nav-projects">
                        <Link
                            activeClass="active"
                            to="projects"
                            smooth={true}
                            spy={true}
                            offset={-48}
                            duration={500}
                        >
                            {/* {t("navigation.work")} */}
                        </Link>
                    </div>
                    <div className="nav-contact">
                        <Link
                            activeClass="active"
                            to="contactMe"
                            smooth={true}
                            spy={true}
                            offset={-48}
                            duration={500}
                        >
                            {/* {t("navigation.contact")} */}
                        </Link>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default NavbarMobile;