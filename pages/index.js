import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUsHero from '../components/AboutUsHero'
import ArticleSection from '../components/ArticleSection'

import Header from '../components/Header'
import ServiceCard from '../components/ServiceSection'
import styles from '../styles/Home.module.css'

// copy this to support translations
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <AboutUsHero />
      <ServiceCard />
      <ArticleSection />
    </>
  )
}

// copy this to support translations
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});
