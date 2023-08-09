import React from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import imgBakery from '../../static/images/bakery-app-home1.jpg';
import imgVoting from '../../static/images/voting-app-voting1.png';
import imgFarmer from '../../static/images/farmer-app-myboxes1.png';
import imgBaltic from '../../static/images/baltic-logo.png'
import TechTags from '../../models/TechTags';

const Projects: React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className="projects" id="projects">
            <h2 className="projects__title">{t("projects.title")}</h2>
            <p className="projects__p">{t("projects.desc")}</p>
            <div className="project-cards-container">
                <ProjectCard
                    url="/dance-vote"
                    title={t("projects.danceVote.title")}
                    dateRole={t("projects.danceVote.dateRole")}
                    techs={[TechTags.FIGMA]}
                    desc={t("projects.danceVote.desc")}
                    myImg={imgVoting}
                    myImgAlt={"projects.danceVote.imgAlt"}
                />
                <ProjectCard
                    url="/farmers-app"
                    title={t("projects.farmersApp.title")}
                    dateRole={t("projects.farmersApp.dateRole")}
                    techs={[TechTags.REACT, TechTags.AWS]}
                    desc={t("projects.farmersApp.desc")}
                    myImg={imgFarmer}
                    myImgAlt={"projects.farmersApp.imgAlt"}
                />
                <ProjectCard 
                    url="/bakery-app"
                    title={t("projects.bakeryApp.title")}
                    dateRole={t("projects.bakeryApp.dateRole")}
                    techs={[TechTags.FIGMA]}
                    desc={t("projects.bakeryApp.desc")}
                    myImg={imgBakery}
                    myImgAlt={"projects.bakeryApp.imgAlts.home"}
                />
                <ProjectCard 
                    url="/project-baltic"
                    title={t("projects.projectBaltic.title")}
                    dateRole={t("projects.projectBaltic.dateRole")}
                    techs={[TechTags.KRITA]}
                    desc={t("projects.projectBaltic.desc")}
                    myImg={imgBaltic}
                    myImgAlt={"projects.projectBaltic.imgAlts.home"}
                />
            </div>
        </div>
        
    );
}

export default Projects;
