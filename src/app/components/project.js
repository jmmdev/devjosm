import Image from "next/image";

export default function Project({project, language}) {
    
    const GetTags = () => {
        const tags = [];
        for (let t of project.tags) {
            tags.push(
                <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-violet-500/30 px-3 py-1 text-sm font-medium leading-5 text-violet-300 ">{t}</div>
                </li>
            )
        }
        return tags; 
    }

    const GetDescriptionParagraphs = ({description}) => {
        const tokens = description.split('\n');
        const paragraphs = [];
        
        for (let t of tokens) {
            paragraphs.push(
                <p className="mt-2 leading-normal">
                    {t}
                </p>
            )
        }

        return paragraphs;
    }

    return (
        <li className="mb-12">
            <a className="lg:bg-transparent rounded-lg lg:rounded-none group relative grid gap-6 transition-all sm:grid-cols-8 sm:gap-8 md:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50" href={project.url} target="_blank" rel="noreferrer noopener" aria-label={`${project.alt} (opens in a new tab)`}>
                <div className="absolute -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-violet-900/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <div className="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-violet-300 focus-visible:text-violet-300 group/link text-lg">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                            {project.name}
                            <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block lg:hidden h-4 w-4 shrink-0 transition-transform group-hover/link:inline-block ml-1" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                            </span>
                        </div>
                    </h3>
                    <GetDescriptionParagraphs description={project.description[language]} />

                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                        <GetTags />
                    </ul>
                </div>
                <Image alt={project.alt} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-zinc-200/20 transition group-hover:border-zinc-200/50 sm:order-1 sm:col-span-2 sm:translate-y-1" src={`/assets/images/${project.ref}.png`} style={{color: "transparent"}} />
            </a>
        </li>
    )
}