import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Vercel from 'public/vercel.svg'

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
        <div style={{ width: 300, position: 'relative' }}>
          <Image src="/vercel.svg" layout="fill" />
          <Vercel
            style={{
              position: 'relative',
              top: 50,
              left: 4,
              color: 'red',
            }}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
