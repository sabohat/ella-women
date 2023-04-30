import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

export default function aboutUs () {
    return (
        <div>about-us</div>
    )
}

// copy this to support translations
export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common']))
    }
});