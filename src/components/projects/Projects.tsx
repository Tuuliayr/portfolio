import React from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {

    const {t} = useTranslation();

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <h2>{t("projects.title")}</h2>
            </Grid>
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