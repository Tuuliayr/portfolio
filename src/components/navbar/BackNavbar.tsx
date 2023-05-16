import React from 'react';
import LanguageSelector from '../languageSelector/LanguageSelector';
import MyBackButton from '../base/myBackButton/MyBackButton';

const BackNavbar: React.FC = () => {
    return (
        <div className="back-navbar">
            <MyBackButton/>
            <LanguageSelector/>
        </div>
    );
}

export default BackNavbar;