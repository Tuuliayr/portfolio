import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './languageSelector.scss';
import MyButton from '../base/myButton/MyButton';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const handleClick = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <Box className="language-selector">
            <Grid container direction="row" columnSpacing={2}>
                <Grid item>
                    <MyButton variant="outlined" type="secondary" label="EN" onClick={() => handleClick('en')}></MyButton>
                </Grid>
                <Grid item>
                    <MyButton variant="outlined" type="secondary" label="FI" onClick={() => handleClick('fi')}></MyButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LanguageSelector;

