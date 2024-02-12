import Image from 'next/image'
import styles from '../page.module.css'
import {BiLogoLinkedin, BiLogoGmail, BiLogoGithub} from 'react-icons/bi'
import { useEffect, useRef } from 'react'

export default function Profile({text}){
    const mailAction = useRef(null)

    useEffect(() => {
        const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        mailAction.current = isMobile ? "mailto:devjosm@gmail.com" : "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=devjosm@gmail.com"
    })
    
    const GetText = () => {
        const textTokens = text.split('\n')

        const paragraphs = []
        for (let [i, token] of textTokens.entries()) {
            paragraphs.push(<p key={token.charAt(0) + i}>{token}</p>)
        }

        return paragraphs
    }

    return (
        <>
            <div className={styles.contact}>
                <a href='https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-mart%C3%ADn-mu%C3%B1oz-95a464195' target='_blank' className={styles['contact-button']}>
                    <BiLogoLinkedin />
                </a>
                <a href={mailAction.current} target="_blank" className={styles['contact-button']}>
                    <BiLogoGmail />
                </a>
                <a href='https://github.com/jmmdev' target='_blank' className={styles['contact-button']}>
                    <BiLogoGithub />
                </a>
            </div>
            <div className={styles.profile}>
                <div className={styles['contact-inner']}>
                    <a href='https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-mart%C3%ADn-mu%C3%B1oz-95a464195' target='_blank' className={styles['contact-button']}>
                        <BiLogoLinkedin />
                    </a>
                    <a href={mailAction.current} target="_blank" className={styles['contact-button']}>
                        <BiLogoGmail />
                    </a>
                    <a href='https://github.com/jmmdev' target='_blank' className={styles['contact-button']}>
                        <BiLogoGithub />
                    </a>
                </div>
                <div className={styles['profile-text']}>
                    <GetText />
                </div>
                <div className={styles['profile-pic-container']}>
                    <Image sizes='100%' priority fill src={'/assets/profile.png'} alt='me.png'/>
                </div>
            </div>
        </>
    )
}