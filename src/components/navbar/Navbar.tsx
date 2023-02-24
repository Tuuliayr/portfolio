import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import "./navbar.scss";
import LanguageSelector from '../languageSelector/LanguageSelector';

const Navbar: React.FC = () => {

    const {t} = useTranslation();

    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        
        if (offset > 100 )  {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbar = ['navbar'];

    if (scrolled) {
        navbar.push('scrolled');
    }

    return (
        <BrowserRouter>
            <div className={navbar.join(" ")}>
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