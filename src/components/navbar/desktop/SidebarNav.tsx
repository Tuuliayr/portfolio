import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const SidebarNav: React.FC = () => {
    const {t} = useTranslation();
    
    return (
        <div className="sidebar">
                <div className="links">
                    <Link
                        activeClass="active"
                        to="cover"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}
                    >
                        Bakery Mobile App
                    </Link>
                    <Link
                        activeClass="active"
                        to="overview"
                        smooth={true}
                        spy={true}
                        offset={-60}
                        duration={500}
                    >
                        {t("navigation.sidebar.overview")}
                    </Link>
                    <Link
                        activeClass="active"
                        to="understanding"
                        smooth={true}
                        spy={true}
                        duration={500}
                    >
                        {t("navigation.sidebar.understanding")}
                    </Link>
                    <Link
                        activeClass="active"
                        to="designStart"
                        smooth={true}
                        spy={true}
                        duration={500}
                    >
                        {t("navigation.sidebar.designStart")}
                    </Link>
                    <Link
                        activeClass="active"
                        to="designRefine"
                        smooth={true}
                        spy={true}
                        duration={500}
                    >
                        {t("navigation.sidebar.designRefine")}
                    </Link>
                    <Link
                        activeClass="active"
                        to="takeaways"
                        smooth={true}
                        spy={true}
                        duration={500}
                    >
                        {t("navigation.sidebar.takeaways")}
                    </Link>
                </div>
            </div>
    )
}

export default SidebarNav;