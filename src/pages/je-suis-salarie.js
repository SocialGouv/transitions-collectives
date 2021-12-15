import React from "react"

import EmployeeFaq from "@/components/EmployeeFaq"
import EmployeeInfography from "@/components/EmployeeInfography"
import EmployeeVideo from "@/components/EmployeeVideo"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <div className="fr-container">
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-lg-6 fr-mt-4w">
            <h1>Je suis un salarié</h1>
          </div>
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
