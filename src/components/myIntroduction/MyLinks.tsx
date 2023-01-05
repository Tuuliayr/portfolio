import React from 'react';
import Grid from '@mui/material/Grid';
import DownloadCV from './DownloadCV';

const MyLinks: React.FC = () => {

    return (
        <Grid container>
            <Grid item>
                <a href="https://www.youtube.com/" rel="noreferrer">LinkedIn</a>
            </Grid>
            <Grid item>
                <a href="https://github.com/Tuuliayr" rel="noreferrer">Github</a>
            </Grid>
            <Grid item>
                <DownloadCV/>
            </Grid>
        </Grid>
    );
}

export default MyLinks;