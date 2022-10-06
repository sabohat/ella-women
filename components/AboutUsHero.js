import React from 'react'
import { AppStoreDownloadIcon, GooglePlayDownloadIcon } from './svg'
import styles from './AboutUsHero.module.scss'
import Image from 'next/image'
import image from "../assets/img/image.png"
import image1 from "../assets/img/image1.png"
import image2 from "../assets/img/image2.png"


export default function AboutUsHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.heroLeft}>
                    <h3 className={styles.heroTitle}>Номер один Приложение  для отслеживания месячных и циклов</h3>
                    <p className={styles.heroText}>Lorem ipsum doro sitamet</p>
                    <a href="https://www.apple.com/uz/app-store/" className={styles.icon}><AppStoreDownloadIcon /></a>
                    <a href="https://www.google.com/"><GooglePlayDownloadIcon/></a>
                </div>

                <div className={styles.heroRight}>
                    <div className={styles.heroWrapper}>
                       <div className={styles.heroPhone}>
                        <Image src={image} width={300} height={470}/>
                    </div>
                    <div className={styles.heroImage}>
                        <Image src={image1} width={215} height={270}/>
                    </div>
                    <div className={styles.heroimg}>
                        <Image src={image2}  width={217} height={287}/>
                    </div> 
                    </div>
                    
                </div>  
                </div>
                
            </div>
       
        </div>
    )
}
