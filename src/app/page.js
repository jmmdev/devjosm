"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Toolbar from "./components/toolbar";
import Block from "./components/block";
import Gallery from "./components/gallery";
import Profile from "./components/profile";
import Skills from "./components/skills";

export const getData = async () => {
  const res = await fetch('files/data.json')
  const data = await res.json() 

  return data
}

export default function Home() {
    const homeRef = useRef(null)
    const workRef = useRef(null)
    const skillsRef = useRef(null)

    const [data, setData] = useState(null)
    const [language, setLanguage] = useState('es')

    useEffect(() => {
      const initialize = async () => {
        const site_data = await getData()
        setData(site_data)
      }
      initialize()
    }, [])

    const goToSection = section => {
        const ref = getRefBySection(section)
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    const getRefBySection = section => {
        const sectionIndex = data.text.sections[language].indexOf(section)
        switch (sectionIndex) {
            case 1:
                return workRef
            case 2:
                return skillsRef
            default:
                return homeRef
        }
    }
  
    if (data) {
      return (
        <main className={styles.main}>
          <Toolbar sections={data.text.sections} goToSection={goToSection} language={language} setLanguage={setLanguage} />
          <div className={styles['block-container']}>
            <Block reference={homeRef} content={
              <Profile text={data.text.intro[language]} />
            } />
            <Block reference={workRef} title={language === 'es' ? 'Proyectos' : 'Projects'}
            content={
              <Gallery pages={data.pages} language={language}/>
            } />
            <Block reference={skillsRef} title={language === 'es' ? 'Aptitudes' : 'Skills'} content={
              <Skills skills={data.skills} />
            } />
          </div>
          <Toolbar sections={data.text.sections} isIcons={true} goToSection={goToSection} language={language} setLanguage={setLanguage} />
        </main>
      );
    }
    return null
}
