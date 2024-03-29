import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import AboutUsHero from '../../components/AboutUsHero'
import ServiceSection from '../../components/ServiceSection';

export default function Product () {
    return <>
        <AboutUsHero />
        <ServiceSection />
    </>
}


// copy this to support translations
export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});