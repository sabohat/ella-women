import { i18n } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./LanguageMenu.module.scss";
import Image from "next/image";
import ruFlag from "../assets/img/ru-flag.png";
import uzFlag from "../assets/img/uz-flag.png";
import { ArrowDown } from "./svg";

export default function LanguageMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const langMenuList = [
    {
      title: "uz",
      img: uzFlag,
    },
    {
      title: "ru",
      img: ruFlag,
    },
  ];

  const toggling = () => setIsOpen(!isOpen);

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
    setIsOpen(!isOpen);
  };

  const changeTo = router.locale === "ru" ? "uz" : "ru";

  console.log("ROUTER", router);
  return (
    <div className={styles.languageMenu}>
      <div className={styles.languageMenuTop} onClick={toggling}>
        <span>
          <Image
            className={styles.languageSelectIcon}
            src={router.locale === "uz" ? uzFlag : ruFlag}
          />
        </span>
        <span className={isOpen ? styles.activeLanguageArrow : styles.languageArrow}><ArrowDown /></span>
      </div>
      {isOpen &&
        langMenuList
          .filter((item) => item.title != router.locale)
          .map((item, idx) => (
            <ul
              key={idx}
              onClick={() => onToggleLanguageClick(changeTo)}
              className={styles.languageMenuBottom}
            >
              <li className={styles.langMenuItem}>
                <Image className={styles.langMenuItemImg} src={item.img} />{" "}
                {item.title}
              </li>
            </ul>
          ))}
    </div>
  );
}
