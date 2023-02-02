import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './LanguageSelector.scss';

const LanguageSelector: React.FC = () => {

    return(
        <Box className="language-selector">
            <Grid container direction="row" columnSpacing={2}>
                <Grid item>
                    <Button variant="contained">EN</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">FI</Button>
                </Grid>
            </Grid>
        </Box>

    );
}

export default LanguageSelector;

