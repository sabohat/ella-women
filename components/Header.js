


import Link from 'next/link'
import { useTranslation } from 'next-i18next';

import styles from './Header.module.scss'
import { LogoIcon } from './svg'
import { i18n } from '../next.config';

const headerLinks = [
    {
        link: "/articles",
        label: "articles",
        id: 0
    },
    {
        link: "/product",
        label: "products",
        id: 1
    },
    {
        link: "/calculators",
        label: "calculators",
        id: 2
    },
    {
        link: "/about-us",
        label: "about_us",
        id: 3
    }
]
export default function Header() {
    const { t } = useTranslation('common');
    console.log(i18n.locales)
    return (
        <div className='wrapper'>
            <div className={styles.header}>
                <div>
                    <LogoIcon />
                </div>
                <ul className={styles.list}>
                    {headerLinks.map((item) => (
                        <li key={item.id} className={styles.link}><Link href={item.link}>{t(item.label)}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

