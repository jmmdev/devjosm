import styles from '../page.module.css';
import {FaHome, FaCode, FaTools} from 'react-icons/fa';

export default function Section({section, sections, isIcons, goToSection, activeSection}) {
    const icons = [<FaHome key="home" />, <FaCode key="code" />, <FaTools key="tools" />]

    const GetSectionContent = () => {
        if (isIcons) { 
            return icons[sections.indexOf(section)]
        }
        return section.toUpperCase()
    }

    return (
        <button className={styles.section} onClick={() => goToSection(section)}>
            <GetSectionContent />
        </button>
    )
}