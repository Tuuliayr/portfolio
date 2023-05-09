import React from 'react';
import LanguageSelector from '../../languageSelector/LanguageSelector';

const TopBarMobile: React.FC = () => {
    return (
        <div className="top-bar">
            <LanguageSelector/>
        </div>
    );
}

export default TopBarMobile;