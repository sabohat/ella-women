import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import BabyNamesSection from '../components/BabyNamesSection'

export default function babyNames () {
    return (
        <BabyNamesSection />
    )
}

// copy this to support translations
export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});