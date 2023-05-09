import React from 'react';
import { useTranslation } from 'react-i18next';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import imgBakeryApp from '../../../../static/images/bakery-app-home.png'
import LanguageSelector from '../../../languageSelector/LanguageSelector';
import SidebarNav from '../../../navbar/desktop/SidebarNav';
import MyTag from '../../../base/myTag/MyTag';
import TechTags from '../../../../models/TechTags';

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
                <h1>Understanding</h1>
                <p>Competitive audit showed lack of ingredient and nutrition information on other ordering apps/websites.</p>
                <p>I created empathy maps to better understand the users’ wants and needs. The user group I focused on was working adults 
                    between the ages of 20 and 60 years old. Empathy maps were then refined into personas.</p>
                <p>Research revealed three major user pain points.</p>
            </div>
            <div className="design">

            </div>
        </div>
    )
}

export default BakeryApp;