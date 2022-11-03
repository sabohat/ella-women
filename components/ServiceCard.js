import React from 'react'
import { useTranslation } from 'next-i18next';
import styles from "./ServiceCard.module.scss"


export default function ServiceCard({ data }) {
    const { t } = useTranslation('common');
    return (
        <div className={styles.card}>
            <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{t(data.title)}</h3>
                <p className={styles.cardSubtitle}>{t(data.subtitle)}</p>
            </div>
            <div className={styles.cardIcon}>
                {data?.svg}
            </div>
        </div>
    )
}
