import React from 'react'

import styles from "./SectionTitle.module.scss"
export default function SectionTitle(props) {
    return (
           <h2 className={styles.sectionTitle}>{props.sectionTitle}</h2>
    )
}