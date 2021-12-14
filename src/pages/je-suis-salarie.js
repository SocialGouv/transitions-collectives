import EmployeeFaq from "@/components/EmployeeFaq"
import EmployeeInfography from "@/components/EmployeeInfography"
import EmployeeVideo from "@/components/EmployeeVideo"
import Layout from "@/components/Layout"
import React from "react"

const Page = () => {
  return (
    <Layout>
      <section className="fr-py-4w" id="infography">
        <EmployeeInfography />
      </section>
      <section className="fr-py-4w" id="video">
        <EmployeeVideo />
      </section>
      <section className="fr-py-4w" id="faq">
        <EmployeeFaq />
      </section>
    </Layout>
  )
}

export default Page
