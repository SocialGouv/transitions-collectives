import Head from "next/head"
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
      <Head>
        <title>Transitions Collectives</title>
      </Head>
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
      <section className="fr-container--fluid fr-py-4w engagement">
        <h2 className="fr-mb-6w fr-py-6w">{`Je vais plus loin`}</h2>
        <section className="fr-mb-4w" id="entreprise">
          <HomeCompany />
        </section>
        <section className="fr-mb-4w" id="salarie">
          <HomeEmployee />
        </section>
      </section>
    </Layout>
  )
}

export default Page
