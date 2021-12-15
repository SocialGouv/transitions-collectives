import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>En souhait d’évolution vers un secteur qui recrute</title>
      </Head>
      <div className="fr-container employee-evolution">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">
            En souhait d’évolution vers un secteur qui recrute
          </h1>
        </div>
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-10">
            <p>
              Avec Transitions collectives, vous avez la possibilité de vous
              reconvertir vers un métier porteur de votre région. Les métiers
              porteurs, également appelé métiers d’avenir, sont issus de
              nouveaux domaines d’activité ou de métiers en tension dans des
              secteurs qui peinent à recruter.
            </p>
            <p>
              Vous pouvez choisir le métier vers lequel vous souhaitez vous
              diriger à partir de listes régionales, accessibles sur le{" "}
              <a
                target="_blank"
                href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                rel="noreferrer"
              >
                site du ministère du Travail, de l’Emploi et de l’Insertion
              </a>
              .
            </p>
            <p>
              Des questions sur Transitions collectives ?{" "}
              <a target="_self" href="/salarie/avenir-professionel#faq">
                Consultez la FAQ
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
