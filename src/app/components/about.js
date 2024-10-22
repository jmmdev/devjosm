export default function About({title, text}) {

    function formatText(text) {
        const output = [];
        const textPieces = text.split('\n');

        for (let [index, tp] of textPieces.entries()) {
            output.push(
                <p key={index} className="mb-4 text-lg">{tp}</p>
            )
        }
        return output;
    }

    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-zinc-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{title}</h2>
            </div>
            {formatText(text)}
        </section>
    )
}