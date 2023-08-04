import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import MyTextfield from '../base/myTextField/MyTextField';
import MyToast from '../base/myToast/MyToast';

const ContactMe: React.FC = () => {
    
    const {t} = useTranslation();
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID || "", 
            process.env.REACT_APP_TEMPLATE_ID || "", 
            form.current || "",
            process.env.REACT_APP_PUBLIC_KEY
            )
            .then((result) => {
                toast.success(t("toast.messageSent"), {
                    position: toast.POSITION.TOP_CENTER
                });
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );
    };

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
                ref={form}
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
                        name="user_name"
                    />
                </div>
                <div>
                    <MyTextfield
                        id="your-email"
                        className="text-field"
                        label={t("contactMe.email")}
                        type="email"
                        name="user_email"
                    />
                </div>
                <div>
                    <MyTextfield
                        id="your-subject"
                        className="text-field"
                        label={t("contactMe.subject")}
                        type="text"
                        name="subject"
                    />
                </div>
                <div>
                    <MyTextfield
                        id="your-message"
                        className="text-field-multi"
                        label={t("contactMe.message")}
                        multiline
                        minRows={6}
                        name="message"
                    />
                </div>
                <div className="btn-align btn-align__center">
                    <MyToast/>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;