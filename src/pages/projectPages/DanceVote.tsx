import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PeopleIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import imgVotingAppHome from '../../static/images/voting-app-home.png';
import imgVotingApp from '../../static/images/voting-app-voting.png';
import imgVotingAppVote from '../../static/images/voting-app-vote.jpg';
import imgVotingAppResults from '../../static/images/voting-app-results.jpg';
import imgPersonaAntti from '../../static/images/voting-app-persona-antti.jpg';
import imgPersonaJouni from '../../static/images/voting-app-persona-jouni.jpg';
import imgCrazy8 from '../../static/images/crazy8.jpg';
import imgCrazy8Result from '../../static/images/crazy8-result.jpg';
import imgWireframes from '../../static/images/voting-app-wireframes.png';
import imgWireframesConfirmation from '../../static/images/votingroom-confimation.png';
import imgWireframesAccessibility from '../../static/images/votingroom-accessibility.png';
import MyTag from '../../components/base/myTag/MyTag';
import SidebarNav from '../../components/navbar/desktop/SidebarNav';
import Footer from '../../components/footer/Footer';

const DanceVote: React.FC = () => {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-page">
            <MediaQuery minWidth={768}>
                <SidebarNav
                    destinations={["coverDance", "overviewDance", "understanding", "wireframes", "prototype", "takeaways"]}
                    titles={[
                                t("projects.danceVote.titleShort"), 
                                t("projects.danceVote.overview.heading"), 
                                t("projects.danceVote.understanding.heading"), 
                                t("projects.danceVote.wireframes.heading"), 
                                t("projects.danceVote.designRefine.heading"), 
                                t("projects.danceVote.takeaways.heading")
                            ]}
                    offsets={[-70, -60]}
                />
            </MediaQuery>
            <div className="cover" id="coverDance">
                <img
                    src={imgVotingApp} 
                    alt="DanceVote app's voting page." 
                    className="cover__img"
                />
                <div className="text-wrapper cover__text">
                    <h1>{t("projects.danceVote.title")}</h1>
                    <p>{t("projects.danceVote.desc")}</p>
                    <p className="p-small">{t("projects.danceVote.grade")}</p>
                    <div className="tags">
                        <MyTag label={t("projects.techs.FIGMA")}/>
                    </div>
                    <p className="project-link">
                        {t("projects.danceVote.theseusText")}
                        <a
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://urn.fi/URN:NBN:fi:amk-2022121429724"
                        >
                            {t("projects.danceVote.theseusLink")}
                            <OpenInNewIcon fontSize="small"/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="overview" id="overviewDance">
            <div className="text-wrapper center-aligned">
                    <h2>{t("projects.danceVote.overview.heading")}</h2>
                    <h3>{t("projects.danceVote.dateRole")}</h3>
                </div>
                <HelpOutlineIcon className="icon"/>
                <p className="text-wrapper text-wrapper__space">
                    <span className="highlighted-text">
                        {t("projects.danceVote.overview.problem")}
                    </span>
                    {t("projects.danceVote.overview.problemContent")}
                </p>
                <StarOutlineIcon className="icon"/>
                <p className="text-wrapper text-wrapper__space">
                    <span className="highlighted-text">
                        {t("projects.danceVote.overview.goal")}
                    </span>
                    {t("projects.danceVote.overview.goalContent")}
                </p>
            </div>
            <div className="understanding" id="understanding">
                <div className="text-wrapper left-aligned">
                    <h2>{t("projects.danceVote.understanding.heading")}</h2>
                    <h3>{t("projects.danceVote.understanding.userResearch.heading")}</h3>
                    <p>{t("projects.danceVote.understanding.userResearch.empathy")}</p>
                    <p>{t("projects.danceVote.understanding.userResearch.competitiveAudit")}</p>
                    <p>{t("projects.danceVote.understanding.userResearch.revelation")}</p>
                </div>
                <div className="text-wrapper left-aligned">
                    <h3>{t("projects.bakeryApp.understanding.persona.heading")}</h3>
                    <img 
                        src={imgPersonaAntti} 
                        alt="Persona: Antti." 
                        className="understanding__img-small"
                    />
                    <p>
                        <span className="highlighted-text">
                            {t("projects.danceVote.understanding.personaAntti.problemStatement")}
                        </span>
                        {t("projects.danceVote.understanding.personaAntti.problemStatementText")}
                    </p>
                    <h3>{t("projects.danceVote.understanding.personaJouni.heading")}</h3>
                    <img 
                        src={imgPersonaJouni} 
                        alt="Persona: Jouni." 
                        className="understanding__img-small"
                    />
                    <p>
                        <span className="highlighted-text">
                            {t("projects.danceVote.understanding.personaJouni.problemStatement")}
                        </span>
                        {t("projects.danceVote.understanding.personaJouni.problemStatementText")}
                    </p>
                    <h3>{t("projects.danceVote.understanding.ideation.heading")}</h3>
                    <p>{t("projects.danceVote.understanding.ideation.crazyEights")}</p>
                    <img 
                        src={imgCrazy8} 
                        alt="Crazy eights exercise of home page." 
                        className="understanding__img-small"
                    />
                    <p>{t("projects.danceVote.understanding.ideation.refinedVersion")}</p>
                    <img 
                        src={imgCrazy8Result} 
                        alt="Refined version of the home page." 
                        className="understanding__img-large"
                    />
                </div>
            </div>
            <div className="design-start" id="wireframes">
                <div className="text-wrapper left-aligned">
                    <h2>{t("projects.danceVote.wireframes.heading")}</h2>
                    <p>{t("projects.danceVote.wireframes.designs")}</p>
                    <p>{t("projects.danceVote.wireframes.voteOrganizer")}</p>
                    <img 
                        src={imgWireframes} 
                        alt="Wireframes of the log in flow." 
                        className="design-start__img-large"
                    />
                    <p>{t("projects.danceVote.wireframes.voter")}</p>
                    <img 
                        src={imgWireframesConfirmation} 
                        alt="Voting room confirmation wireframe." 
                        className="design-start__img-medium"
                    />
                    <div>
                    <p>{t("projects.danceVote.wireframes.votingRoom")}</p>
                    <img 
                        src={imgWireframesAccessibility} 
                        alt="Wireframe of the voting room page with better accessibility." 
                        className="design-start__img-small"
                    />
                    </div>
                </div>
            </div>
            <div className="design-refine" id="prototype">
                <div className="text-wrapper left-aligned">
                    <h2>{t("projects.danceVote.designRefine.heading")}</h2>
                    <h3>{t("projects.danceVote.designRefine.keyMockups.heading")}</h3>
                    <p>{t("projects.danceVote.designRefine.keyMockups.votingFlow")}</p>
                </div>
                <div className="key-mockups">
                    <img 
                        src={imgVotingAppHome} 
                        alt="DanceVote home page mockup."
                        className="key-mockups__img"
                    />
                    <img 
                        src={imgVotingApp} 
                        alt="Voting room page mockup." 
                        className="key-mockups__img"
                    />
                    <img 
                        src={imgVotingAppVote} 
                        alt="Vote confirmation modal mockup."
                        className="key-mockups__img"
                    />
                    <img 
                        src={imgVotingAppResults} 
                        alt="Vote results page mockup." 
                        className="key-mockups__img"
                    />
                </div>
                <div className="text-wrapper left-aligned">
                    <h3>{t("projects.danceVote.designRefine.hifiPrototype.heading")}</h3>
                    <p>
                        {t("projects.danceVote.designRefine.hifiPrototype.prototypeText")}
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://www.figma.com/proto/zUDPa8vviZOWu9opoA61xp/Voting-Web-app?type=design&node-id=785-9661&scaling=scale-down&page-id=0%3A1&starting-point-node-id=785%3A9661"
                        >
                            {t("projects.danceVote.designRefine.hifiPrototype.prototypeLink")}
                        </a>
                        .
                    </p>
                    <h3>{t("projects.danceVote.designRefine.accessibility.heading")}</h3>
                    <p>{t("projects.danceVote.designRefine.accessibility.wcag")}</p>
                    <p>
                        <span className="highlighted-text">1. </span>
                        {t("projects.danceVote.designRefine.accessibility.typography")}
                    </p>
                    <p>
                        <span className="highlighted-text">2. </span>
                        {t("projects.danceVote.designRefine.accessibility.colors")}
                    </p>
                    <p>
                        <span className="highlighted-text">3. </span>
                        {t("projects.danceVote.designRefine.accessibility.targetSize")}
                    </p>
                </div>
            </div>
            <div className="takeaways" id="takeaways">
                <div className="text-wrapper center-aligned">
                    <h2>{t("projects.danceVote.takeaways.heading")}</h2>
                </div>
                    <PeopleIcon className="icon"/>
                    <p className="text-wrapper text-wrapper__space">
                        <span className="highlighted-text">
                            {t("projects.danceVote.takeaways.impact")}
                        </span>
                        {t("projects.danceVote.takeaways.impactText")}
                    </p>
                    <SchoolIcon className="icon"/>
                    <p className="text-wrapper text-wrapper__space">
                        <span className="highlighted-text">
                            {t("projects.danceVote.takeaways.whatLearned")}
                        </span>
                        {t("projects.danceVote.takeaways.whatLearnedText")}
                    </p>
                <div className="text-wrapper center-aligned">
                    <h3>{t("projects.danceVote.takeaways.nextSteps.heading")}</h3>
                    <p>
                        <span className="highlighted-text">1. </span>
                        {t("projects.danceVote.takeaways.nextSteps.ui")}
                    </p>
                    <p>
                        <span className="highlighted-text">2. </span>
                        {t("projects.danceVote.takeaways.nextSteps.accessibility")}
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DanceVote;