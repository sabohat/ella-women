import React from 'react'
import { InstagramLogo, TelegramLogo, FacebookLogo, LogoIcon_White, AppStoreDownloadIcon, GooglePlayDownloadIcon } from './svg'
import styles from './Footer.module.scss'
import Link from 'next/link'
export default function Footer() {

    const headerLinks = [
        {
            link: "/articles",
            label: "Articles",
            id: 0
        },
        {
            link: "/product",
            label: "Mahsulotlar",
            id: 1
        },
        {
            link: "/calculators",
            label: "Kalkulyatorlar",
            id: 2
        },
        {
            link: "/about-us",
            label: "Biz haqimizda",
            id: 3
        }
    ]

    return (
        <div className={styles.footer}>
            <div className={styles.row1}>
                <div className={styles.links}>
                    <LogoIcon_White />
                    <ul className={styles.list}>
                        {headerLinks.map((item) => (
                            <li key={item.id} className={styles.link}><Link activeClassName={styles.active} href={item.link}>{item.label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className={styles.download_link}>
                    <AppStoreDownloadIcon />
                    <GooglePlayDownloadIcon />
                </div>
            </div>
            <div className={styles.row2}>
                            <div className={styles.text}>© Ladycare- 2022 All rights reserved</div>
                            <div className={styles.icons}>
                                <FacebookLogo />
                                <InstagramLogo />
                                <TelegramLogo />
                            </div>
            </div>
        </div>
    )
}
