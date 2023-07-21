import React from 'react';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

interface Props {
    id: string;
    className: string;
    label: string;
    type?: "text" | "email";
    multiline?: boolean;
    minRows?: number;
    name: string;
}

const MyTextfield: React.FC<Props> = ({id, className, label, type, multiline, minRows, name}) => {
    const {t} = useTranslation();

    return (
        <TextField
            required
            id={id}
            className={className}
            label={t(label)}
            type={type}
            variant="filled"
            margin="normal"
            multiline={multiline}
            minRows={minRows}
            InputProps={{name: name}}
        >

        </TextField>

    );
}

export default MyTextfield;