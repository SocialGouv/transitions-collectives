import "../styles/main.scss"
import "@gouvfr/dsfr/dist/dsfr/dsfr.min.css"

import * as Sentry from "@sentry/node"
import React, { useEffect } from "react"

import { initMatomo } from "../lib/matomo"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
})

console.log({
  dsn: process.env.SENTRY_DSN,
  matomoSiteId: process.env.MATOMO_SITE_ID,
  matomoUrl: process.env.MATOMO_URL,
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initMatomo({
      piwikUrl: process.env.MATOMO_URL,
      siteId: process.env.MATOMO_SITE_ID,
    })
  })
  return <Component {...pageProps} />
}
