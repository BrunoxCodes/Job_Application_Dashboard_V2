import { useState } from 'react';
import type{ ReactNode } from 'react'
import { LayoutDashboard, Form, BellRing, Settings } from 'lucide-react';

export type navsection = 'Dashboard' | 'Application' | 'Notification' | 'Setting';

export interface navitem {
    id: navsection;
    label: string;
    icon: ReactNode
}

export const navitems: navitem[] = [
    { id: 'Dashboard', label: 'Dashboard', icon: <><LayoutDashboard /></>},
    { id: 'Application', label: 'Application', icon: <><Form /></> },
    { id: 'Notification', label: 'Notification', icon: <><BellRing /></> },
    { id: 'Setting', label: 'Setting', icon: <><Settings /></> },
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