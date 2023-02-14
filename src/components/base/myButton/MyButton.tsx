import React from 'react';
import Button from '@mui/material/Button';
import './myButton.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    type?: "default" | "link" | "unselected" | "selected";
    variant: "contained" | "text" | "outlined";
    label: string;
    onClick?: () => void;
    submit?: boolean;
    icon?: React.ReactNode;
    link?: string;
    size?: "small" | "medium" | "large";
} 

const MyButton: React.FC<Props> = ({ type = "default", variant, label, onClick, submit, icon, link, size="medium"}) => {
    const {t} = useTranslation();

    return (
        <Button 
            variant={variant}
            className={type}
            onClick={onClick}
            type={submit ? "submit" : "button"}
            startIcon={icon}
            href={link}
            size={size}
        >
            {t(label)}
        </Button>
    );
}

export default MyButton;