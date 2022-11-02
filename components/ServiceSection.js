import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceCard.module.scss";
import { useTranslation } from 'react-i18next'

import { PregnancyCalendarIcon, PregnancyStagesIcon, VaginaIcon } from "./svg";

export default function ServiceSection() {
  const {t} = useTranslation('common')
  const cardList = [
    {
      title: "serviceCard_subtitle",
      subtitle: "serviceCard_text",
      // svg: (height, width) => <VaginaIcon height={height} width={width} />
      svg: <VaginaIcon />,
    },
    {
      title: "serviceCard_subtitle2",
      subtitle:"serviceCard_text2",
      svg: <PregnancyCalendarIcon />,
    },
    {
      title: "serviceCard_subtitle3",
      subtitle:
        "serviceCard_text3",
      svg: <PregnancyStagesIcon />,
    },
  ];
  return (
    <div className="wrapper">
      <SectionTitle>{t('serviceCard_title')}</SectionTitle>
      <div className={styles.cardsWrapper}>
        {cardList.map((card, i) => (
          <ServiceCard key={i} data={card} />
        ))}
      </div>
    </div>
  );
}
