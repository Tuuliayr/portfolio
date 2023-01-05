import React from 'react';
import Button from '@mui/material/Button';
import MyPicture from './MyPicture';
import DownloadCV from './DownloadCV';

const MyIntroduction: React.FC = () => {
    return (
        <div>
            <div><MyPicture/></div>
            <div><DownloadCV/></div>
        </div>
    );
}

export default MyIntroduction;