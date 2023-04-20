import React from 'react';
import MediaQuery from 'react-responsive';
import MyPicture from './MyPicture';
import MyLinks from './MyLinks';
import { useTranslation } from 'react-i18next';

const MyIntroduction: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="my-intro-container" id="aboutMe">
            <MediaQuery minWidth={320}>
                <div className="my-pic">
                    <MyPicture/>
                </div>
            </MediaQuery>
            <div className="about-me">
                <h1 className="greeting__p">
                    {t("myIntroduction.greeting")}
                </h1>
                <p className="about-me__p">
                    {t("myIntroduction.aboutMe")}
                </p>
            </div>
            <div className="my-links">
                <MyLinks/>
            </div>
        </div>
    );
}

export default MyIntroduction;