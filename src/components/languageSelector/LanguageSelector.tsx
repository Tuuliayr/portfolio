import React, {useState} from 'react';
import MyButton from '../base/myButton/MyButton';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [selection, setSelection] = useState("en");

    const handleClick = (language: string) => {
        i18n.changeLanguage(language);

        if (language === "en") {
            setSelection("en");
        } else {
            setSelection("fi");
        }
    }

    return (
        <div className="languages-container">
            <div className="language-en">
                <MyButton 
                    variant={selection === "en" ? "contained" : "outlined"}
                    type={selection === "en" ? "selected" : "unselected"}
                    label="EN"
                    onClick={() => handleClick('en')}
                />
            </div>
            <div className="language-fi">
                <MyButton
                    variant={selection === "fi" ? "contained" : "outlined"}
                    type={selection === "fi" ? "selected" : "unselected"}
                    label="FI"
                    onClick={() => handleClick('fi')}
                />
            </div>
        </div>
    );
}

export default LanguageSelector;

