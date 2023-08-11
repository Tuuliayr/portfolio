import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import imgFarmerApp from '../../static/images/farmer-app-myboxes.png';
import MyTag from '../../components/base/myTag/MyTag';
import BackNavbar from '../../components/navbar/BackNavbar';
import Footer from '../../components/footer/Footer';

const FarmersApp: React.FC = () => {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-page">
            <BackNavbar/>
            <div className="cover" id="coverDance">
                <img
                    src={imgFarmerApp} 
                    alt="DanceVote app's voting page." 
                    className="cover__img"
                />
                <div className="text-wrapper cover__text">
                    <h1>{t("projects.farmersApp.title")}</h1>
                    <p>{t("projects.farmersApp.desc")}</p>
                    <p className="p-small">{t("projects.farmersApp.dateRole")}</p>
                    <p className="p-small">{t("projects.farmersApp.team")}</p>
                    <p className="p-small">{t("projects.farmersApp.role")}</p>
                    <div className="tags">
                        <MyTag label={t("projects.techs.REACT")}/>
                        <MyTag label={t("projects.techs.AWS")}/>
                    </div>
                    <p className="project-link">
                        <a
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://github.com/Tuuliayr/maschinenringe-refill-managment"
                        >
                            {t("projects.farmersApp.link")}
                            <OpenInNewIcon fontSize="small"/>
                        </a>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FarmersApp;