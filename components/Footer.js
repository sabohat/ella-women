import React from 'react'
import styles from "./Footer.module.scss"
import { InstagramLogo, TelegramLogo, FacebookLogo, FooterLogo, AppStoreDownloadIcon, GooglePlayDownloadIcon } from './svg'
import Link from 'next/link'

const footerLinks = [
    {
        link: "/Главный",
        label: "Главный",
        id: 0
    },
    {
        link: "/product",
        label: "Филиалы",
        id: 1
    },
    {
        link: "/Вакансии",
        label: "Вакансии",
        id: 2
    },
    {
        link: "/Блог",
        label: "Блог",
        id: 3
    },
    {
        link: "/О нас",
        label: "О нас",
        id: 3
    },
    {
        link: "/Контакты",
        label: "Контакты",
        id: 4
    },

]

export default function Footer() {
    return (
        <div className={styles.footer}>
        
        <div className={styles.footerTop}>
               <a href="/">
                <FooterLogo/>    
                </a>
            <ul className={styles.footerList}>
                {footerLinks.map((item) => (
                    <li key={item.id} className={styles.footerLink}><Link href={item.link}>{item.label}</Link></li>
                ))}
            </ul>   
        
          <div className={styles.footerIcon}>
          <a href="https://www.apple.com/uz/app-store/" className={styles.icon}><AppStoreDownloadIcon /></a>
          <a href="https://www.google.com/"><GooglePlayDownloadIcon/></a>
          </div>   
        </div>
      

          <div className={styles.footerBottom}>
            <span className={styles.footerText}>© Ladycare- 2022 All rights reserved</span>

            <div>
                <a href="https://www.instagram.com/" className={styles.icon}><InstagramLogo /></a>
                <a href="https://www.facebook.com/" className={styles.icon}><FacebookLogo /></a>
                <a href="https://telegram.org/"><TelegramLogo/></a>
            </div>
          </div>
        </div>
    )
}
