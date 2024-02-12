import { useEffect, useState } from 'react';
import styles from '../page.module.css';
import Section from './section';

export default function Sections({sections, isIcons, goToSection}) {
    const [activeSection, setActiveSection] = useState(0)

    const doGoToSection = section => {
        goToSection(section)
        setActiveSection(sections.indexOf(section))
    }

    const Sections = () => {
        const mySections = []
        for (const s of sections) {
            mySections.push(<Section key={s} section={s} sections={sections} isIcons={isIcons} goToSection={doGoToSection} activeSection={activeSection} />)
        }
        return mySections
    }

    return (
        <div className={styles.sections}>
            <Sections />
        </div>
    )
}