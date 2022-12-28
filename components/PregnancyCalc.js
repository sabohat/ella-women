import React from 'react'
import { useTranslation } from 'react-i18next';
import MuiButton from './common/Button';
import Button from './common/Button';
import MuiDatePicker from './common/MuiDatePicker';
import MuiTextFields from './common/MuiTextField';
import styles from "./PregnancyCalc.module.scss";
import { FireWorkBottom, FireWorks, FireWorkTop } from './svg';

export default function PregnancyCalc() {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.hero}>
                <div className='wrapper'>
                    <div className={styles.content}>
                        <div classname={styles.titleWrapper}>
                            <h2 className='section-title'>Калькулятор беременности: </h2>
                            <h2 className='section-title'>подсчитайте, когда родится ваш ребенок</h2>
                        </div>
                        <div className={styles.calcWrapper}>
                            <div className={styles.inputs}>
                                <div className={styles.input}>
                                    <MuiDatePicker label={"Первый день последней менструации"} />
                                </div>
                                <div className={styles.input}>
                                    <MuiTextFields label="Средняя длина цикла(дни)" />
                                </div>
                            </div>
                            <div className={styles.button}>
                                <MuiButton label="Показать резулат" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <div className='wrapper'>
                    <div className={styles.content}>
                        <div classname={styles.titleWrapper}>
                            <h2 className='section-title'>Результат</h2>
                        </div>
                        <div className={styles.resultContainer}>
                            <div className={styles.resultCard}>
                                <div className={styles.fireworkBottom}>
                                    <FireWorkBottom />
                                </div>
                                <div className={styles.fireworkTop}>
                                    <FireWorkTop />
                                </div>


                                <p className={styles.boldText}>Вы встретите своего ребенка в</p>
                                <h2 className={styles.resultText}>17 Июня, 2023</h2>
                                <span className={styles.bottomText}>Суббота</span>
                            </div>
                            <div className={styles.trimester}>
                                <div className={styles.trimesterCard}>
                                    <div className={styles.trimesterText}>
                                        <h3>{t("1st trimester")}</h3>
                                        <span className={styles.grayText}>1 aprel, 2022 - 23 yanvar, 2022</span>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.trimesterCard}>
                                    <div className={styles.trimesterText}>
                                        <h3>{t("1st trimester")}</h3>
                                        <span className={styles.grayText}>1 aprel, 2022 - 23 yanvar, 2022</span>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.trimesterCard}>
                                    <div className={styles.trimesterText}>
                                        <h3>{t("1st trimester")}</h3>
                                        <span className={styles.grayText}>1 aprel, 2022 - 23 yanvar, 2022</span>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                        </div>
                        <div className={` ${styles.resultContainer} ${styles.weekContainer}`}>
                            <span>Siz hozir 6-haftadasiz 😊</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
