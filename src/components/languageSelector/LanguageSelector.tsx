import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './languageSelector.scss';
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
        <Box className="language-selector">
            <Grid container direction="row" columnSpacing={2}>
                <Grid item>
                    <MyButton variant={selection === "en" ? "contained" : "outlined"} type={selection === "en" ? "selected" : "unselected"} label="EN" onClick={() => handleClick('en')}></MyButton>
                </Grid>
                <Grid item>
                    <MyButton variant={selection === "fi" ? "contained" : "outlined"} type={selection === "fi" ? "selected" : "unselected"} label="FI" onClick={() => handleClick('fi')}></MyButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LanguageSelector;

