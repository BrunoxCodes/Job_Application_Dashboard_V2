import type { navsection, navitem } from '../hooks/usesidebar';

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
    username,
    useremail,
    iscollapsed,
    activesection,
    navitems,
    ontoggle,
    onselectsection,
}: sidenavProps) => {
    const initial = username.charAt(0).toUpperCase();

    return (
        <aside className={`flex flex-col bg-slate-900 text-white transition-all duration-300 ${iscollapsed ? 'w-20' : 'w-64'}`}>
            <div className="p-4 flex items-center justify-between border-b border-slate-700">
                {!iscollapsed && <span className="font-bold text-lg">Job Tracker</span>}
                <button
                    type="button"
                    onClick={ontoggle}
                    aria-label="Toggle navigation"
                    className="p-2 rounded bg-slate-800 hover:bg-slate-700 text-xs"
                >
                    {iscollapsed ? 'Expand' : 'Collapse'}
                </button>
            </div>

            <div className="p-4 flex items-center gap-3 border-b border-slate-700" title={useremail}>
                <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
                    {initial}
                </span>
                {!iscollapsed && (
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-medium truncate">{username}</span>
                        <small className="text-xs text-slate-400 truncate">{useremail}</small>
                    </div>
                )}
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
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                            {iscollapsed ? item.label.charAt(0) : item.label}
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
};

export default NavBar;
