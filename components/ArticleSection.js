import React from "react";
import SectionTitle from "./SectionTitle";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleCard.module.scss";
import articleImg1 from "../assets/img/article-card-1.png";
import articleImg2 from "../assets/img/article-card-2.png";
import articleImg3 from "../assets/img/article-card-3.png";


export default function ArticleSection() {
  const cardList = [
    {
      title: "Общенациональный проект «Зеленое пространство»",
      subtitle:
        "Частичная или полная потеря слуха лишает детей важного источника информации и ...",
      img: articleImg1,
      date: "06.09.2022",
    },
    {
      title: "Общенациональный проект «Зеленое пространство»",
      subtitle:
        "Частичная или полная потеря слуха лишает детей важного источника информации и ...",
      img:  articleImg2,
      date: "06.09.2022",
    },
    {
      title: "Общенациональный проект «Зеленое пространство»",
      subtitle:
        "Частичная или полная потеря слуха лишает детей важного источника информации и ...",
      img: articleImg3,
      date: "06.09.2022",
    },
  ];
  return (
    <div className="wrapper article-section">
      <SectionTitle>Интересные статьи для вас</SectionTitle>
      <div className={styles.cardsWrapper}>
        {cardList.map((card, i) => (
          <ArticleCard key={i} data={card} />
        ))}
      </div>
    </div>
  );
}
