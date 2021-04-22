import React from 'react'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{t('title')}</h1>
      </main>
    </div>
  )
}

export default Home
