import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import imgVotingApp from '../../../../static/images/voting-app-voting.png';
import MyTag from '../../../base/myTag/MyTag';
import BackNavbar from '../../../navbar/BackNavbar';
import SidebarNav from '../../../navbar/desktop/SidebarNav';

const DanceVote: React.FC = () => {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dance-vote">
            <BackNavbar/>
            <SidebarNav
                destinations={["coverDance", "overviewDance"]}
                titles={["Dance Vote", "Overview"]}
                offsets={[-70, -60]}
            />
            <div className="cover" id="cover">
                <img
                    src={imgVotingApp} 
                    alt="DanceVote app's voting page." 
                    height={600}
                />
                <div className="cover__text">
                    <h1>{t("projects.danceVote.title")}</h1>
                    <p>{t("projects.danceVote.desc")}</p>
                    <MyTag label={t("projects.techs.FIGMA")}/>
                </div>
            </div>
        </div>
    )
}

export default DanceVote;