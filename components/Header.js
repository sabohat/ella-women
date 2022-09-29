import React from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'
import { LogoIcon } from './svg'

export default function Header() {
    return (
        <div className={styles.header}>
            <div>
                <LogoIcon />
            </div>
            <ul className={styles.list}>
                <li className={styles.link}><Link href="/articles">Maqolalar</Link> </li>
                <li className={styles.link}><Link href="/product">Mahsulotlar</Link></li>
                <li className={styles.link}><Link href="/calculators">Kalkulyatorlar</Link></li>
                <li className={`${styles.link} ${styles.active}`}><Link href="/about-us">Biz Haqimizda</Link></li>
            </ul>

        </div>
    )
}

