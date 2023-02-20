import React from 'react';
// import Card from '@mui/material/Card';
// import { CardContent, CardMedia, Typography } from '@mui/material';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import myImage from "../../static/images/votingroom.png";
import './projectCard.scss';

const ProjectCard: React.FC = () => {

    const {t} = useTranslation();

    return (
        <figure className="image-block">
            <img src={myImage} alt="" />
	        <figcaption>
		        <h3>
                    {t("projects.thesis.title")}
		        </h3>
		        <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
		        <button>
			        Read more
		        </button>
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