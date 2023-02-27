import React from 'react';
import MyPicture from './MyPicture';
import MyLinks from './MyLinks';
import './myIntroduction.scss';
import { useTranslation } from 'react-i18next';

const MyIntroduction: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="my-intro-container" id="aboutMe">
            <div className="my-pic">
                <MyPicture/>
            </div>
            <div className="about-me">
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