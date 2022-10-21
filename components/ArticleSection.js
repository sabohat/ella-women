import React from 'react'
import SectionTitle from './SectionTitle'
import ArticleCard from "./ArticleCard"
import image from "../assets/img/image1.png"
import image1 from "../assets/img/babyletter.png"
import image2 from "../assets/img/baby.png"
import styles from "./ArticleCard.module.scss"
import { CalendarIcon } from './svg'

export default function ArticleSection() {
    const articleList = [
        {
          
          img: image ,
          date: "06.09.2022",
          title: "Общенациональный проект «Зеленое пространство»",
          text:"Частичная или полная потеря слуха лишает детей важного источника информации и ..."
        },
        {
            img: image1 ,
            date: "06.09.2022",
            title: "Общенациональный проект «Зеленое пространство»",
            text:"Частичная или полная потеря слуха лишает детей важного источника информации и ..."
        },
        {
            img: image2 ,
            date: "06.09.2022",
            title: "Общенациональный проект «Зеленое пространство»",
            text:"Частичная или полная потеря слуха лишает детей важного источника информации и ..."
        },
      
      ];
    return ( 
    <div className={styles.articleSection}>
        <div className='wrapper'>   
               <SectionTitle>Интересные статьи для вас</SectionTitle>
            <div className={styles.cardwrapper}>
                {articleList.map((card, i)=>(
                  <ArticleCard key={i} props={card}/>  
                ))}
                
            </div>   
        </div>
          
    </div>
    )
}
