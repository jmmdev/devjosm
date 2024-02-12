import { useState } from 'react'
import styles from '../page.module.css'
import Thumbnail from './thumbnail'

export default function Gallery({pages, language}) {
    const GetThumbnails = () => {
        const thumbnails = []
        
        for (const [i, p] of pages.entries()) {
            thumbnails.push(<Thumbnail key={p.url} index={i} page={p} language={language}/>)
        }
        return thumbnails
    }

    return (
        <div className={styles.gallery}>
            <GetThumbnails />
        </div>
    )
}