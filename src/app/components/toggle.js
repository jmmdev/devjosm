export default function Toggle({language, setLanguage}) {

    function switchLanguage() {
        if (language === 'es') {
            setLanguage('en');
            return;
        }
        setLanguage('es');
    }

    return (
        <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <p className={`text-lg ${language === 'en' ? "text-zinc-500" : "text-zinc-100"}`}>ES</p>
            <button className="group w-10 h-6 border-2 border-zinc-500 hover:border-zinc-100 rounded-full" onClick={() => switchLanguage()}>
                <div className={`flex duration-150 bg-violet-500/30 w-full h-full p-0.5 rounded-full`}>
                    <div className={`bg-violet-300 w-1/2 h-full rounded-full ${language === 'es' ? "translate-x-0 group-active:translate-x-full" : "translate-x-full group-active:translate-x-0"} transition-all`} />
                </div>
            </button>
            <p className={`text-lg ${language === 'en' ? "text-zinc-100" : "text-zinc-500"}`}>EN</p>
        </div>
    )
}