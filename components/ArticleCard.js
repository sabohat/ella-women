import Image from "next/image";
import React from "react";
import styles from "./ArticleCard.module.scss";
import { CalendarIcon } from "./svg.js";

export default function ArticleCard({ data }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={data.img}
        alt="article image"
        width={343}
        height={290}
      />

      <div className={styles.cardInfo}>
        <span className={styles.time}>
          <CalendarIcon className={styles.icon} />

          <span className={styles.date}>{data?.time}</span>
        </span>

        <div>
          <h5 className={styles.title}>{data?.title}</h5>
          <p className={styles.text}>{data?.text}</p>
        </div>
      </div>
    </div>
  );
}
