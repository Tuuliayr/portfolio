import React from 'react';
// import Card from '@mui/material/Card';
// import { CardContent, CardMedia, Typography } from '@mui/material';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import myImage from "../../static/images/votingroom.png";
import './projectCard.scss';
import MyButton from '../base/myButton/MyButton';

const ProjectCard: React.FC = () => {

    const {t} = useTranslation();

    return (
        <figure className="image-block">
            <img src={myImage} alt="" />
	        <figcaption>
		        <h3>
                    {t("projects.thesis.title")}
		        </h3>
		        <p> {t("projects.thesis.desc")} </p>
		        <MyButton
                    variant="contained"
                    label={t("buttons.readMore")}
                />
	        </figcaption>
        </figure>

        // <Card>
        //     <CardMedia
        //         image={myImage}
        //         title="pic"
        //         className="card-pic"
        //     />
        //     <CardContent>
        //         <Typography gutterBottom variant="h5">
        //             {t("projects.thesis.title")}
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //             {t("projects.thesis.role")}
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //             {t("projects.thesis.tech")}
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //         {t("projects.thesis.desc")}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Read more</Button>
        //     </CardActions>
        // </Card>
    );
}

export default ProjectCard;