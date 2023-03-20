import React from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import "./projects.scss";
import imgBakery from "../../static/images/bakery-app-home.png";
import imgVoting from "../../static/images/voting-app-voting.png";
import imgFarmer from "../../static/images/farmer-app-myboxes.png";

const Projects: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className="projects" id="projects">
            <h2 className="projects__title">
                {t("projects.title")}
            </h2>
            <div className="project-cards-container">
                <ProjectCard 
                    title={t("projects.bakeryApp.title")}
                    date={t("projects.bakeryApp.date")}
                    role={t("projects.bakeryApp.role")}
                    tech={t("projects.bakeryApp.tech")}
                    desc={t("projects.bakeryApp.desc")}
                    myImg={imgBakery}
                    myImgAlt={"projects.bakeryApp.imgAlt"}
                />
                <ProjectCard
                    title={t("projects.thesis.title")}
                    date={t("projects.thesis.date")}
                    role={t("projects.thesis.role")}
                    tech={t("projects.thesis.tech")}
                    desc={t("projects.thesis.desc")}
                    myImg={imgVoting}
                    myImgAlt={"projects.thesis.imgAlt"}
                />
                <ProjectCard
                    title={t("projects.farmersApp.title")}
                    date={t("projects.farmersApp.date")}
                    role={t("projects.farmersApp.role")}
                    tech={t("projects.farmersApp.tech")}
                    desc={t("projects.farmersApp.desc")}
                    myImg={imgFarmer}
                    myImgAlt={"projects.farmersApp.imgAlt"}
                />
            </div>
        </div>
        
    );
}

export default Projects;