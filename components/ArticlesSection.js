import React from "react";
import style from "./ArticlesSection.module.scss";
import SectionTitle from "./SectionTitle";
import ArticleCard from "./ArticleCard";
import img1 from '../assets/img/article-1.png'
import img2 from '../assets/img/article-2.png'
import img3 from '../assets/img/article-3.png'

export default function ArticlesSection() {
  const articlesList = [
    {
      title: "Общенациональный проект «Зеленое пространство»",
      time: "06.09.2022",
      text: "Частичная или полная потеря слуха лишает детей важного источника информации и ...",
      img: img1,
    },
    {
      title: "Общенациональный проект «Зеленое пространство»",
      time: "06.09.2022",
      text: "Частичная или полная потеря слуха лишает детей важного источника информации и ...",
      img: img2,
    },
    {
      title: "Общенациональный проект «Зеленое пространство»",
      time: "06.09.2022",
      text: "Частичная или полная потеря слуха лишает детей важного источника информации и ...",
      img: img3,
    },
  ];
  return (
    <div className={style.articleSection}>
      <div className="container">
        <SectionTitle>Интересные статьи для вас</SectionTitle>

        <div className={style.cardsWrapper}>
          {articlesList.map((card, i) => (
            <ArticleCard key={i} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
