import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "./LanguageMenu.module.scss"
import Image from 'next/image'
import uz from "../assets/img/uz.png"
import ru from "../assets/img/ru.png"
import arrow from "../assets/img/arrow-down.png"
export default function LanguageMenu() {
    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onToggleLanguageClick = (newLocale) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    const changeTo = router.locale === 'ru' ? 'uz' : 'ru'
    const langs = [
        {
            lang: "uz",
            id: 0
        },
        {
            lang: "ru",
            id: 0
        },
        
    ]
    // console.log("ROUTER", router)
    return (
        <div className={styles.wrapper} onClick={() => onToggleLanguageClick(changeTo)}>
            <div >
                <span className={styles.main}>
                <Image src={ru} width={24} height={24} alt='image' />
                <Image src={arrow} width={24} height={24} alt='image' />
                </span>
            </div>
            <div className={styles.dropdown}>
            <span className={styles.wrapperInner}>
                <Image src={uz} width={24} height={24} alt='image' />
                 <span>   {router.locale === "uz" ? "Ru" : "Uz"}</span>
            </span>
            <span className={styles.wrapperInner}>
                <Image src={ru} width={24} height={24} alt='image' />
                 <span>   {router.locale === "ru" ? "Uz" : "Ru"}</span>
            </span>

            </div>
        </div>
    )
}
