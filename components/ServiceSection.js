import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import styles from "./ServiceCard.module.scss";
import { useTranslation } from 'next-i18next';


import { PregnancyCalendarIcon, PregnancyStagesIcon, VaginaIcon } from "./svg";

export default function ServiceSection() {
  const {t} = useTranslation('common')
  const cardList = [
    {
      title: "serviceCardTitle1",
      subtitle: "serviceCardSubtitle1",
      // svg: (height, width) => <VaginaIcon height={height} width={width} />
      svg: <VaginaIcon />,
    },
    {
      title: "serviceCardTitle2",
      subtitle:
        "serviceCardSubtitle2",
      svg: <PregnancyCalendarIcon />,
    },
    {
      title: "serviceCardTitle3",
      subtitle:
        "serviceCardSubtitle3",
      svg: <PregnancyStagesIcon />,
    },
  ];
  return (
    <div className="wrapper">
      <SectionTitle>{t('service_section_title')}</SectionTitle>
      <div className={styles.cardsWrapper}>
        {cardList.map((card, i) => (
          <ServiceCard key={i} data={card} />
        ))}
      </div>
    </div>
  );
}
