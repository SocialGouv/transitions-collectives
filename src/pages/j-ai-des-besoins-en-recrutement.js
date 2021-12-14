import React from "react"

import CompanyRecruitmentFaq from "@/components/CompanyRecruitmentFaq"
import CompanyRecruitmentInfography from "@/components/CompanyRecruitmentInfography"
import CompanyRecruitmentVideo from "@/components/CompanyRecruitmentVideo"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <section className="fr-py-4w" id="infography">
        <CompanyRecruitmentInfography />
      </section>
      <section className="fr-py-4w" id="video">
        <CompanyRecruitmentVideo />
      </section>
      <section className="fr-py-4w" id="faq">
        <CompanyRecruitmentFaq />
      </section>
    </Layout>
  )
}

export default Page
