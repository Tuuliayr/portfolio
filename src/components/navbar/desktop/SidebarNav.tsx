import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const SidebarNav: React.FC = () => {
    const {t} = useTranslation();
    
    return (
        <div className="sidebar">
                {/* <div className="sidebar-links">
                    <Link
                        activeClass="active"
                        to="aboutMe"
                        smooth={true}
                        spy={true}
                        offset={-108}
                        duration={500}
                    >
                        {t("navigation.sidebar.overview")}
                    </Link>
                    <Link
                        activeClass="active"
                        to="projects"
                        smooth={true}
                        spy={true}
                        offset={-60}
                        duration={500}
                    >
                        {t("navigation.sidebar.understanding")}
                    </Link>
                    <Link
                        activeClass="active"
                        to="contactMe"
                        smooth={true}
                        spy={true}
                        offset={-30}
                        duration={500}
                    >
                        {t("navigation.sidebar.process")}
                    </Link>
                </div> */}
                
            </div>
    )
}

export default SidebarNav;