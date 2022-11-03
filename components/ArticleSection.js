import React from "react";
import SectionTitle from "./SectionTitle";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleCard.module.scss";
import articleImg1 from "../assets/img/article-card-1.png";
import articleImg2 from "../assets/img/article-card-2.png";
import articleImg3 from "../assets/img/article-card-3.png";
import { useTranslation } from 'next-i18next'

export default function ArticleSection() {
  const {t} = useTranslation('common')

  const cardList = [
    {
      title: "article_title",
      subtitle:"article_text",
      img: articleImg1,
      date: "06.09.2022",
    },
    {
      title: "article_title",
      subtitle:"article_text",
      img:  articleImg2,
      date: "06.09.2022",
    },
    {
      title: "article_title",
      subtitle:"article_text",
      img: articleImg3,
      date: "06.09.2022",
    },
  ];
  return (
    <div className="wrapper article-section">
      <SectionTitle>{t('article_title')}</SectionTitle>
      <div className={styles.cardsWrapper}>
        {cardList.map((card, i) => (
          <ArticleCard key={i} data={card} />
        ))}
      </div>
    </div>
  );
}
