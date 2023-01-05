import dayjs from 'dayjs';
require('dayjs/locale/ru')
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import MuiButton from './common/Button';
import Button from './common/Button';
import MuiDatePicker from './common/MuiDatePicker';
import MuiProgress from './common/MuiProgress';
import MuiTextFields from './common/MuiTextField';
import styles from "./PregnancyCalc.module.scss";
import { FireWorkBottom, FireWorks, FireWorkTop } from './svg';

export default function PregnancyCalc() {
    const { t } = useTranslation()

    const [date, setDate] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [isCalculated, setCalculated] = useState(false)
    const [data, setData] = useState({})

    const calculate = () => {
        setIsLoading(true)

        const givenDate = dayjs(date)
        const now = dayjs()

        // subtract 3 months add 1 year and 7 days
        const birthDate = dayjs(givenDate).subtract(3, 'month').add(1, 'year').add(7, 'day')
        console.log(date)

        // find difference in weeks: which week is she now?
        const pregWeeks = now.diff(givenDate, 'days');

        // divide into trimesters

        const firstTrimesterStart = dayjs(givenDate)

        // 1st trimester, 1week - 12week
        const firstTrimesterEnd = dayjs(givenDate).add(12, 'week').subtract(1, 'day')

        // 2nd Trimester start
        const secondTrimesterStart = dayjs(givenDate).add(12, 'week')
        const secondTrimesterEnd = dayjs(givenDate).add(26, 'week').subtract(1, 'day')
        // 3rd TrimesterStart
        const thirdTrimesterStart = dayjs(givenDate).add(26, 'week')
        const thirdTrimesterEnd = dayjs(birthDate)



        setData({
            birthDate: birthDate,
            pregWeeks: pregWeeks,
            firstTrimesterStart: firstTrimesterStart,
            firstTrimesterEnd: firstTrimesterEnd,
            secondTrimesterStart: secondTrimesterStart,
            secondTrimesterEnd: secondTrimesterEnd,
            thirdTrimesterStart: thirdTrimesterStart,
            thirdTrimesterEnd: thirdTrimesterEnd
        })

        setCalculated(true)
        setIsLoading(false)
    }

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
                                    <MuiDatePicker value={date} setValue={setDate} label={"Первый день последней менструации"} />
                                </div>
                                <div className={styles.input}>
                                    <MuiTextFields label="Средняя длина цикла(дни)" />
                                </div>
                            </div>
                            <div className={styles.button}>
                                <MuiButton label="Показать резулат" onClick={() => calculate()} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isLoading && <MuiProgress />}

            {isCalculated && !isLoading && <div className={styles.body}>
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
                                <h2 className={styles.resultText}>{dayjs(data?.birthDate).locale('ru').format('D MMMM, YYYY')}</h2>
                                <span className={styles.bottomText}>{dayjs(data?.birthDate).locale('ru').format('dddd')}</span>
                            </div>
                            <div className={styles.trimester}>
                                <div className={styles.trimesterCard}>
                                    <div className={styles.trimesterText}>
                                        <h3>{t("1st trimester")}</h3>
                                        <span className={styles.grayText}>{dayjs(data?.firstTrimesterStart).locale('ru').format('D MMM, YYYY')} {' - '} {dayjs(data?.firstTrimesterEnd).format('D MMM, YYYY')}</span>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.trimesterCard}>
                                    <div className={styles.trimesterText}>
                                        <h3>{t("1st trimester")}</h3>
                                        <span className={styles.grayText}>{dayjs(data?.firstTrimesterStart).locale('ru').format('D MMM, YYYY')} {' - '} {dayjs(data?.firstTrimesterEnd).format('D MMM, YYYY')}</span>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.trimesterCard}>
                                    <div className={styles.trimesterText}>
                                        <h3>{t("1st trimester")}</h3>
                                        <span className={styles.grayText}>{dayjs(data?.firstTrimesterStart).locale('ru').format('D MMM, YYYY')} {' - '} {dayjs(data?.firstTrimesterEnd).format('D MMM, YYYY')}</span>
                                    </div>
                                    <div className={styles.line}></div>
                                </div>
                            </div>
                        </div>
                        <div className={` ${styles.resultContainer} ${styles.weekContainer}`}>
                            <span>Вы сейчас на {data?.pregWeeks} неделе 😊</span>
                        </div>
                    </div>
                </div>
            </div>
            }

        </>
    )
}
