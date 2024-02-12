import { useEffect } from 'react'
import styles from '../page.module.css'

export default function Block({reference, title, content}) {

    const BlockHeader = () => {
        if (title) {
            return (
                <p className={styles['block-title']}>{title}</p>
            )
        }
        return null
    }
    
    return (
        <div ref={reference} className={styles.block}>
            <BlockHeader />
            {content}
        </div>
    )
}