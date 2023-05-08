import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import MoodIcon from '@mui/icons-material/Mood';
import StickyNoteIcon from '@mui/icons-material/StickyNote2Outlined';
import EmailIcon from '@mui/icons-material/AlternateEmailOutlined';

const NavbarMobile: React.FC = () => {
    return (
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
                            <MoodIcon className="about-icon"/>
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
                            <StickyNoteIcon className="proj-icon"/>
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
                            <EmailIcon className="contact-icon"/>
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default NavbarMobile;