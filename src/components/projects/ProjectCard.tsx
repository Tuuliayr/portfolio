import React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MyTag from '../base/myTag/MyTag';

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
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="card">
            <div className="card__image">
                <img src={myImg} alt={myImgAlt}/>
            </div>
            <div className="card__info-container">
                <div className="card__info">
                    <div className="card__info-title">
                        <h3>{t(title)}</h3>
                    </div>
                    <div className="card__info-icon">
                        <IconButton className={open ? "icon-btn icon-btn__rotate" : "icon-btn"} onClick={handleOpen}>
                            <ArrowDownIcon fontSize="large"/>
                        </IconButton>
                    </div>
                </div>
                {open ? (
                    <div className={`card__info-collapsible ${open ? "open" : "close"}`}>
                        <div className="">
                            <p>
                                {t(date)}
                            </p>
                            <MyTag label={t(tech)} />
                        </div>
                            <p>
                                {t(desc)}
                            </p>
                        <div className="btn-align btn-align__right">
                            <MyButton
                                variant="contained"
                                label={t("buttons.readMore")}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default ProjectCard;