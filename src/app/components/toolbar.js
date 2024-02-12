import styles from "../page.module.css";
import Sections from "./sections";

export default function Toolbar({sections, isIcons, goToSection, language, setLanguage}) {
    return (
        <div className={isIcons ? styles.footer : styles.header}>
            <div className={styles['header-logo']}>
                <p>devjosm:\</p>
                <div className={styles['header-logo-text']}>
                    <p>{language === "es" ? "Bienvenid@" : "Welcome"}</p>
                    <div className={styles.caret} />
                </div>
            </div>
            <div className={styles['header-selectors']}>
                <Sections sections={sections[language]} isIcons={isIcons} goToSection={goToSection} />
                <div className={styles.language}>
                    <p style={{opacity: language === "es" ? 1 : 0.7, color: language === "es" ? '#a0c0ec' : '#fff'}}>ES</p>
                    <button className={styles.toggle} onClick={() => {
                        if (language === "es")
                            setLanguage("en")
                        else
                            setLanguage("es")  
                    }}
                    style={{justifyContent: language === "es" ? 'flex-start' : 'flex-end'}}>
                        <div className={styles.thumb} />
                    </button>
                    <p style={{opacity: language === "en" ? 1 : 0.7, color: language === "en" ? '#a0c0ec' : '#fff'}}>EN</p>
                </div>
            </div>
        </div>
    )
}