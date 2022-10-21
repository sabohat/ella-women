import React from 'react'
import Image from 'next/image'
import styles from "./ArticleCard.module.scss"
import { CalendarIcon } from './svg'


export default function ArticleCard({props}) {
  return (
    <div className={styles.card}>
      <Image src={props.img} className={styles.cardImg}/>
      <span><CalendarIcon /></span><span className={styles.cardDate}>{props.date}</span>
      <h3 className={styles.cardTitle}>{props.title}</h3>
      <p className={styles.cardText}>{props.text}</p>
    </div>
  )
}
