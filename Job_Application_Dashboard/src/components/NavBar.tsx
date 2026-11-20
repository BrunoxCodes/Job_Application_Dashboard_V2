import type { navsection, navitem } from '../hooks/usesidebar';
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface sidenavProps {
    username: string;
    useremail: string;
    iscollapsed: boolean;
    activesection: navsection;
    navitems: navitem[];
    ontoggle: () => void;
    onselectsection: (section: navsection) => void;
}

const NavBar = ({
    iscollapsed,
    activesection,
    navitems,
    ontoggle,
    onselectsection,
}: sidenavProps) => {
    return (
        <aside className={`flex flex-col h-screen bg-(--surface) text-(--text) border-r border-(--border) transition-all duration-300 ${iscollapsed ? 'w-20' : 'w-64'}`}>
            <div className="p-4 flex items-center justify-between border-b border-(--border)">
                <button
                    type="button"
                    onClick={ontoggle}
                    aria-label="Toggle navigation"
                    className="p-2 rounded bg-(--surface-secondary) hover:bg-(--border) text-xs text-(--text)"
                >
                    {iscollapsed ? <ChevronsRight /> : <ChevronsLeft />}
                </button>
            </div>

            <nav className="flex-1 p-3 flex flex-col gap-2">
                {navitems.map((item) => {
                    const isactive = activesection === item.id;
                    return (
                        <button
                            type="button"
                            key={item.id}
                            onClick={() => onselectsection(item.id)}
                            aria-current={isactive ? 'page' : undefined}
                            className={`flex items-center px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                                isactive
                                    ? 'bg-(--primary) text-white'
                                    : 'text-(--text-muted) hover:bg-(--surface-secondary) hover:text-(--text)'
                            }`}
                        >
                            {iscollapsed ? item.icon : item.label}
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
};

export default NavBar;
