import React from 'react';
//import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MyPicture from './MyPicture';
import MyLinks from './MyLinks';
import './MyIntroduction.scss';

const MyIntroduction: React.FC = () => {
    return (
        <div>
            <Grid container direction="row" className="my-introduction">
                <Grid item xs={3} className="grid-picture">
                    <div className="grid-picture__my-pic">
                        <MyPicture/>
                    </div>
                </Grid>
                <Grid item xs={7} className="grid-info-about-me">
                    <p className="grid-info-about-me__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Grid>
                <Grid item xs={2} className="grid-links">
                    <div className="grid-links__important">
                        <MyLinks/>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default MyIntroduction;