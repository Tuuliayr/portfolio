import React from 'react';
import Grid from '@mui/material/Grid';
import DownloadCV from './DownloadCV';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MyButton from '../base/myButton/MyButton';
import './myLinks.scss';

const MyLinks: React.FC = () => {

    return (
        <Grid container rowSpacing={3} direction="column" className="my-links">
            <Grid item xs={12}>
                <MyButton variant="text" type="link" label="LinkedIn" icon={<LinkedInIcon/>} link="https://www.linkedin.com/"></MyButton>
            </Grid>
            <Grid item xs={12}>
                <MyButton variant="text" type="link" label="Github" icon={<GitHubIcon/>} link="https://github.com/Tuuliayr"></MyButton>
            </Grid>
            <Grid item xs={12}>
                <DownloadCV/>
            </Grid>
        </Grid>
    );
}

export default MyLinks;