import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useState, useTransition } from 'react'
import styles from "./LanguageMenu.module.scss"
import Image from 'next/image'
import uz from "../assets/img/uz.png"
import ru from "../assets/img/ru.png"
import arrow from "../assets/img/arrow-down.png"
import { useTranslation } from 'next-i18next'

export default function LanguageMenu() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const { i18n } = useTranslation()

    const onToggleLanguageClick = (newLocale) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
        setIsOpen(!isOpen);
    }

    const changeTo = router.locale === 'ru' ? 'uz' : 'ru'
    const langs = [
        {
            lang: "uz",
            id: 0,
            img: uz
        },
        {
            lang: "ru",
            id: 1,
            img: ru
        },
    ]
    // console.log("ROUTER", router) onClick={() => onToggleLanguageClick(changeTo)}
    return (
        <>
            <div className={styles.wrapper}  >

                <span className={styles.main} onClick={() => setIsOpen(!isOpen)}>
                    <Image src={router.locale === 'ru' ? ru : uz} width={24} height={24} alt='image' />
                    <Image className={isOpen ? styles.rotateArrow : ''} src={arrow} width={24} height={24} alt='image' />
                </span>

                {isOpen && <div className={styles.dropdown}>
                    {langs.filter((item) => item.lang != router.locale)
                        .map((item) => <ul onClick={() =>
                            onToggleLanguageClick(changeTo)
                        }
                            className={styles.wrapperInner}
                        >
                            <li>
                                <Image src={item.img} width={24} height={24} alt='image' />
                                {item.lang}
                            </li>
                        </ul>
                        )
                    }
                </div>}
            </div>

        </>

    )
}
