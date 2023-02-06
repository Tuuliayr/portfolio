import React from 'react';
import Avatar from '@mui/material/Avatar';
import image from "../../static/images/me.jpg";

const MyPicture: React.FC = () => {
    return <Avatar alt="Tuuli" src={image} sx={{ width: 300, height: 300 }}/>
}

export default MyPicture;