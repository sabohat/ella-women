import React from 'react'
import { AppStoreDownloadIcon, GooglePlayDownloadIcon } from './svg'
import styles from './AboutUsHero.module.scss'
import Image from 'next/image'
import image from "../assets/img/hero.png"
import { useTranslation } from 'next-i18next';



export default function AboutUsHero () {
    const { t } = useTranslation('common')
    return (
        <div className={`${styles.hero}`}>
            <div className="wrapper">
                <div className={styles.row}>
                    <div className={styles.heroLeft}>
                        <h3 className="hero-title">{t('hero_title')}</h3>
                        {/* <p className="hero-subtitle">Lorem ipsum doro sitamet</p> */}
                        <a href="https://t.me/ellauz_bot" className={styles.icon}>Telegram Bot</a>
                    </div>
                    <div className={styles.heroRight}>
                        <Image src={image} width={550} height={480} />
                    </div>

                </div>
            </div>

        </div>

    )
}
