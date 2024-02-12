import Image from 'next/image'
import styles from '../page.module.css'
import {BiLogoLinkedin, BiLogoGmail, BiLogoGithub} from 'react-icons/bi'

export default function Profile({text}){
    
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
                <a className={styles['contact-button']}>
                    <BiLogoLinkedin />
                </a>
                <a className={styles['contact-button']}>
                    <BiLogoGmail />
                </a>
                <a className={styles['contact-button']}>
                    <BiLogoGithub />
                </a>
            </div>
            <div className={styles.profile}>
                <div className={styles['contact-inner']}>
                    <a href='https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-mart%C3%ADn-mu%C3%B1oz-95a464195' target='_blank' className={styles['contact-button']}>
                        <BiLogoLinkedin />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=devjosm@gmail.com" target="_blank" className={styles['contact-button']}>
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