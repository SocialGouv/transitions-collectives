import Head from "next/head"
import React from "react"

import CompanyRecruitmentFaq from "@/components/CompanyRecruitmentFaq"
import CompanyRecruitmentInfography from "@/components/CompanyRecruitmentInfography"
import CompanyRecruitmentVideo from "@/components/CompanyRecruitmentVideo"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Besoins en recrutement</title>
      </Head>
      <div className="fr-container">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">{`J'ai des besoins en recrutement`}</h1>
        </div>
      </div>
      <section className="fr-py-2w" id="infography">
        <CompanyRecruitmentInfography />
      </section>
      <section className="fr-py-2w" id="video">
        <CompanyRecruitmentVideo />
      </section>
      <section className="fr-py-2w" id="faq">
        <CompanyRecruitmentFaq />
      </section>
    </Layout>
  )
}

export default Page
