import React from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import 'i18n'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
