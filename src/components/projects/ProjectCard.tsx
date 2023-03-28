import React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
        <div className="card">
            <div className="card__image">
            <img src={myImg} alt={myImgAlt}/>
            </div>
            <div className="card__info">
                <div className="card__info-title">
                    <h3>{t(title)}</h3>
                </div>
                <div className="card__info-icon">
                    <IconButton className="icon-btn">
                        <ArrowDownIcon fontSize="large"/>
                    </IconButton>
                </div>
                {/* <svg className="card__info-icon"/> */}
            </div>
        </div>

        // <figure className="image-block">
        //     <img src={myImg} alt={myImgAlt} />
	    //     <figcaption>
		//         <h3>
        //             {t(title)}
		//         </h3>
        //         <p>
        //             {t(date)}
        //         </p>
        //         <p>
        //             {t(role)}
        //         </p>
        //         <p>
        //             {t(tech)}
        //         </p>
		//         <p>
        //             {t(desc)}
        //         </p>
        //         <div className="btn-align">
        //             <MyButton
        //                 variant="contained"
        //                 label={t("buttons.readMore")}
        //             />
        //         </div>
	    //     </figcaption>
        // </figure>
    );
}

export default ProjectCard;