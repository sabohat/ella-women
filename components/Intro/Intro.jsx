import React from "react";
import { AppStoreDownloadIcon, GooglePlayDownloadIcon } from "../svg";



export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className="container ">
        <div className="intro-inner">
          <div className="intro-left">
            <h2 className="intro-left__title">
              Номер один Приложение для отслеживания месячных и циклов
            </h2>
            <p className="intro-left__text">Lorem ipsum doro sitamet</p>

            <div>
              <AppStoreDownloadIcon />
              <GooglePlayDownloadIcon />
            </div>
          </div>
          <div className="intro-right"></div>
        </div>
      </div>
    </div>
  );
}
