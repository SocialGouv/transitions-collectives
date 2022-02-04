import "../styles/main.scss"
import "@gouvfr/dsfr/dist/dsfr/dsfr.min.css"

import * as Sentry from "@sentry/node"
import { init } from "@socialgouv/matomo-next"
import App from "next/app"
import React from "react"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

console.log({
  dsn: process.env.SENTRY_DSN,
  matomoSiteId: MATOMO_URL,
  matomoUrl: MATOMO_SITE_ID,
})

class MyApp extends App {
  componentDidMount() {
    init({ siteId: MATOMO_SITE_ID, url: MATOMO_URL })
  }
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
