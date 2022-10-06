


import Link from 'next/link'

import styles from './Header.module.scss'
import { LogoIcon } from './svg'

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
export default function Header() {
    return (
        <div className={styles.header}>
            <div>
                <LogoIcon />
            </div>
            <ul className={styles.list}>
                {headerLinks.map((item) => (
                    <li key={item.id} className={styles.link}><Link href={item.link}>{item.label}</Link></li>
                ))}
            </ul>
        </div>
    )
}

