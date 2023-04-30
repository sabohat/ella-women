import React from "react";
import SectionTitle from "./SectionTitle";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleCard.module.scss";
import articleImg1 from "../assets/img/article-card-1.png";
import articleImg2 from "../assets/img/article-card-2.png";
import articleImg3 from "../assets/img/article-card-3.png";
import { useTranslation } from "next-i18next";


export default function ArticleSection () {
  const { t } = useTranslation('common')
  const cardList = [
    {
      title: "7-hafta: homiladorlik belgilari va bolaning rivojlanishi",
      subtitle:
        "Tanangizda 7 hafta oldingiga qaraganda ko'proq qon aylanmoqda. Qo'shimcha qon sizning bachadoningizni chaqaloq uchun zarur bo'lgan...",
      img: articleImg1,
      date: "08.12.2022",
      link: "https://telegra.ph/7-hafta-homiladorlik-belgilari-va-bolaning-rivojlanishi-12-08"
    },
    {
      title: "Homiladorlikning ilk belgilari",
      subtitle:
        "Siz homilador ekanligingizni qanday aniqlashni bilmayapsizmi?! Albatta, homiladorlik testi sizga aniq javobni ayta oladi. Biroq...",
      img: articleImg2,
      date: "07.08.2022",
      link: "https://telegra.ph/Homiladorlikning-ilk-belgilari-08-07"
    },
    {
      title: "Egizak homiladorlik belgi va alomatlari",
      subtitle:
        "Ikki karra homilador bo’lishdek narsa bormikan? Homiladorlik alomatlarini boshdan kechirishni boshlaganingizda...",
      img: articleImg3,
      date: "14.08.2022",
      link: "https://telegra.ph/Egizak-homiladorlik-belgi-va-alomatlari-08-14"
    },
  ];
  return (
    <div className="wrapper article-section">
      <SectionTitle>{t("interesting_articles")}</SectionTitle>
      <div className={styles.cardsWrapper}>
        {cardList.map((card, i) => (
          <ArticleCard key={i} data={card} />
        ))}
      </div>
    </div>
  );
}
