import React from "react";
import Image from "next/image";
import styles from "./ArticleCard.module.scss";
import { Calendar } from "./svg";
import { useTranslation } from 'next-i18next';

export default function ArticleCard({ data }) {
  const { t } = useTranslation('common');
  return (
    <div className={styles.card}>
      <Image
      className={styles.cardImage}
        src={data?.img}
        alt={data?.title}
        width={343}
        height={290}
      />
      <div className={styles.cardDateWrapper}>
        <Calendar /> <span className={styles.cardDate}>{data.date}</span>
      </div>
      <h3 className={styles.cardTitle}>{t(data.title)}</h3>
      <p className={styles.cardSubtitle}>{t(data.subtitle)}</p>
    </div>
  );
}
