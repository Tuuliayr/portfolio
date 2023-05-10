import React from 'react';
import { useTranslation } from 'react-i18next';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import imgBakeryApp from '../../../../static/images/bakery-app-home.png';
import imgPersona from '../../../../static/images/persona-manu.jpg';
import imgUserJourney from '../../../../static/images/user-journey-map-manu.jpg';
import imgPaperWireframe from '../../../../static/images/paper-wireframe.jpg';
import imgPaperWireframeRefined from '../../../../static/images/paper-wireframe-refined.jpg';
import imgDigitalWireframes from '../../../../static/images/digital-wirefames.jpg';
import imgMockupBefore from '../../../../static/images/mockup-before.jpg';
import imgMockupAfter from '../../../../static/images/mockup-after.jpg';
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
            <div className="design-start">
                {/* <div className="design__text-wrapper"> */}
                    <h1>Starting the design</h1>
                    <p>Pälä pälä design process?</p>
                    <h3>Paper wireframes</h3>
                    <p>Wireframing on paper enabled quick iteration and trying out different layouts for the home page before moving on to digital wireframing.</p>
                    <img src={imgPaperWireframe} alt="Five different paper wireframe versions of the home page." height={400} className="img"></img>
                    <p>I ideatiated five different versions of the home page.</p>
                    <img src={imgPaperWireframeRefined} alt="Refined version of the home page." height={400} className="img"></img>
                    <p>After assessing the best features of the differend wirefames I built a refined version of the home screen.</p>
                    <h3>Digital wireframes</h3>
                    <img src={imgDigitalWireframes} alt="Digital wireframes." height={500} className="img"></img>
                    <p>As the initial design phase continued, I made sure to base screen designs on findings from the user research.</p>
                    <h3>Low-fidelity prototype</h3>
                    <p>I connected the digital wireframe screens in order to create the primary user flow, which presents the process of ordering bakery goods.</p>
                    <p>View bakery mobile app's <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/UIfMCbPeV2vzPdzClgawMY/Google-UX-Prototype?
                    node-id=3%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1"> low-fidelity prototype</a>.</p>
                    <h3>Usability study findings</h3>
                    <p>From testing the low-fidelity prototype on five users, I could determine that the following changes were needed:</p>
                    <div className="design-start__text-wrapper">
                        <p><span className="highlighted-text">1.</span> Back button was missing from the profile page.</p>
                        <p><span className="highlighted-text">2.</span> Users felt that reading ingredient lists is tiring and there should be quicker way to find out, if the product is suitable for their dietary needs.</p>
                        <p><span className="highlighted-text">3.</span> Users needed a clearer way to access orders.</p>
                    </div>
                {/* </div> */}
            </div>
            <div className="design-refine">
                <div className="understanding__text-wrapper">
                    <h1>Refining the design</h1>
                    <h3>Mockups</h3>
                    <img src={imgMockupBefore} alt="Product page wireframe." height={600} className="img"></img>
                    <img src={imgMockupAfter} alt="Product page mockup." height={600} className="img"></img>
                    <h3>High-fidelity prototype</h3>
                    <h3>Accessibility</h3>
                </div>

            </div>
        </div>
    )
}

export default BakeryApp;