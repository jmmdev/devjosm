import Image from 'next/image'
import styles from '../page.module.css'

export default function Thumbnail({index, page, language}) {

    const GetIcons = () => {
        const result = []
        const icons = page.tags
        for (const i of icons) {
            result.push(
            <div key={i} className={styles.tag}>
                <Image sizes='100%' fill src={`/assets/icons/${i}.png`} alt={'icon'} />
            </div>
            )
        }
        return result
    }

    return (
        <>
            <a href={page.url} className={styles.thumbnail} target='_blank'>
                <Image sizes='100%' fill src={`/assets/slides/slideshow${index + 1}.png`} alt={'img'} />
                <p className={styles.description}>{page.desc[language]}</p>
                <div className={styles.tags}>
                    <GetIcons />
                </div>
            </a>
            <p className={styles['description-separate']}>{page.desc[language]}</p>
        </>
    )
}