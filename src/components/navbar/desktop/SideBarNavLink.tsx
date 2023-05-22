import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

interface Props {
    destination: string;
    title: string;
    offset: number;
}

const SidebarNavLink: React.FC<Props> = ({destination, title, offset}) => {
    const {t} = useTranslation();
    
    return (
            <Link
                activeClass="active"
                to={destination}
                smooth={true}
                spy={true}
                offset={offset}
                duration={500}
            >
                {t(title)}
            </Link>
    )
}

export default SidebarNavLink;