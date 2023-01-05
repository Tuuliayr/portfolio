import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={4}>
                <ProjectCard/>
            </Grid>
            <Grid item xs={4}>
                <ProjectCard/>
            </Grid>
            <Grid item xs={4}>
                <ProjectCard/>
            </Grid>

        </Grid>
    );
}

export default Projects;