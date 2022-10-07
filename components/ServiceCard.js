import React from 'react'

import styles from "./ServiceCard.module.scss"
export default function ServiceCard({ data }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{data?.title}</h3>
                <p className={styles.cardSubtitle}>{data?.subtitle}</p>
            </div>
            <div className={styles.cardIcon}>
                {data?.svg}
            </div>
        </div>
    )
}
