import React from 'react';
import { useTranslation } from 'react-i18next';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import imgBakeryApp from '../../../../static/images/bakery-app-home.png';
import imgPersona from '../../../../static/images/persona-manu.jpg';
import imgUserJourney from '../../../../static/images/user-journey-map-manu.jpg';
import imgPaperWireframe from '../../../../static/images/paper-wireframe.jpg';
import imgPaperWireframeRefined from '../../../../static/images/paper-wireframe-refined.jpg';
// import LanguageSelector from '../../../languageSelector/LanguageSelector';
// import SidebarNav from '../../../navbar/desktop/SidebarNav';
import MyTag from '../../../base/myTag/MyTag';
// import TechTags from '../../../../models/TechTags';

const BakeryApp: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="project-page" id="first">
            {/* <LanguageSelector/> */}
            <div className="cover">
                <img src={imgBakeryApp} alt="Bakery mobile ordering app's home page." height={600}></img>
                <div className="cover__text-wrapper">
                    <h1>{t("projects.bakeryApp.title")}</h1>
                    <p>{t("projects.bakeryApp.desc")}</p>
                    <MyTag label={t("projects.techs.FIGMA")}/>
                </div>
            </div>
            <div className="overview">
                <h1>Overview</h1>
                <h3>{t("projects.bakeryApp.date")}</h3>
                <HelpOutlineIcon className="problem-icon"/>
                <p>The problem: Some people have limitations on what they can eat or need more information on their food for other reasons. 
                    This information isn't always easy to find.</p>
                <StarOutlineIcon className="goal-icon"/>
                <p>The goal: Design an app that makes finding suitable food options faster and more comfortable.</p>
            </div>
            <div className="understanding">
                <div className="understanding__text-wrapper">
                    <h1>Understanding</h1>
                    <h3>User research summary</h3>
                    <p>The competitive audit showed lack of ingredient and nutrition information on other ordering apps/websites.</p>
                    <p>I created empathy maps to better understand the users' wants and needs. The user group I focused on was working adults 
                        between the ages of 20 and 60 years old. Empathy maps were then refined into personas.</p>
                    <p>Research revealed three major user pain points.</p>
                    <h3>Pain points</h3>
                    <p><span className="highlighted-text">Inconvenience</span> - Trying to find information about allergens and nutrition values feels inconvenient.</p>
                    <p><span className="highlighted-text">Time</span> - Finding suitable food options takes too long.</p>
                    <p><span className="highlighted-text">Uncertainty</span> - Not sure what the food contains. “Can I eat this?"</p>
                </div>
                <div className="understanding__text-wrapper">
                <h3>Persona - Manu</h3>
                <img src={imgPersona} alt="Persona: Manu." height={500} className="img"></img>
                <p><span className="highlighted-text">Problem statement</span> - Manu is a junior employee in an HR consulting firm who needs a faster way to find 
                    suitable food options for their coworkers because of the coworkers' allergies.</p>
                <h3>User journey map - Manu</h3>
                <img src={imgUserJourney} alt="User journey map: Manu." height={500} className="img"></img>
                <p>Mapping Manu's journey revealed that a way to filter the products could <span className="highlighted-text">quicken the ordering process</span> and 
                    <span className="highlighted-text"> help the users make more confident choices</span>.</p>
                </div>
            </div>
            <div className="design">
                <div className="understanding__text-wrapper">
                    <h1>Design</h1>
                    <p>Pälä pälä design process?</p>
                    <p>Wireframing on paper enabled quick iteration and trying out different layouts for the home page before moving on to digital wireframing.</p>
                    <img src={imgPaperWireframe} alt="Five different paper wireframe versions of the home page." height={400} className="img"></img>
                    <img src={imgPaperWireframeRefined} alt="Refined version of the home page." height={400} className="img"></img>
                </div>
            </div>
        </div>
    )
}

export default BakeryApp;