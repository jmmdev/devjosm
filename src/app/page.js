"use client"
import { useEffect, useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Toggle from "./components/toggle";

import { Outfit } from 'next/font/google';
const font = Outfit({subsets: ['latin'], variable: '--my-font'})

import data from '../../public/files/data.json';

export default function Home() {
  
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const savedLg = localStorage.getItem("devjosm_lg");
    if (savedLg) {
      setLanguage(savedLg);
    }
  }, [])

  function switchLg(lg) {
    localStorage.setItem("devjosm_lg", lg);
    setLanguage(lg);
  }

  return (
    <div id="__next">
      <div className={`${font.variable} font-sans relative`}>
        <Toggle language={language} setLanguage={switchLg} />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 pt-16 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header subtitle={data.text.subtitle[language]} shortText={data.text.shortText[language]} sections={data.text.sections} language={language} />
            <main id="content" className="pt-24 lg:w-2/3 xl:w-4/5">
              <About title={data.text.sections.about[language]} text={data.text.intro[language]}/>
              <Projects title={data.text.sections.projects[language]} projects={data.projects} language={language} footer={data.footer} tokens={data.tokens} links={data.links}/>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
