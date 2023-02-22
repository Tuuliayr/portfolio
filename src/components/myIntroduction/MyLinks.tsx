import React from 'react';
import DownloadCV from './DownloadCV';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MyButton from '../base/myButton/MyButton';
import './myLinks.scss';

const MyLinks: React.FC = () => {

    return (
        <div className="links-container">
            <div className="links-linkedin">
                <MyButton variant="text" type="link" label="LinkedIn" size="large" icon={<LinkedInIcon/>} link="https://www.linkedin.com/"></MyButton>
            </div>
            <div className="links-github">
                <MyButton variant="text" type="link" label="Github" size="large" icon={<GitHubIcon/>} link="https://github.com/Tuuliayr"></MyButton>
            </div>
            <DownloadCV/>
        </div>
    );
}

export default MyLinks;