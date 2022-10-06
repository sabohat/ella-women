import React from "react";
import { AppStoreDownloadIcon, GooglePlayDownloadIcon } from "../svg";
import styles from "./Intro.module.scss";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../assets/images/layer1.png";
import img2 from "../../assets/images/layer2.png";
import iphone from "../../assets/images/iphone.png";

export default function Intro() {
  // componentDidMount(){
    useEffect(() => {
      var b = window.document.getElementsByTagName("BODY")[0];  
    
      b.addEventListener("mousemove", function(event) {
        parallaxed(event);
      });
      function parallaxed(e) {
        var amountMovedX = (e.clientX * -0.3 / 8);
        var amountMovedY = (e.clientY * -0.3 / 8);
        var x = window.document.getElementsByClassName("introRightInner");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
        }
    }
  
  },[]);

  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.introInner}>

          <div className={styles.introLeft}>
            <h2 className={styles.introLeftTitle}>
              Номер один Приложение для отслеживания месячных и циклов
            </h2>
            <p className={styles.introLeftText}>Lorem ipsum doro sitamet</p>
            <div className={styles.apps}>
              <a href="/">
                <AppStoreDownloadIcon />
              </a>
              <a href="/">
                <GooglePlayDownloadIcon />
              </a>
            </div>
          </div>

          <div className={styles.introRight}>
            <div className={styles.introRightInner}>
              <div className={styles.iphone}>
                <Image src={iphone} width="300" height="470" alt="iphone" />
              </div>
              <div className={styles.img1}>
                <Image src={img1} width="215" height="270" alt="img1" />
              </div>
              <div className={styles.img2}>
                <Image src={img2} width="215" height="270" alt="img2" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
