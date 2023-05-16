import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';

const MyBackButton = () => {
    const navigate = useNavigate();
    
    return (
        <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowBackIcon className="back-icon"/>
            <p className="back-text">Back</p>
        </button>
    )
}

export default MyBackButton;