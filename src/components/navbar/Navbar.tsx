import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../languageSelector/LanguageSelector';

const Navbar: React.FC = () => {
    const {t} = useTranslation();

    return (
        <BrowserRouter>
            <div className="navbar">
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
                        offset={-30}
                        duration={500}
                    >
                        {t("navigation.contact")}
                    </Link>
                </div>
                <div>
                    <LanguageSelector/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Navbar;