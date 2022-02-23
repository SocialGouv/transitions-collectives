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
              reconvertir vers un métier porteur dans votre région. Les métiers
              porteurs, également appelés métiers d’avenir, sont issus de
              nouveaux domaines d’activité ou de métiers en tension dans des
              secteurs qui peinent à recruter.
            </p>
            <p>
              Vous pouvez choisir le métier vers lequel vous souhaitez vous
              diriger à partir de ces listes régionales:
            </p>
            <center>
              <iframe
                title="Liste des métiers d'avenir"
                width="780"
                height="700"
                data-original-width="780"
                data-original-height="700"
                src="https://www.thinglink.com/card/1438856654991917057"
                type="text/html"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                scrolling="no"
              />
            </center>
            <p>
              Retrouvez également les offres d’emplois dans les secteurs qui
              recrutent sur le site de{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://candidat.pole-emploi.fr/offres/emploi"
              >
                Pôle emploi
              </a>
              , de l’
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.apec.fr/candidat/recherche-emploi.html/emploi"
              >
                Apec
              </a>{" "}
              ou encore sur le réseau professionnel{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fr.linkedin.com/jobs"
              >
                Linkedin
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
