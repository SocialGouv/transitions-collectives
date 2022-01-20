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

            <h2 className="fr-h6">Association de Transitions Pro</h2>
            <p>
              Votre association Transitions Pro est à votre service pour
              faciliter le recours au dispositif et fluidifier l’organisation
              des parcours de vos salariés. C’est auprès d’elle que vous
              déposerez votre dossier de Transitions collectives (avec l’appui
              de l’OPCO, le cas échéant).
            </p>
            <p>
              Pour la contacter:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.transitionspro.fr"
              >
                http://www.transitionspro.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
