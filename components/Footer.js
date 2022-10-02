import React from "react";
import {
  InstagramLogo,
  TelegramLogo,
  FacebookLogo,
  FooterLogo,
  GooglePlayDownloadIcon,
  AppStoreDownloadIcon,
} from "./svg";
import styles from "./Footer.module.scss";
import Link from "next/link";

const headerLinks = [
  {
    link: "/home",
    label: "Main",
    id: 0,
  },
  {
    link: "/branches",
    label: "Branches",
    id: 1,
  },
  {
    link: "/vacancies",
    label: "Vacancies",
    id: 2,
  },
  {
    link: "/blogs",
    label: "Blogs",
    id: 3,
  },
  {
    link: "/about-us",
    label: "About us",
    id: 4,
  },
  {
    link: "/contacts",
    label: "Contacts",
    id: 5,
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div className={styles.footerTop}>
            <div className={styles.footerTopLeft}>
              <a href="/">
                <FooterLogo />
              </a>
              <ul className={styles.list}>
                {headerLinks.map((item) => (
                  <li key={item.id} className={styles.link}>
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className={styles.appsWrapper}>
                <a href="/">
                  <AppStoreDownloadIcon />
                </a>
                <a href="/">
                  <GooglePlayDownloadIcon />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.reserved}>
              © Ladycare- 2022 All rights reserved
            </p>
            <ul className={styles.socialsWrapper}>
              <li className={styles.listItem}>
                <a href="/">
                  <InstagramLogo />
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/">
                  <FacebookLogo />
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="/">
                  <TelegramLogo />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
