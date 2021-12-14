import React from "react"

import CompanyMutationFaq from "@/components/CompanyMutationFaq"
import CompanyMutationInfography from "@/components/CompanyMutationInfography"
import CompanyMutationVideo from "@/components/CompanyMutationVideo"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <section className="fr-py-4w" id="infography">
        <CompanyMutationInfography />
      </section>
      <section className="fr-py-4w" id="video">
        <CompanyMutationVideo />
      </section>
      <section className="fr-py-4w" id="faq">
        <CompanyMutationFaq />
      </section>
    </Layout>
  )
}

export default Page
