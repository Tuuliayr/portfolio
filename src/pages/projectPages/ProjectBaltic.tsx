import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MyTag from '../../components/base/myTag/MyTag';
import Footer from '../../components/footer/Footer';
import imgProjectBaltiLogo from '../../static/images/baltic-logo.png';
import imgProjectBalticMap from '../../static/images/baltic-map.jpg';
import imgProjectBalticFarm from '../../static/images/baltic-farm.jpg';
import imgProjectBalticResearch from '../../static/images/baltic-research.jpg';

const ProjectBaltic: React.FC = () => {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-page">
            <div className="cover" id="coverDance">
                <img
                    src={imgProjectBaltiLogo} 
                    alt="Project Baltic logo." 
                    className="cover__img"
                />
                <div className="text-wrapper cover__text">
                    <h1>{t("projects.projectBaltic.title")}</h1>
                    <p>{t("projects.projectBaltic.desc")}</p>
                    <p className="p-small">{t("projects.projectBaltic.dateRole")}</p>
                    <p className="p-small">{t("projects.projectBaltic.team")}</p>
                    <p className="p-small">{t("projects.projectBaltic.role")}</p>
                    <div className="tags">
                        <MyTag label={t("projects.techs.KRITA")}/>
                    </div>
                    <p className="project-link">
                        <a
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://webpages.tuni.fi/tamk_19tiko1a/"
                        >
                            {t("projects.projectBaltic.link")}
                            <OpenInNewIcon fontSize="small"/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="design-start">
                <img
                        src={imgProjectBalticMap} 
                        alt="Prject Baltic map." 
                        className="design-start__img-medium"
                    />
                <img
                    src={imgProjectBalticFarm} 
                    alt="Prject Baltic farm." 
                    className="design-start__img-medium"
                />
                <img
                    src={imgProjectBalticResearch} 
                    alt="Prject Baltic farm." 
                    className="design-start__img-medium"
                />
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectBaltic;
