import { useState } from 'react';

export type navsection = 'Dashboard' | 'Application' | 'Notification' | 'Setting';

export interface navitem {
    id: navsection;
    label: string;
}

export const navitems: navitem[] = [
    { id: 'Dashboard', label: 'Dashboard' },
    { id: 'Application', label: 'Application' },
    { id: 'Notification', label: 'Notification' },
    { id: 'Setting', label: 'Setting' },
];

export function useSidebar(defaultSection: navsection = 'Dashboard') {
    const [activesection, setActiveSection] = useState<navsection>(defaultSection);

    const selectsection = (section: navsection) => {
        setActiveSection(section);
    };

    return {
        activesection,
        selectsection,
        navitems,
    };
}

export default useSidebar;