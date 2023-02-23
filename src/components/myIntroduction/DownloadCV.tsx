import React from 'react';
import cv from "../../static/pdf/cv.pdf";
import DownloadIcon from '@mui/icons-material/Download';
import MyButton from '../base/myButton/MyButton';

const DownloadCV: React.FC = () => {

    const handleClick = () => {
        
        fetch(cv).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = cv;
                alink.click();
            })
        })
    }

    return (
        <MyButton
            variant="contained"
            label="CV.PDF"
            onClick={handleClick}
            startIcon={<DownloadIcon/>}
            size="large"
        ></MyButton>
    );

}

export default DownloadCV;