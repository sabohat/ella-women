import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AboutUsHero from '../components/AboutUsHero'

import Header from '../components/Header'
import Intro from '../components/Intro/Intro'
import ServiceCard from '../components/ServiceSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

      <Intro />

      {/* <AboutUsHero /> */}
      <ServiceCard/>
    </>
  )
}
