import React from 'react'
import ArticleSection from '../components/ArticleSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function articles () {
    return (
        <ArticleSection />
    )
}

// copy this to support translations
export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});