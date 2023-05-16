import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';

const MyBackButton = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    
    return (
        <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowBackIcon className="back-icon"/>
            <p className="back-text">{t("buttons.back")}</p>
        </button>
    )
}

export default MyBackButton;