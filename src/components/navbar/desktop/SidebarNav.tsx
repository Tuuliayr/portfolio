import React from 'react';
import SidebarNavLink from './SideBarNavLink';

interface Props {
    destinations: string[];
    titles: string[];
    offsets: number[];
}

const SidebarNav: React.FC<Props> = ({destinations, titles, offsets}) => {
    
    return (
        <div className="sidebar">
                <div className="links">
                    {destinations.map((des, i) =>
                        <SidebarNavLink
                            destination={des}
                            title={titles[i]}
                            offset={offsets[i]}
                        />
                    )}
                </div>
            </div>
    )
}

export default SidebarNav;