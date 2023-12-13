import dayjs from 'dayjs';
import('dayjs/locale/ru')
import('dayjs/locale/uz-latn')

import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import MuiButton from './common/Button';
import MuiDatePicker from './common/MuiDatePicker';
import MuiProgress from './common/MuiProgress';
import styles from "./PregnancyCalc.module.scss";
import { FireWorkBottom, FireWorkTop, NewBornAndMum } from './svg';
import LanguageMenu from './LanguageMenu';


export default function PregnancyCalc () {
    const { t } = useTranslation("common")
    const router = useRouter();

    const currentLanguage = router.locale == "uz" ? "uz-latn" : "ru"
    const [date, setDate] = useState(null)

    const [isLoading, setIsLoading] = useState(false)
    const [isCalculated, setCalculated] = useState(false)
    const [data, setData] = useState({})

    const calculate = () => {
        if (!date) {
            return setIsLoading(false)
        }

        setIsLoading(true)
        setCalculated(false)

        const givenDate = dayjs(date)
        const now = dayjs()

        // subtract 3 months add 1 year and 7 days
        const birthDate = dayjs(givenDate).subtract(3, 'month').add(1, 'year').add(7, 'day')
        console.log(date, givenDate)

        // find difference in weeks: which week is she now?
        const pregWeeks = now.diff(givenDate, 'weeks');

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

        // setCalculated(true)
        // setIsLoading(false)
    }

    useEffect(() => {
        let timer

        if (isLoading) {
            timer = setTimeout(() => {
                setIsLoading(false)
                setCalculated(true)
            }, 1000)
        }

    }, [isLoading])

    return (
        <>

            <div
                className={styles.button}>
                <a href="https://t.me/my_ella"> <MuiButton label={t('join_channel')}></MuiButton></a></div>
            <div className={styles.hero}>
                <div className='wrapper'>
                    <LanguageMenu />

                    <div className={styles.content}>
                        <div className={styles.titleWrapper}>
                            <h2 className='section-title'>{t("Pregnancy calculator: ")}</h2>
                            <h2 className='section-title mobile-hidden'>{t("Calculate when you will meet your baby")}</h2>
                        </div>
                        {isLoading ?
                            <MuiProgress />

                            :
                            !isCalculated ?
                                <div className={styles.calcWrapper}>
                                    <div className={styles.inputs}>
                                        <div className={styles.input}>
                                            <MuiDatePicker
                                                value={date}
                                                setValue={setDate}
                                                label={t("First day of the last cycle")}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.button}>
                                        <MuiButton label={t("Show result")} onClick={() => calculate()} />

                                    </div>
                                </div>
                                : <>
                                    <div className={styles.resultContainer}>
                                        <div className={styles.resultCard}>
                                            <div className={styles.fireworkBottom}>
                                                <FireWorkBottom />
                                            </div>
                                            <div className={styles.fireworkTop}>
                                                <FireWorkTop />
                                            </div>


                                            <p className={styles.boldText}>{t("You will meet your baby at")}</p>
                                            <div className={styles.babyNmom}>
                                                <NewBornAndMum />
                                            </div>
                                            <h2 className={styles.resultText}>{dayjs(data?.birthDate).locale(currentLanguage).format('D MMMM, YYYY')}</h2>
                                            <span className={styles.bottomText}>{dayjs(data?.birthDate).locale(currentLanguage).format('dddd')}</span>
                                        </div>
                                        <div className={styles.trimester}>
                                            <div className={styles.trimesterCard}>
                                                <div className={styles.trimesterText}>
                                                    <h3>{t("1st trimester")}</h3>
                                                    <span className={styles.grayText}>{dayjs(data?.firstTrimesterStart).locale(currentLanguage).format('D MMMM')} {' - '} {dayjs(data?.firstTrimesterEnd).locale(currentLanguage).format('D MMMM')}</span>
                                                </div>
                                                <div className={styles.line}></div>
                                            </div>
                                            <div className={styles.trimesterCard}>
                                                <div className={styles.trimesterText}>
                                                    <h3>{t("2nd trimester")}</h3>
                                                    <span className={styles.grayText}>{dayjs(data?.secondTrimesterStart).locale(currentLanguage).format('D MMMM')} {' - '} {dayjs(data?.secondTrimesterEnd).locale(currentLanguage).format('D MMMM')}</span>
                                                </div>
                                                <div className={styles.line}></div>
                                            </div>
                                            <div className={styles.trimesterCard}>
                                                <div className={styles.trimesterText}>
                                                    <h3>{t("3rd trimester")}</h3>
                                                    <span className={styles.grayText}>{dayjs(data?.thirdTrimesterStart).locale(currentLanguage).format('D MMMM')} {' - '} {dayjs(data?.thirdTrimesterEnd).locale(currentLanguage).format('D MMMM')}</span>
                                                </div>
                                                <div className={styles.line}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={` ${styles.resultContainer} ${styles.weekContainer}`}>
                                        <span>{t("You are")} {data?.pregWeeks} {t("weeks pregnant")} 😊</span>
                                    </div>
                                    <div className={` ${styles.button}`}>
                                        <MuiButton label="Qayta hisoblash" onClick={() => setCalculated(false)} />
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div
                className={styles.button}>
                <a href="https://t.me/my_ella"> <MuiButton label={t('join_channel')}></MuiButton></a></div>

        </>
    )
}

