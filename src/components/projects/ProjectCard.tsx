import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import myImage from "../../static/images/myboxes.jpg";
import './projectCard.scss';

const ProjectCard: React.FC = () => {
    return (
        <Card>
            <CardMedia
                image={myImage}
                title="pic"
                className="card-pic"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    My role: Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Technologies: Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Read more</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;