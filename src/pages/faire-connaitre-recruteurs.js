import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>
          faire connaitre le dispositif auprès de mes collègues de travail et de
          mes partenaires
        </title>
      </Head>
      <div className="fr-container">
        <div className="fr-grid-row">
          <h1 className="fr-h3 fr-pt-4w">Page en construction</h1>
        </div>
        <div className="fr-grid-row">
          <p>
            Je souhaite faire connaitre le dispositif auprès des recruteurs de
            mon territoire
          </p>
          <div className="fr-col-12 fr-col-md-10">
            <img
              className="responsive"
              alt=""
              src="/images/page-en-construction.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
