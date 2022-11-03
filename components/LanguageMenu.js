import { i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "./LanguageMenu.module.scss"
import image from "../assets/img/BevelledRussia.png"
import image1 from "../assets/img/uzbekistan.png"
import Image from 'next/image'
import { Down } from "../components/svg"
import { useTranslation } from 'next-i18next'
export default function LanguageMenu() {
    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onToggleLanguageClick = (newLocale) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }
    const [open, setOpen] = React.useState(false);

    const {i18n} = useTranslation()

    const handleOpen = () => {
        setOpen(!open);
    };

    const changeTo = router.locale = 'ru'

    const changeLang = router.locale = 'uz'

    console.log("ROUTER", i18n.language);
    return (

        <div className={styles.dropdown}>
            {i18n.language === "ru" && <button onClick={handleOpen} className={styles.dropdown_btn}>
                <Image src={image} width={24} height={24} /><Down />
            </button>}
            {i18n.language === "uz" && <button onClick={handleOpen} className={styles.dropdown_btn}>
                <Image src={image1} width={24} height={24} /><Down />
            </button>}
            {open ? (
                <ul className={styles.menu}>
                    <li className={styles.menuitem}>  <button onClick={() => onToggleLanguageClick(changeLang)}>{router.locale === <Image src={image1} width={24} height={24} /> ? <Image src={image} width={24} height={24} />
                        : <Image src={image1} width={24} height={24} />}</button>

                    </li>
                    <li className={styles.menuitem}>
                        <button onClick={() => onToggleLanguageClick(changeTo)}>{router.locale === <Image src={image} width={24} height={24} /> ? <Image src={image1} width={24} height={24} />
                            : <Image src={image} width={24} height={24} />}</button>
                    </li>
                </ul>
            ) : null}
            {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
            {/* <div onClick={() => onToggleLanguageClick(changeTo)}>{router.locale === "uz" ? "Ru" : "Uz"}</div> */}
        </div>


    )
}
