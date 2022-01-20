import Head from "next/head"
import React from "react"

import ContactSearchPanel from "@/components/ContactSearchPanel"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>
          Je suis responsable d’une entreprise : mes interlocuteurs de proximité
        </title>
      </Head>
      <div className="fr-container">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">
            Je suis responsable d’une entreprise : mes interlocuteurs de
            proximité
          </h1>
        </div>
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-10">
            <div className="fr-pb-4w">
              <ContactSearchPanel />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
