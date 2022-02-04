import "@gouvfr/dsfr/dist/dsfr/dsfr.min.css"
import "../styles/main.scss"

import * as Sentry from "@sentry/node"
import { init } from "@socialgouv/matomo-next"
import App from "next/app"
import React from "react"

const MATOMO_URL = process.env.MATOMO_URL
const MATOMO_SITE_ID = process.env.MATOMO_SITE_ID

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

console.log({
  matomoSiteId: process.env.MATOMO_SITE_ID,
  matomoUrl: process.env.MATOMO_URL,
})

class MyApp extends App {
  componentDidMount() {
    console.log({
      matomoSiteId: process.env.MATOMO_SITE_ID,
      matomoUrl: process.env.MATOMO_URL,
    })
    init({ siteId: MATOMO_SITE_ID, url: MATOMO_URL })
  }
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
