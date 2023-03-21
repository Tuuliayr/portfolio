import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

interface Props {
    type?: "default" | "link" | "unselected" | "selected";
    variant: "contained" | "text" | "outlined";
    label: string;
    onClick?: () => void;
    submit?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode; 
    link?: string;
    size?: "small" | "medium" | "large";
} 

const MyButton: React.FC<Props> = ({ type = "default", variant, label, onClick, submit, startIcon, endIcon, link, size="medium"}) => {
    const {t} = useTranslation();

    return (
        <Button 
            variant={variant}
            className={type}
            onClick={onClick}
            type={submit ? "submit" : "button"}
            startIcon={startIcon}
            endIcon={endIcon}
            href={link}
            size={size}
        >
            {t(label)}
        </Button>
    );
}

export default MyButton;