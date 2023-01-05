import React from 'react';
import Grid from '@mui/material/Grid';
import DownloadCV from './DownloadCV';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import './MyLinks.scss';

const MyLinks: React.FC = () => {

    return (
        <Grid container rowSpacing={3} direction="column" className="my-links">
            <Grid item xs={12}>
                <LinkedInIcon/>
                <a href="https://www.linkedin.com/" rel="noreferrer">LinkedIn</a>
            </Grid>
            <Grid item xs={12}>
                <GitHubIcon/>
                <a href="https://github.com/Tuuliayr" rel="noreferrer">Github</a>
            </Grid>
            <Grid item xs={12}>
                <DownloadCV/>
            </Grid>
        </Grid>
    );
}

export default MyLinks;