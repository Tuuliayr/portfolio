import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MyTag from '../../components/base/myTag/MyTag';
import Footer from '../../components/footer/Footer';
import imgProjectBaltiLogo from '../../static/images/baltic-logo.png';
import imgProjectBalticMap from '../../static/images/baltic-map.jpg';
import imgProjectBalticMapProgress from '../../static/images/baltic-map-progress.jpg';
import imgProjectBalticFarm from '../../static/images/baltic-farm.jpg';
import imgProjectBalticFarmFin from '../../static/images/baltic-farm-fin.jpg';

const ProjectBaltic: React.FC = () => {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-page">
            <div className="cover">
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
            <div className="design-start design-start__img-gallery">
                <h2>{t("projects.projectBaltic.gallery")}</h2>
                <img
                    src={imgProjectBalticMap} 
                    alt="Project Baltic map." 
                    className="design-start__img-medium"
                />
                <img
                    src={imgProjectBalticMapProgress} 
                    alt="Project Baltic map progress." 
                    className="design-start__img-medium"
                    />
                <img
                    src={imgProjectBalticFarm} 
                    alt="Project Baltic farm start." 
                    className="design-start__img-medium"
                />
                <img
                    src={imgProjectBalticFarmFin} 
                    alt="Project Baltic farm finished." 
                    className="design-start__img-medium"
                />
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectBaltic;
