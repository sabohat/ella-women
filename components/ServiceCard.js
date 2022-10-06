import React from 'react'

import styles from "./ServiceCard.module.scss"
export default function ServiceCard({ card }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{card?.title}</h3>
                <p className={styles.cardSubtitle}>{card?.subtitle}</p>
            </div>
            <div className={styles.cardIcon}>
                {card?.svg}
            </div>
        </div>
    )
}
