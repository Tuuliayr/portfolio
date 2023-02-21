import React from 'react';
import { useTranslation } from 'react-i18next';
import myImage from "../../static/images/votingroom.png";
import './projectCard.scss';
import MyButton from '../base/myButton/MyButton';

const ProjectCard: React.FC = () => {

    const {t} = useTranslation();

    return (
        <figure className="image-block">
            <img src={myImage} alt="" />
	        <figcaption>
		        <h3>
                    {t("projects.thesis.title")}
		        </h3>
                <p>
                    {t("projects.thesis.date")}
                </p>
                <p>
                    {t("projects.thesis.role")}
                </p>
                <p>
                    {t("projects.thesis.tech")}
                </p>
		        <p>
                    {t("projects.thesis.desc")}
                </p>
		        <MyButton
                    variant="contained"
                    label={t("buttons.readMore")}
                />
	        </figcaption>
        </figure>
    );
}

export default ProjectCard;