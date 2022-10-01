import React from "react";
import Link from "next/link";

import styles from "./Footer.module.scss";
import {
  InstagramLogo,
  TelegramLogo,
  FacebookLogo,
  AppStoreDownloadIcon,
  GooglePlayDownloadIcon,
  FooterLogoIcon,
} from "./svg";

const footerLinks = [
  {
    link: "/",
    label: "Главный",
    id: 0,
  },
  {
    link: "/",
    label: "Филиалы",
    id: 1,
  },
  {
    link: "/",
    label: "Вакансии",
    id: 2,
  },
  {
    link: "/",
    label: "Блог",
    id: 3,
  },
  {
    link: "/",
    label: "О нас",
    id: 4,
  },
  {
    link: "/",
    label: "Контакты",
    id: 5,
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.spaceBetCenter}>
          <FooterLogoIcon />
          <ul className={styles.list}>
            {footerLinks.map((item) => (
              <li key={item.id} className={styles.link}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.buttons}>
          <GooglePlayDownloadIcon />
          <AppStoreDownloadIcon />
        </div>
      </div>
      <div className={styles.bottomRow}>
        <p>© Ladycare- 2022 All rights reserved</p>
        <div className={styles.buttons}>
          <InstagramLogo />
          <TelegramLogo />
          <FacebookLogo />
        </div>
      </div>
    </div>
  );
}
