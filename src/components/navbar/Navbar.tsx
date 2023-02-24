import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import "./navbar.scss";
import LanguageSelector from '../languageSelector/LanguageSelector';

const Navbar: React.FC = () => {

    const {t} = useTranslation();

    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="nav-links">
                    <Link to ="#myIntro" smooth>
                        {t("navigation.about")}
                    </Link>
                    <Link to ="#projects" smooth>
                        {t("navigation.work")}
                    </Link>
                    <Link to ="#contactMe" smooth>
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