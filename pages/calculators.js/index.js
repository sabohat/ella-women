import Link from 'next/link'
import React from 'react'
import PregnancyCalc from '../../components/PregnancyCalc'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function CalculatorsPage() {
    return (
        <div>
            <PregnancyCalc />
        </div>
    )
}


// copy this to support translations
export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});