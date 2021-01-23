import React from "react"
import PropTypes from "prop-types"
import AppLayout from "@/components/AppLayout"
import Head from "next/head"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.object,
}

export default MyApp
