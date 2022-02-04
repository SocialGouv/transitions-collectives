const webpack = require("webpack")
const nextSourceMaps = require("@zeit/next-source-maps")

module.exports = nextSourceMaps({
  env: {
    GITHUB_ORGANIZATION: process.env.GITHUB_ORGANIZATION,
    NEXT_PUBLIC_MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID,
    NEXT_PUBLIC_MATOMO_URL: process.env.NEXT_PUBLIC_MATOMO_URL,
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
  webpack: (config, { isServer, buildId }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        // looks like it doesnt work for some reason
        "process.env.SENTRY_RELEASE": JSON.stringify(buildId),
      })
    )

    // config.module.rules.push({
    //   test: /\.ya?ml$/,
    //   use: "js-yaml-loader",
    // })

    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser"
    }

    return config
  },
})
