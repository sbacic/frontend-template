import React from 'react'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const { query } = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{t('title')}</h1>
        <h2>by</h2>
        <h1>{query.name}</h1>
      </main>
    </div>
  )
}

export default Home
