import React from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import imgBakery from "../../static/images/bakery-app-home1.png";
import imgVoting from "../../static/images/voting-app-voting1.png";
import imgFarmer from "../../static/images/farmer-app-myboxes1.png";
import TechTags from '../../models/TechTags';

const Projects: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className="projects" id="projects">
            <h1 className="projects__title">
                {t("projects.title")}
            </h1>
            <p className="projects__p">
                {t("projects.desc")}
            </p>
            <div className="project-cards-container">
                <ProjectCard 
                    title={t("projects.bakeryApp.title")}
                    date={t("projects.bakeryApp.date")}
                    role={t("projects.bakeryApp.role")}
                    techs={[TechTags.FIGMA]}
                    desc={t("projects.bakeryApp.desc")}
                    myImg={imgBakery}
                    myImgAlt={"projects.bakeryApp.imgAlt"}
                />
                <ProjectCard
                    title={t("projects.thesis.title")}
                    date={t("projects.thesis.date")}
                    role={t("projects.thesis.role")}
                    techs={[TechTags.FIGMA]}
                    desc={t("projects.thesis.desc")}
                    myImg={imgVoting}
                    myImgAlt={"projects.thesis.imgAlt"}
                />
                <ProjectCard
                    title={t("projects.farmersApp.title")}
                    date={t("projects.farmersApp.date")}
                    role={t("projects.farmersApp.role")}
                    techs={[TechTags.REACT, TechTags.AWS]}
                    desc={t("projects.farmersApp.desc")}
                    myImg={imgFarmer}
                    myImgAlt={"projects.farmersApp.imgAlt"}
                />
            </div>
        </div>
        
    );
}

export default Projects;