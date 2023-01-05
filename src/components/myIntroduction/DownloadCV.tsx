import React from 'react';
import Button from '@mui/material/Button';
import cv from "../../static/pdf/cv.pdf";

const DownloadCV: React.FC = () => {

    const buttonClicked = () => {
        
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

    return <Button variant="contained" onClick={buttonClicked}>CV.pdf</Button>

}

export default DownloadCV;