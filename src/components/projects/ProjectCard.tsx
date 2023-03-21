import React from 'react';
import { useTranslation } from 'react-i18next';
import MyButton from '../base/myButton/MyButton';

interface Props {
    title: string;
    date: string;
    role: string;
    tech: string;
    desc: string;
    myImg: string;
    myImgAlt: string;
}

const ProjectCard: React.FC<Props> = ({title, date, role, tech, desc, myImg, myImgAlt}) => {

    const {t} = useTranslation();

    return (
        <figure className="image-block">
            <img src={myImg} alt={myImgAlt} />
	        <figcaption>
		        <h3>
                    {t(title)}
		        </h3>
                <p>
                    {t(date)}
                </p>
                <p>
                    {t(role)}
                </p>
                <p>
                    {t(tech)}
                </p>
		        <p>
                    {t(desc)}
                </p>
                <div className="btn-align">
                    <MyButton
                        variant="contained"
                        label={t("buttons.readMore")}
                    />
                </div>
	        </figcaption>
        </figure>
    );
}

export default ProjectCard;