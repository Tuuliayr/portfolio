import React from 'react';
import Avatar from '@mui/material/Avatar';
import image from "../../static/images/me.jpg";

const MyPicture: React.FC = () => {
    return <Avatar alt="Tuuli" src={image} className="my-pic"/>
}

export default MyPicture;