import React from 'react'
import MuiButton from './common/Button';
import Button from './common/Button';
import MuiDatePicker from './common/MuiDatePicker';
import MuiTextFields from './common/MuiTextField';
import styles from "./PregnancyCalc.module.scss";

export default function PregnancyCalc() {
    return (
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
    )
}
