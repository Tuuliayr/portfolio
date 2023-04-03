import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    label: string;
}

const MyTag: React.FC<Props> = ({label}) => {
    const {t} = useTranslation();

    return (
        <div className="tag">
            {t(label)}
        </div>
    )
}

export default MyTag;