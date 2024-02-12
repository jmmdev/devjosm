/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../page.module.css";
import {BiLogoAngular, BiLogoCss3, BiLogoGit, BiLogoGraphql, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoSpringBoot, BiLogoTypescript} from 'react-icons/bi';
import {TbBrandCSharp, TbError404} from 'react-icons/tb'

export default function Skills({skills}) {

    const getIcon = icon => {
        switch (icon) {
            case 'angular':
                return <BiLogoAngular />
            case 'c-sharp':
                return <TbBrandCSharp />
            case 'css':
                return <BiLogoCss3 />
            case 'git':
                return <BiLogoGit />
            case 'graphql':
                return <BiLogoGraphql />
            case 'html':
                return <BiLogoHtml5 />
            case 'java':
                return <BiLogoJava />
            case 'javascript':
                return <BiLogoJavascript />
            case 'react':
                return <BiLogoReact />
            case 'springboot':
                return <BiLogoSpringBoot />
            case 'typescript':
                return <BiLogoTypescript />
            default:
                return <TbError404 />
            
        }
    }

    const GetSkills = () => {
        const mySkills = []
        for (let s of skills) {
            mySkills.push(
                <div className={styles.skill}>
                    <div className={styles['skill-icon']}>
                        {getIcon(s.icon)}
                    </div>
                    <p className={styles['skill-text']}>{s.text}</p>
                </div>
            )
        }
        return mySkills
    }

    return (
        <div className={styles.skills}>
            <GetSkills />
        </div>
    )
}