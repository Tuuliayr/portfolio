import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import imgBakeryApp from '../../../../static/images/bakery-app-home.png';
import imgPersona from '../../../../static/images/persona-manu.jpg';
import imgUserJourney from '../../../../static/images/user-journey-map-manu.jpg';
import imgPaperWireframe from '../../../../static/images/paper-wireframe.jpg';
import imgPaperWireframeRefined from '../../../../static/images/paper-wireframe-refined.jpg';
import imgDigitalWireframes from '../../../../static/images/digital-wirefames.jpg';
import imgMockupBeforeProduct from '../../../../static/images/mockup-before.jpg';
import imgMockupAfterProduct from '../../../../static/images/mockup-after.jpg';
import imgMockupBeforeProfile from '../../../../static/images/mockup-before2.jpg';
import imgMockupAfterProfile from '../../../../static/images/mockup-after2.jpg';
import imgMockupBrowse from '../../../../static/images/mockup-browse.jpg';
import imgMockupCheckout from '../../../../static/images/mockup-checkout.jpg';
import BackNavbar from '../../../navbar/BackNavbar';
import SidebarNav from '../../../navbar/desktop/SidebarNav';
import MyTag from '../../../base/myTag/MyTag';
import Footer from '../../../footer/Footer';

const BakeryApp: React.FC = () => {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bakery-app">
            <BackNavbar/>
            <SidebarNav/>
            <div className="cover" id="cover">
                <img
                    src={imgBakeryApp} 
                    alt="Bakery mobile ordering app's home page." 
                    height={600}
                />
                <div className="cover__text">
                    <h1>{t("projects.bakeryApp.title")}</h1>
                    <p>{t("projects.bakeryApp.desc")}</p>
                    <MyTag label={t("projects.techs.FIGMA")}/>
                </div>
            </div>
            <div className="overview" id="overview">
                <div className="text-wrapper center-aligned">
                    <h2>{t("navigation.sidebar.overview")}</h2>
                    <h3>{t("projects.bakeryApp.date")}</h3>
                </div>
                <HelpOutlineIcon className="icon"/>
                <p className="text-wrapper__space">
                    <span className="highlighted-text">
                        {t("projects.bakeryApp.overview.problem")}
                    </span>
                    {t("projects.bakeryApp.overview.problemContent")}
                </p>
                <StarOutlineIcon className="icon"/>
                <p>
                    <span className="highlighted-text">
                        {t("projects.bakeryApp.overview.goal")}
                    </span>
                    {t("projects.bakeryApp.overview.goalContent")}
                </p>
            </div>
            <div className="understanding" id="understanding">
                <div className="text-wrapper left-aligned">
                    <h2>{t("navigation.sidebar.understanding")}</h2>
                    <h3>{t("projects.bakeryApp.understanding.userResearch.heading")}</h3>
                    <p>{t("projects.bakeryApp.understanding.userResearch.competitiveAudit")}</p>
                    <p>{t("projects.bakeryApp.understanding.userResearch.empathy")}</p>
                    <p>{t("projects.bakeryApp.understanding.userResearch.revelation")}</p>
                    <h3>{t("projects.bakeryApp.understanding.painPoints.heading")}</h3>
                    <p>
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.painPoints.inconvenience")}
                        </span>
                        {t("projects.bakeryApp.understanding.painPoints.inconvenienceText")}
                    </p>
                    <p>
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.painPoints.time")}
                        </span>
                        {t("projects.bakeryApp.understanding.painPoints.timeText")}
                    </p>
                    <p>
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.painPoints.uncertainty")}
                        </span>
                        {t("projects.bakeryApp.understanding.painPoints.uncertaintyText")}
                    </p>
                </div>
                <div className="text-wrapper left-aligned">
                    <h3>{t("projects.bakeryApp.understanding.persona.heading")}</h3>
                    <img 
                        src={imgPersona} 
                        alt="Persona: Manu." 
                        height={500} 
                        className="img"
                    />
                    <p>
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.persona.problemStatement")}
                        </span>
                        {t("projects.bakeryApp.understanding.persona.problemStatementText")}
                    </p>
                    <h3>{t("projects.bakeryApp.understanding.userJourney.heading")}</h3>
                    <img 
                        src={imgUserJourney} 
                        alt="User journey map: Manu." 
                        height={500} 
                        className="img"
                    />
                    <p>
                        {t("projects.bakeryApp.understanding.userJourney.journey")}
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.userJourney.quickenProcess")}
                        </span> 
                        {t("projects.bakeryApp.understanding.userJourney.and")}
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.understanding.userJourney.helpUsers")}
                        </span>
                        .
                    </p>
                </div>
            </div>
            <div className="design-start" id="designStart">
                <div className="text-wrapper left-aligned">
                    <h2>{t("navigation.sidebar.designStart")}</h2>
                    <p>Pälä pälä design process?</p>
                    <h3>{t("projects.bakeryApp.designStart.paperWireframes.heading")}</h3>
                    <p>{t("projects.bakeryApp.designStart.paperWireframes.iteration")}</p>
                    <img 
                        src={imgPaperWireframe} 
                        alt="Five different paper wireframe versions of the home page." 
                        height={400} 
                        className="img"
                    />
                    <p>{t("projects.bakeryApp.designStart.paperWireframes.ideation")}</p>
                    <img 
                        src={imgPaperWireframeRefined} 
                        alt="Refined version of the home page." 
                        height={400} 
                        className="img"
                    />
                    <p>{t("projects.bakeryApp.designStart.paperWireframes.refinedVersion")}</p>
                    <h3>{t("projects.bakeryApp.designStart.digitalWireframes.heading")}</h3>
                    <img 
                        src={imgDigitalWireframes} 
                        alt="Digital wireframes." 
                        height={500} 
                        className="img"
                    />
                    <p>{t("projects.bakeryApp.designStart.digitalWireframes.designs")}</p>
                    <h3>{t("projects.bakeryApp.designStart.lofiPrototype.heading")}</h3>
                    <p>{t("projects.bakeryApp.designStart.lofiPrototype.userFlow")}</p>
                    <p>
                        {t("projects.bakeryApp.designStart.lofiPrototype.prototypeText")} 
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://www.figma.com/proto/UIfMCbPeV2vzPdzClgawMY/Google-UX-Prototype?
                                node-id=3%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1"
                        >
                            {t("projects.bakeryApp.designStart.lofiPrototype.prototypeLink")}
                        </a>
                        .
                    </p>
                    <h3>{t("projects.bakeryApp.designStart.usabilityFindings.heading")}</h3>
                    <p>{t("projects.bakeryApp.designStart.usabilityFindings.changes")}</p>
                    <p>
                        <span className="highlighted-text">1. </span>
                        {t("projects.bakeryApp.designStart.usabilityFindings.backButton")}
                    </p>
                    <p>
                        <span className="highlighted-text">2. </span>
                        {t("projects.bakeryApp.designStart.usabilityFindings.dietaryNeeds")}
                    </p>
                    <p>
                        <span className="highlighted-text">3. </span>
                        {t("projects.bakeryApp.designStart.usabilityFindings.orders")}
                    </p>
                </div>
            </div>
            <div className="design-refine" id="designRefine">
                <div className="text-wrapper left-aligned">
                    <h2>{t("navigation.sidebar.designRefine")}</h2>
                    <h3>{t("projects.bakeryApp.designRefine.mockups.heading")}</h3>
                    <div className="comparison">
                        <img 
                            src={imgMockupBeforeProduct} 
                            alt="Product page wireframe." 
                            height={600} 
                            className="img"
                        />
                        <ArrowRightIcon className="arrow-right"/>
                        <img 
                            src={imgMockupAfterProduct} 
                            alt="Product page mockup." 
                            height={600} className="img"
                        />
                    </div>
                    <p>{t("projects.bakeryApp.designRefine.mockups.dietaryTags")}</p>
                    <p>{t("projects.bakeryApp.designRefine.mockups.addToCart")}</p>
                    <div className="comparison">
                        <img 
                            src={imgMockupBeforeProfile} 
                            alt="Profile page wireframe." 
                            height={600} 
                            className="img"
                        />
                        <ArrowRightIcon className="arrow-right"/>
                        <img 
                            src={imgMockupAfterProfile} 
                            alt="Profile page mockup." 
                            height={600} 
                            className="img"
                        />
                    </div>
                    <p>{t("projects.bakeryApp.designRefine.mockups.profilePage")}</p>
                    <p>{t("projects.bakeryApp.designRefine.mockups.sections")}</p>
                    <h3>{t("projects.bakeryApp.designRefine.keyMockups")}</h3>
                </div>
                <div>
                    <img 
                        src={imgBakeryApp} 
                        alt="Home page mockup." 
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgMockupBrowse} 
                        alt="Product browsing page mockup." 
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgMockupAfterProduct} 
                        alt="Product page mockup." 
                        height={500} 
                        className="img"
                    />
                    <img 
                        src={imgMockupCheckout} 
                        alt="Checkout page mockup." 
                        height={500} className="img"
                    />
                </div>
                <div className="text-wrapper left-aligned">
                    <h3>{t("projects.bakeryApp.designRefine.hifiPrototype.heading")}</h3>
                    <p>{t("projects.bakeryApp.designRefine.hifiPrototype.final")}</p>
                    <p>
                        {t("projects.bakeryApp.designRefine.hifiPrototype.prototypeText")}
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href="https://www.figma.com/proto/UIfMCbPeV2vzPdzClgawMY/Google-UX-Prototype?
                                node-id=415-129&scaling=min-zoom&page-id=415%3A128&starting-point-node-id=415%3A129"
                        >
                            {t("projects.bakeryApp.designRefine.hifiPrototype.prototypeLink")}
                        </a>
                        .
                        </p>
                    <h3>{t("projects.bakeryApp.designRefine.accessibility.heading")}</h3>
                    <p>
                        <span className="highlighted-text">1. </span>
                        {t("projects.bakeryApp.designRefine.accessibility.colors")}
                    </p>
                    <p>
                        <span className="highlighted-text">2. </span>
                        {t("projects.bakeryApp.designRefine.accessibility.icons")}
                    </p>
                    <p>
                        <span className="highlighted-text">3. </span>
                        {t("projects.bakeryApp.designRefine.accessibility.language")}
                    </p>
                    <p>
                        <span className="highlighted-text">4. </span>
                        {t("projects.bakeryApp.designRefine.accessibility.pictures")}
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
                            {t("projects.bakeryApp.takeaways.impact")}
                        </span>
                        {t("projects.bakeryApp.takeaways.impactText")}
                    </p>
                    <SchoolIcon className="icon"/>
                    <p className="text-wrapper__space">
                        <span className="highlighted-text">
                            {t("projects.bakeryApp.takeaways.whatLearned")}
                        </span>
                        {t("projects.bakeryApp.takeaways.whatLearnedText")}
                    </p>
                <div className="text-wrapper center-aligned">
                    <h3>{t("projects.bakeryApp.takeaways.nextSteps.heading")}</h3>
                    <p>
                        <span className="highlighted-text">1. </span>
                        {t("projects.bakeryApp.takeaways.nextSteps.usabilityStudy")}
                    </p>
                    <p>
                        <span className="highlighted-text">2. </span>
                        {t("projects.bakeryApp.takeaways.nextSteps.research")}
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BakeryApp;