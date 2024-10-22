import { useEffect } from "react";
import Project from "./project";

export default function Projects({title, projects, language, footer, tokens, links}) {

    useEffect(() => {
        const setFooterText = () => {
            let output = "";
            const baseText = footer[language];
    
            const baseTokens = baseText.split("*token*").filter(i => i);
            const tokensToReplace = tokens[language].split(', ').filter(i => i);
            const linkTokens = links.split(', ').filter(i => i);
    
            while (tokensToReplace.length > 0) {
                output += `<a class="font-medium text-zinc-400 hover:text-violet-300" href="${linkTokens.shift()}">${tokensToReplace.shift()}</a>`;
                output += baseTokens.shift();
            }
    
            while (baseTokens.length > 0) {
                output += baseTokens.shift();
            }
            
            document.getElementById("footer").innerHTML = output;
        }
        
        setFooterText();
    }, [footer, language, links, tokens]);

    return (
        <section id="projects" className="mb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-200 lg:sr-only">{title}</h2>
            </div>
            <div>
                <ul className="group/list">
                    {
                        projects.map(project => <Project key={project.name} project={project} language={language} />)
                    }
                </ul>

                {false &&
                <div className="mt-12">
                    <a className="inline-flex items-center font-medium leading-tight text-zinc-200 font-semibold text-zinc-200 group" aria-label="View Full Project Archive" href="/archive">
                        <span>
                        <span className="border-b border-transparent pb-px group-hover:border-violet-400">View Full Project </span>
                        <span className="whitespace-nowrap">
                            <span className="border-b border-transparent pb-px group-hover:border-violet-400">Archive</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                        </span>
                    </a>
                </div>}
                <div>
                    <p id="footer" className="pt-16 w-3/4 text-base text-zinc-500 tracking-tight"></p>
                </div>
            </div>
        </section>
    )
}