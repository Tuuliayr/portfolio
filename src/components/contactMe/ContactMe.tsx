import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTranslation } from 'react-i18next';
import './contactMe.scss';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactMe: React.FC = () => {
    
    const {t} = useTranslation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setTimeout(() => {
        setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
        <>
            <h2>Thank you!</h2>
            <div>We'll be in touch soon.</div>
        </>
        );
    }

    return (
        <Box
            component="form"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
            className="contact-me"
        >
            <h2 className="contact-title">
                {t("contactMe.title")}
            </h2>
            <div>
                <ArrowDownwardIcon className="arrow-downward"/>
            </div>
            <div>
                <TextField required id="your-name" label={t("contactMe.name")} type="text" variant="filled" margin="normal" sx={{width: "50%"}} />
            </div>
            <div>
                <TextField required id="your-email" label={t("contactMe.email")} type="email" variant="filled" margin="normal" sx={{width: "50%"}}/>
            </div>
            <div>
                <TextField required id="your-subject" label={t("contactMe.subject")} type="text" variant="filled" margin="normal" sx={{width: "50%"}}/>
            </div>
            <div>
                <TextField required fullWidth id="your-message" label={t("contactMe.message")} variant="filled" multiline minRows={5} margin="normal" sx={{width: "50%"}}/>
            </div>
            <div>
                <Button type="submit" variant="contained">{t("contactMe.submit")}</Button>
            </div>
        </Box>
    );
    };

export default ContactMe;