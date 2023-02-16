import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import myImage from "../../static/images/votingroom2.png";
import './projectCard.scss';

const ProjectCard: React.FC = () => {

    const {t} = useTranslation();

    return (
        <Card>
            <CardMedia
                image={myImage}
                title="pic"
                className="card-pic"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {t("projects.thesis.title")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {t("projects.thesis.role")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {t("projects.thesis.tech")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {t("projects.thesis.desc")}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Read more</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;