import React from 'react'
import ServiceCard from './ServiceCard'

import { PregnancyCalendarIcon, PregnancyStagesIcon, VaginaIcon } from './svg'


export default function ServiceSection() {

    const cardList = [
        {
            title: "Отслеживание цикла",
            subtitle: "Поймите свой цикл и почувствуйте себя лучшей",
            // svg: (height, width) => <VaginaIcon height={height} width={width} />
            svg: <VaginaIcon />
        },
        {
            title: "Увеличьте свои шансы забеременеть",
            subtitle: "Особые условия для покупателей апартаментов, автомобиль в аренду за сто рублей на срок до года",
            svg: <PregnancyCalendarIcon />
        },
        {
            title: "Будьте здоровы во время беременности",
            subtitle: "Особые условия для покупателей апартаментов, автомобиль в аренду за сто рублей на срок до года",
            svg: <PregnancyStagesIcon />
        }
    ]
    return (
        <>
            <div>
                {
                    cardList.map((card) =>
                        <ServiceCard card={card} />
                    )
                }
            </div>
        </>

    )
}
