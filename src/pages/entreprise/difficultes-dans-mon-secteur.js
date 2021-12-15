import Head from "next/head"
import React from "react"

import CompanyMutationFaq from "@/components/CompanyMutationFaq"
import CompanyMutationInfography from "@/components/CompanyMutationInfography"
import CompanyMutationVideo from "@/components/CompanyMutationVideo"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Difficultés dans mon secteur</title>
      </Head>
      <div className="fr-container">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">
            Je fais face à des difficultés dans mon secteur d’activité
          </h1>
        </div>
      </div>
      <section className="fr-py-2w" id="infography">
        <CompanyMutationInfography />
      </section>
      <section className="fr-py-2w" id="video">
        <CompanyMutationVideo />
      </section>
      <section className="fr-py-2w" id="faq">
        <CompanyMutationFaq />
      </section>
    </Layout>
  )
}

export default Page
