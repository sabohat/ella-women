import React from "react";
import styles from "./AboutUsHero.module.scss";
import { AppStoreDownloadIcon, GooglePlayDownloadIcon } from "./svg";
// import layer3 from '../public/images/layer3.png'
// ../../assets/images/layer3.png

export default function AboutUsHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroLeftTitle}>Номер один Приложение для отслеживания месячных и циклов</h1>
          <p className={styles.heroLeftText}>Lorem ipsum doro sitamet</p>
          <a className={styles.heroAppStoreIcon} href="#">
            <AppStoreDownloadIcon />
          </a>
          <a href="#">
            <GooglePlayDownloadIcon />
          </a>
        </div>
        <div className={styles.heroRight}>
        <div className={styles.layerWrapper}>
        <img className={styles.layerOne} src="/layer3.png" alt="layer3" width="300" height="490"/>
         <img className={styles.layerTwo} src="/layer2.png" alt="layer2" width="250" height="300" />
         <img className={styles.layerThree} src="/layer1.png" alt="layer1" width="250" height="278"/>
        </div>
        </div>
      </div>
    </div>
  );
}
