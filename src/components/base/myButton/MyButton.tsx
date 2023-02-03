import React from 'react';
import Button from '@mui/material/Button';
import './myButton.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    type?: "default" | "pink" | "link" | "transparent";
    label: string;
    onClick: () => void;
} 

const MyButton: React.FC<Props> = ({ type = "default", label }) => {
    const {t} = useTranslation();

    return (
        <Button variant="contained" className={type}>
            {t(label)}
        </Button>
    );
}

export default MyButton;