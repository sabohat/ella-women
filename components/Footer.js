import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  FooterLogoIcon,
  InstagramLogo,
  TelegramLogo,
  FacebookLogo,
  AppStoreDownloadIcon,
  GooglePlayDownloadIcon,
} from "./svg";

const footerLinks = [
  {
    link: "/",
    label: "Bosh sahifa",
    id: 0,
  },
  {
    link: "/branches",
    label: "Filiallar",
    id: 1,
  },
  {
    link: "/vacancy",
    label: "Bo'sh ish o'rinlari",
    id: 2,
  },
  {
    link: "/blog",
    label: "Blog",
    id: 3,
  },
  {
    link: "/about-us",
    label: "Biz haqimizda",
    id: 4,
  },
  {
    link: "/contacts",
    label: "Kontaklar",
    id: 5,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.container}> */}
      <div className={styles.footer__top}>
        <div className={styles.footer__nav_wrapper}>
          <div>
            <FooterLogoIcon />
          </div>
          <ul className={styles.list}>
            {footerLinks.map((item) => (
              <li key={item.id} className={styles.footer__link}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <AppStoreDownloadIcon />
          <GooglePlayDownloadIcon />
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p className={styles.footer__text}>
          © Ladycare- 2022 All rights reserved
        </p>
        <div className={styles.footer__icons}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><InstagramLogo /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookLogo /></a>
          <a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer"><TelegramLogo /></a>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
