import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { initializeApp } from "firebase/app";
// import { getFirestore, addDoc, collection } from "firebase/firestore"; 
import MyButton from '../base/myButton/MyButton';
import MyTextfield from '../base/myTextField/MyTextField';

const FORM_ENDPOINT = ""; // TODO - fill on the later step


const ContactMe: React.FC = () => {
    
    const {t} = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');

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
        <div className="contact-me" id="contactMe">
            <h2>{t("contactMe.title")}</h2>
            <p className="contact-me__p">
                {t("contactMe.desc")} 
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="http://www.linkedin.com/in/tuuli-ayravainen"
                >
                    {t("contactMe.linkedin")}
                </a>
            </p>
            <svg className="arrow-down"/>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                className="contact-me__form"
            >
                <div>
                    <MyTextfield
                        id="your-name"
                        className="text-field"
                        label={t("contactMe.name")}
                        type="text"
                    />
                </div>
                <div>
                    <MyTextfield
                        id="your-email"
                        className="text-field"
                        label={t("contactMe.email")}
                        type="email"
                    />
                </div>
                <div>
                    <MyTextfield
                        id="your-subject"
                        className="text-field"
                        label={t("contactMe.subject")}
                        type="text"
                    />
                </div>
                <div>
                    <MyTextfield
                        id="your-message"
                        className="text-field-multi"
                        label={t("contactMe.message")}
                        multiline
                        minRows={6}
                    />
                </div>
                <div className="btn-align btn-align__center">
                    <MyButton 
                        submit
                        variant="contained"
                        label="buttons.submit"
                        size="large"
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactMe;