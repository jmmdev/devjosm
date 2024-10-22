import { useEffect, useState } from 'react';
import {RiGithubFill, RiLinkedinBoxFill, RiMailFill} from 'react-icons/ri';
import Anchor from './anchor';

export default function Header({subtitle, shortText,sections, language}) {

    const [active, setActive] = useState("#about");

    useEffect(() => {
        const onScroll = (event) => {
          const projectsHeight = document.getElementById("about").offsetHeight;
    
            if (window.scrollY >= 0 && window.scrollY < projectsHeight) {
                setActive("#about");
                return;
            }

          if (window.scrollY >= projectsHeight) {
            setActive("#projects");
            return;
          }
        }
    
        window.addEventListener('scroll', onScroll);
    
        return () => {
          window.removeEventListener('scroll', onScroll);
        }
      }, [])

      const GetAnchors = () => {
        const output = [];
        for (const s in sections) {
            output.push(
                <li key={sections[s].href}>
                    <Anchor href={sections[s].href} active={active} setActive={setActive} text={sections[s][language]}/>
                </li>
            )
        }
        return output;
      }

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-5xl font-bold text-zinc-200">
                    <a href="/">José Mª Martín</a>
                </h1>
                <h2 className="mt-1 text-2xl font-medium text-zinc-200">
                    {subtitle}
                </h2>
                <p className="mt-3 max-w-xs leading-tight">
                    {shortText}
                </p>
            
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        <GetAnchors />
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center">
                <li className="mr-5 text-xs shrink-0">
                    <a className="block hover:text-zinc-200" href="https://github.com/jmmdev" target="_blank" rel="noreferrer noopener" title="GitHub">
                        <span className="sr-only">GitHub</span>
                        <RiGithubFill size={32} />
                    </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                    <a className="block hover:text-zinc-200" href="https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-mart%C3%ADn-mu%C3%B1oz-95a464195/" target="_blank" rel="noreferrer noopener" title="LinkedIn">
                        <span className="sr-only">LinkedIn</span>
                        <RiLinkedinBoxFill size={32}/>
                    </a>
                </li>
                <li className="mr-5 text-xs shrink- 0">
                    <a className="block hover:text-zinc-200" href='mailto:devjosm@gmail.com'>
                        <span className="sr-only">Email</span>
                        <RiMailFill size={32} />
                    </a>
                </li>
            </ul>
        </header>
    )
}