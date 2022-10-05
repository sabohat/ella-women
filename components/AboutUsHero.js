import React from 'react'
import styles from './AboutUsHero.module.scss'
import { AppStoreDownloadIcon, GooglePlayDownloadIcon } from './svg'

export default function AboutUsHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_left}>
                <h1>Номер один Приложение  для отслеживания месячных и циклов</h1>
                <p>Lorem ipsum doro sitamet</p>
                <a href='#'>
                <AppStoreDownloadIcon />
                </a>
                <a href='#'>
                <GooglePlayDownloadIcon />
                </a>
            </div>
        </div>
    )
}
