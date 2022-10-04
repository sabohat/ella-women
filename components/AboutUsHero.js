import React from 'react'
import { AppStoreDownloadIcon, GooglePlayDownloadIcon } from './svg'
import styles from './AboutUsHero.module.scss'

export default function AboutUsHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                 <div className={styles.heroLeft}>
           <h3 className={styles.heroTitle}>Номер один Приложение  для отслеживания месячных и циклов</h3>
           <p className={styles.heroText}>Lorem ipsum doro sitamet</p>
           <a href="https://www.apple.com/uz/app-store/" className={styles.icon}><AppStoreDownloadIcon /></a>
          <a href="https://www.google.com/"><GooglePlayDownloadIcon/></a>
        </div>

        <div className={styles.heroRight}>
                

        </div>
            </div>
       
   </div>
    )
}
