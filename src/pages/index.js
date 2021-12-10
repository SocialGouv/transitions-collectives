import React from "react"

import HomeBanner from "@/components/HomeBanner"
import HomeCompany from "@/components/HomeCompany"
import HomeEmployee from "@/components/HomeEmployee"
import HomeInfography from "@/components/HomeInfography"
import HomeNews from "@/components/HomeNews"
import HomeVideo from "@/components/HomeVideo"
import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <div spacing="fr-pt-2w">
        <HomeBanner />
      </div>
      <section className="fr-py-4w" id="video">
        <HomeVideo />
      </section>
      <section className="fr-py-4w" id="infography">
        <HomeInfography />
      </section>
      <section className="fr-py-4w" id="news">
        <HomeNews />
      </section>
      <section className="fr-py-4w" id="salarie">
        <HomeEmployee />
      </section>
      <section className="fr-py-4w" id="entreprise">
        <HomeCompany />
      </section>
    </Layout>
  )
}

export default Page
