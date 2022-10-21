import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUsHero from '../components/AboutUsHero'

import Header from '../components/Header'
import ServiceCard from '../components/ServiceSection'
import styles from '../styles/Home.module.css'
import ArticlesSection from '../components/ArticlesSection'

export default function Home() {
  return (
    <>
      <AboutUsHero />
      <ServiceCard/>
      <ArticlesSection />
    </>
  )
}
