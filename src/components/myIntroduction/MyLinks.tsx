import React from 'react';
import DownloadCV from './DownloadCV';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import MyButton from '../base/myButton/MyButton';
import './myLinks.scss';

const MyLinks: React.FC = () => {

    const handleClick = (url: string) => {
        window.open(url, "_blank", "noreferrer");
    }

    return (
        <div className="links-container">
            <div className="links-linkedin">
                <MyButton 
                    variant="text"
                    type="link"
                    label="LinkedIn"
                    size="large"
                    startIcon={<LinkedInIcon/>}
                    endIcon={<OpenInNewIcon/>}
                    onClick={() => handleClick("https://www.linkedin.com/")}
                />
            </div>
            <div className="links-github">
                <MyButton
                    variant="text"
                    type="link"
                    label="Github"
                    size="large"
                    startIcon={<GitHubIcon/>}
                    endIcon={<OpenInNewIcon/>}
                    onClick={() => handleClick("https://github.com/Tuuliayr")}
                />
            </div>
            <DownloadCV/>
        </div>
    );
}

export default MyLinks;