import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "./LanguageMenu.module.scss"

export default function LanguageMenu() {
    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onToggleLanguageClick = (newLocale) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    const changeTo = router.locale === 'ru' ? 'uz' : 'ru'

    console.log("ROUTER", router)
    return (
        <div onClick={() => onToggleLanguageClick(changeTo)}>{router.locale === "uz" ? "Ru" : "Uz"}</div>
    )
}
