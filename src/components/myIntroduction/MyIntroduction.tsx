import React from 'react';
import Grid from '@mui/material/Grid';
import MyPicture from './MyPicture';
import MyLinks from './MyLinks';
import './myIntroduction.scss';
import { useTranslation } from 'react-i18next';

const MyIntroduction: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div>
            <Grid container direction="row" className="my-introduction">
                <Grid item xs={3} className="grid-picture">
                    <div className="grid-picture__my-pic">
                        <MyPicture/>
                    </div>
                </Grid>
                <Grid item xs={7} className="grid-about-me">
                    <p className="grid-about-me__paragraph">
                        {t("myIntroduction.aboutMe")}
                    </p>
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