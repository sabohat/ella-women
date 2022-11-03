import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceCard.module.scss";
import { useTranslation } from 'next-i18next';
import { PregnancyCalendarIcon, PregnancyStagesIcon, VaginaIcon } from "./svg";

export default function ServiceSection() {
  const { t } = useTranslation('common');
  const cardList = [
    {
      title:   "serviceCard_title",
      subtitle: "serviceCard_subtitle",
      // svg: (height, width) => <VaginaIcon height={height} width={width} />
      svg: <VaginaIcon />,
    },
    {
      title: "serviceCard_title1",
      subtitle:
        "serviceCard_subtitle1",
      svg: <PregnancyCalendarIcon />,
    },
    {
      title: "serviceCard_title2",
      subtitle:
      "serviceCard_subtitle2",
      svg: <PregnancyStagesIcon />,
    },
  ];
  return (
    <div className="wrapper">
      <SectionTitle>{t('serviceTitle')}</SectionTitle>
      <div className={styles.cardsWrapper}>
        {cardList.map((card, i) => (
          <ServiceCard key={i} data={card} />
        ))}
      </div>
    </div>
  );
}
