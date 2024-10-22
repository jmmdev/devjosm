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
            <button className="group w-12 h-6 border-2 border-zinc-500 hover:border-zinc-100 rounded-full" onClick={() => switchLanguage()}>
                <div className={`flex ${language === 'es' ? "justify-start" : "justify-end"} bg-violet-500/30 w-full h-full p-0.5 rounded-full`}>
                    <div className="bg-violet-300 h-full aspect-square rounded-full" />
                </div>
            </button>
            <p className={`text-lg ${language === 'en' ? "text-zinc-100" : "text-zinc-500"}`}>EN</p>
        </div>
    )
}