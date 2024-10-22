export default function Anchor({href, text, active, setActive, tabIndex}) {
    return (
        <a className={`${active === href ? "active " : ""}group flex items-center py-3`} href={href}>
            <span className={`nav-text mr-2 text-sm font-bold uppercase tracking-widest ${active === href ? "text-base" : "text-sm"} ${active === href ? "text-violet-300" : "text-zinc-400"} group-hover:text-base group-hover:${active === href ? "text-violet-300" : "text-zinc-200"}`}>{text}</span>
            
            {active === href &&
            <span className="nav-indicator transition-all text-base text-violet-300 pb-0.5">{"◄"}</span>
            }
        </a>
    )
}