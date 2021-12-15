import Head from "next/head"
import React from "react"

import EmployeeFaq from "@/components/EmployeeFaq"
import EmployeeInfography from "@/components/EmployeeInfography"
import EmployeeVideo from "@/components/EmployeeVideo"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Je suis salarié</title>
      </Head>
      <div className="fr-container">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">Je suis salarié</h1>
        </div>
      </div>
      <section className="fr-py-2w" id="infography">
        <EmployeeInfography />
      </section>
      <section className="fr-py-2w" id="video">
        <EmployeeVideo />
      </section>
      <section className="fr-py-2w" id="faq">
        <EmployeeFaq />
      </section>
    </Layout>
  )
}

export default Page
