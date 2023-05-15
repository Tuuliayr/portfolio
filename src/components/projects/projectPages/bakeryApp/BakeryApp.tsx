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
// import LanguageSelector from '../../../languageSelector/LanguageSelector';
import SidebarNav from '../../../navbar/desktop/SidebarNav';
import MyTag from '../../../base/myTag/MyTag';
import Footer from '../../../footer/Footer';
// import TechTags from '../../../../models/TechTags';

const BakeryApp: React.FC = () => {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bakery-app">
            {/* <LanguageSelector/> */}
            <SidebarNav/>
            <div className="cover" id="cover">
                <img src={imgBakeryApp} alt="Bakery mobile ordering app's home page." height={600}></img>
                <div className="cover__text">
                    <h1>{t("projects.bakeryApp.title")}</h1>
                    <p>{t("projects.bakeryApp.desc")}</p>
                    <MyTag label={t("projects.techs.FIGMA")}/>
                </div>
            </div>
            <div className="overview" id="overview">
                <div className="text-wrapper center-aligned">
                    <h1>Overview</h1>
                    <h3>{t("projects.bakeryApp.date")}</h3>
                </div>
                <HelpOutlineIcon className="icon"/>
                <p><span className="highlighted-text">Problem:</span> Some people have limitations on what they can eat or need more information on their food for other reasons. 
                    This information isn't always easy to find.</p>
                <StarOutlineIcon className="icon"/>
                <p><span className="highlighted-text">Goal:</span> Design an app that makes finding suitable food options faster and more comfortable.</p>
            </div>
            <div className="understanding" id="understanding">
                <div className="text-wrapper left-aligned">
                    <h1>Understanding</h1>
                    <h3>User research summary</h3>
                    <p>The competitive audit showed lack of ingredient and nutrition information on other ordering apps/websites.</p>
                    <p>I created empathy maps to better understand the users' wants and needs. The user group I focused on was working adults 
                        between the ages of 20 and 60 years old. Empathy maps were then refined into personas.</p>
                    <p>Research revealed three major user pain points.</p>
                    <h3>Pain points</h3>
                    <p><span className="highlighted-text">Inconvenience</span> - Trying to find information about allergens and nutrition values feels inconvenient.</p>
                    <p><span className="highlighted-text">Time</span> - Finding suitable food options takes too long.</p>
                    <p><span className="highlighted-text">Uncertainty</span> - Not sure what the food contains. “Can I eat this?"</p>
                </div>
                <div className="text-wrapper left-aligned">
                <h3>Persona - Manu</h3>
                <img 
                    src={imgPersona} 
                    alt="Persona: Manu." 
                    height={500} 
                    className="img"
                />
                <p><span className="highlighted-text">Problem statement</span> - Manu is a junior employee in an HR consulting firm who needs a faster way to find 
                    suitable food options for their coworkers because of the coworkers' allergies.</p>
                <h3>User journey map - Manu</h3>
                <img 
                    src={imgUserJourney} 
                    alt="User journey map: Manu." 
                    height={500} 
                    className="img"
                />
                <p>Mapping Manu's journey revealed that a way to filter the products could <span className="highlighted-text">quicken the ordering process</span> and 
                    <span className="highlighted-text"> help the users make more confident choices</span>.</p>
                </div>
            </div>
            <div className="design-start" id="designStart">
                <div className="text-wrapper left-aligned">
                    <h1>Starting the design</h1>
                    <p>Pälä pälä design process?</p>
                    <h3>Paper wireframes</h3>
                    <p>Wireframing on paper enabled quick iteration and trying out different layouts for the home page before moving on to digital wireframing.</p>
                    <img 
                        src={imgPaperWireframe} 
                        alt="Five different paper wireframe versions of the home page." 
                        height={400} 
                        className="img"
                    />
                    <p>I ideatiated five different versions of the home page.</p>
                    <img 
                        src={imgPaperWireframeRefined} 
                        alt="Refined version of the home page." 
                        height={400} 
                        className="img"
                    />
                    <p>After assessing the best features of the differend wirefames I built a refined version of the home screen.</p>
                    <h3>Digital wireframes</h3>
                    <img 
                        src={imgDigitalWireframes} 
                        alt="Digital wireframes." 
                        height={500} 
                        className="img"
                    />
                    <p>As the initial design phase continued, I made sure to base screen designs on findings from the user research.</p>
                    <h3>Low-fidelity prototype</h3>
                    <p>I connected the digital wireframe screens in order to create the primary user flow, which presents the process of ordering bakery goods.</p>
                    <p>View bakery mobile app's <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/UIfMCbPeV2vzPdzClgawMY/Google-UX-Prototype?
                    node-id=3%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1"> low-fidelity prototype</a>.</p>
                    <h3>Usability study findings</h3>
                    <p>From testing the low-fidelity prototype on five users, I could determine that the following changes were needed:</p>
                    <p><span className="highlighted-text">1.</span> Back button was missing from the profile page.</p>
                    <p><span className="highlighted-text">2.</span> Users felt that reading ingredient lists is tiring and there should be quicker way to find out, 
                        if the product is suitable for their dietary needs.</p>
                    <p><span className="highlighted-text">3.</span> Users needed a clearer way to access orders.</p>
                </div>
            </div>
            <div className="design-refine" id="designRefine">
                <div className="text-wrapper left-aligned">
                    <h1>Refining the design</h1>
                    <h3>Mockups</h3>
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
                    <p>Dietary tags were added to product page. Tags will help the user quickly decide if the product is suitable for them, without reading the ingredient list. 
                        The layout was modified to fit these new elements.</p>
                    <p>“Add to cart” button was accompanied by an element that shows how many items have been added so that the user can add many items at
                        once and see how many items have been already added.</p>
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
                    <p>Profile page was redesigned and missing back button added. All the user information can be accessed and edited in a uniform way.</p>
                    <p>Information was divided into small sections, which makes it easy to read. Orders can be found at the top of the page.</p>
                    <h3>Key mockups</h3>
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
                    <h3>High-fidelity prototype</h3>
                    <p>The final high-fidelity prototype presented cleaner user flows for navigating the app and ordering bakery goods.</p>
                    <p>View bakery mobile app's <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/UIfMCbPeV2vzPdzClgawMY/Google-UX-Prototype?
                    node-id=415-129&scaling=min-zoom&page-id=415%3A128&starting-point-node-id=415%3A129"> high-fidelity prototype</a>.</p>
                    <h3>Accessibility</h3>
                    <p><span className="highlighted-text">1.</span> WCAG guidelines on color contrast were followed.</p>
                    <p><span className="highlighted-text">2.</span> Used icons to help make navigation easier.</p>
                    <p><span className="highlighted-text">3.</span> Kept language simple.</p>
                    <p><span className="highlighted-text">4.</span> Used pictures for the products.</p>
                </div>
            </div>
            <div className="takeaways" id="takeaways">
                <div className="text-wrapper center-aligned">
                    <h1>Takeaways</h1>
                </div>
                    <PeopleIcon className="icon"/>
                    <p><span className="highlighted-text">Impact:</span> The app makes users feel like they can make informed decisions on their bakery ordering choices.</p>
                    <SchoolIcon className="icon"/>
                    <p><span className="highlighted-text">What I learned:</span> I learned to trust the iteration process more. It can feel overwhelming to start from nothing, but I am happy
                        how far I have gotten with this app design.</p>
                <div className="text-wrapper center-aligned">
                    <h3>Next steps</h3>
                    <p><span className="highlighted-text">1.</span> Conduct another round of usability studies to validate whether the pain points users experienced have
                        been effectively addressed.</p>
                    <p><span className="highlighted-text">2.</span> Conduct more user research to determine any new areas of need.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BakeryApp;