import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PeopleIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import imgVotingAppHome from '../../../../static/images/voting-app-home.png';
import imgVotingApp from '../../../../static/images/voting-app-voting.png';
import imgVotingAppVote from '../../../../static/images/voting-app-vote.jpg';
import imgVotingAppResults from '../../../../static/images/voting-app-results.jpg';
import imgPersonaAntti from '../../../../static/images/voting-app-persona-antti.jpg';
import imgPersonaJouni from '../../../../static/images/voting-app-persona-jouni.jpg';
import imgCrazy8 from '../../../../static/images/crazy8.jpg';
import imgCrazy8Result from '../../../../static/images/crazy8-result.jpg';
import imgWireframes from '../../../../static/images/voting-app-wireframes.png';
import imgWireframesConfirmation from '../../../../static/images/votingroom-confimation.png';
import imgWireframesAccessibility from '../../../../static/images/votingroom-accessibility.png';
import MyTag from '../../../base/myTag/MyTag';
import BackNavbar from '../../../navbar/BackNavbar';
import SidebarNav from '../../../navbar/desktop/SidebarNav';
import Footer from '../../../footer/Footer';

const DanceVote: React.FC = () => {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bakery-app">
            <BackNavbar/>
            <SidebarNav
                destinations={["coverDance", "overviewDance", "understanding", "wireframes", "prototype", "takeaways"]}
                titles={["Dance Vote", "Overview", "Understanding", "Wireframes", "Prototype", "Takeaways"]}
                offsets={[-70, -60]}
            />
            <div className="cover" id="coverDance">
                <img
                    src={imgVotingApp} 
                    alt="DanceVote app's voting page." 
                    height={600}
                />
                <div className="cover__text">
                    <h1>{t("projects.danceVote.title")}</h1>
                    <p>{t("projects.danceVote.desc")}</p>
                    <MyTag label={t("projects.techs.FIGMA")}/>
                    <p className="thesis-link">
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
                    <h2>{t("navigation.sidebar.overview")}</h2>
                    <h3>{t("projects.danceVote.date")}</h3>
                </div>
                <HelpOutlineIcon className="icon"/>
                <p className="text-wrapper__space">
                    <span className="highlighted-text">
                        {t("projects.danceVote.overview.problem")}
                    </span>
                    {t("projects.danceVote.overview.problemContent")}
                </p>
                <StarOutlineIcon className="icon"/>
                <p>
                    <span className="highlighted-text">
                        {t("projects.danceVote.overview.goal")}
                    </span>
                    {t("projects.danceVote.overview.goalContent")}
                </p>
            </div>
            <div className="understanding" id="understanding">
                <div className="text-wrapper left-aligned">
                    <h2>{t("navigation.sidebar.understanding")}</h2>
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
                        height={500} 
                        className="img"
                    />
                    <p>
                        <span className="highlighted-text">
                            {t("projects.danceVote.understanding.personaAntti.problemStatement")}
                        </span>
                        {t("projects.danceVote.understanding.personaAntti.problemStatementText")}
                    </p>
                    {/* <h3>{t("projects.bakeryApp.understanding.userJourney.heading")}</h3> */}
                    {/* <img 
                        src={imgUserJourney} 
                        alt="User journey map: Manu." 
                        height={500} 
                        className="img"
                    /> */}
                    {/* <p>
                        {t("projects.bakeryApp.understanding.userJourney.journey")}
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.userJourney.quickenProcess")}
                        </span> 
                        {t("projects.bakeryApp.understanding.userJourney.and")}
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.userJourney.helpUsers")}
                        </span>
                        .
                    </p> */}
                    <h3>{t("projects.danceVote.understanding.personaJouni.heading")}</h3>
                    <img 
                        src={imgPersonaJouni} 
                        alt="Persona: Jouni." 
                        height={500} 
                        className="img"
                    />
                    <p>
                        <span className="highlighted-text">
                            {t("projects.danceVote.understanding.personaJouni.problemStatement")}
                        </span>
                        {t("projects.danceVote.understanding.personaJouni.problemStatementText")}
                    </p>
                    {/* <h3>{t("projects.bakeryApp.understanding.userJourney.heading")}</h3> */}
                    <h3>{t("projects.danceVote.understanding.ideation.heading")}</h3>
                    <p>{t("projects.danceVote.understanding.ideation.crazyEights")}</p>
                    <img 
                        src={imgCrazy8} 
                        alt="Crazy eights exercise of home page." 
                        height={600} 
                        className="img"
                    />
                    <p>{t("projects.danceVote.understanding.ideation.refinedVersion")}</p>
                    <img 
                        src={imgCrazy8Result} 
                        alt="Refined version of the home page." 
                        height={500} 
                        className="img"
                    />
                </div>
            </div>
            <div className="design-start" id="wireframes">
                <div className="text-wrapper left-aligned">
                    <h2>{t("projects.danceVote.wireframes.heading")}</h2>
                    <p>{t("projects.danceVote.wireframes.designs")}</p>
                    <img 
                        src={imgWireframes} 
                        alt="Wireframes of the log in flow." 
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgWireframesConfirmation} 
                        alt="Voting room confirmation wireframe." 
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgWireframesAccessibility} 
                        alt="Wireframe of the voting room page with better accessibility." 
                        height={500} 
                        className="img"
                    />
                </div>
            </div>
            <div className="design-refine" id="prototype">
                <div className="text-wrapper left-aligned">
                    <h2>{t("projects.danceVote.designRefine.heading")}</h2>
                    <h3>{t("projects.danceVote.designRefine.keyMockups.heading")}</h3>
                    <p>{t("projects.danceVote.designRefine.keyMockups.votingFlow")}</p>
                </div>
                <div>
                    <img 
                        src={imgVotingAppHome} 
                        alt="DanceVote home page mockup." 
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgVotingApp} 
                        alt="Voting room page mockup." 
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgVotingAppVote} 
                        alt="Vote confirmation modal mockup."
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgVotingAppResults} 
                        alt="Vote results page mockup." 
                        height={500} className="img"
                    />
                </div>
                <div className="text-wrapper left-aligned">
                    <h3>{t("projects.danceVote.designRefine.hifiPrototype.heading")}</h3>
                    <p>
                        {t("projects.danceVote.designRefine.hifiPrototype.prototypeText")}
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://www.figma.com/proto/zUDPa8vviZOWu9opoA61xp/Voting-Web-app?
                                type=design&node-id=785-9661&scaling=scale-down&page-id=0%3A1&starting-point-node-id=785%3A9661"
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
                    <h2>{t("navigation.sidebar.takeaways")}</h2>
                </div>
                    <PeopleIcon className="icon"/>
                    <p className="text-wrapper__space">
                        <span className="highlighted-text">
                            {t("projects.danceVote.takeaways.impact")}
                        </span>
                        {t("projects.danceVote.takeaways.impactText")}
                    </p>
                    <SchoolIcon className="icon"/>
                    <p className="text-wrapper__space">
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