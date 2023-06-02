import React from 'react';
import image from "../../static/images/me.jpg";

const MyPicture: React.FC = () => {
    return <img src={image} alt="Tuuli" className="my-pic outline-border"/>
}

export default MyPicture;