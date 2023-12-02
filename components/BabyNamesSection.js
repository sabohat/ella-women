import { useTranslation } from 'next-i18next';
import React from "react"
import styles from "./BabyNamesSection.module.scss";

export default function BabyNamesSection () {
    const { t } = useTranslation()
    return (
        <></>
        // <div className="wrapper article-section">
        //     <div className={styles.title}><span>{t("top_10_names")}</span></div>
        //     <div className={styles.flex}>
        //         <div className={styles.box}>
        //             <div className={styles.subtitle}>{t("boy_names")}</div>
        //             <ol>
        //                 <li>Jabroil</li>
        //                 <li>Muhammad</li>
        //                 <li>Mustafo</li>
        //                 <li>Zubayr</li>
        //                 <li>Imron</li>
        //                 <li>Umar</li>
        //                 <li>Muhammadyusuf</li>
        //                 <li>Ali</li>
        //                 <li>Abdulloh</li>
        //                 <li>Muhammadali</li>
        //             </ol>
        //         </div>

        //         <div className={styles.box}>
        //             <div className={styles.subtitle}>{t("girl_names")}</div>
        //             <ol>
        //                 <li>Sa'diya</li>
        //                 <li>Sumayya</li>
        //                 <li>Safiya</li>
        //                 <li>Yasmina</li>
        //                 <li>Samiya</li>
        //                 <li>Hadicha</li>
        //                 <li>Mubina</li>
        //                 <li>Madina</li>
        //                 <li>Muslima</li>
        //                 <li>Soliha</li>
        //             </ol>
        //         </div>
        //     </div>
        // </div>
    )
}
