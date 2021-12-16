import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Je suis salarié : mes interlocuteurs de proximité</title>
      </Head>
      <div className="fr-container">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">
            Je suis salarié : mes interlocuteurs de proximité
          </h1>
        </div>
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-10">
            <h2 className="fr-h6">Pour définir votre projet</h2>
            <p>
              Vous pouvez contacter votre employeur, votre service des
              ressources humaines (RH) ou{" "}
              <a target="_blank" href="https://mon-cep.org/" rel="noreferrer">
                un conseiller en évolution professionnelle (CEP)
              </a>{" "}
              qui vous accompagnera dans la définition et la construction de
              votre parcours de reconversion.
            </p>
            <p>
              En savoir plus:{" "}
              <a target="_blank" href="https://mon-cep.org/" rel="noreferrer">
                https://www.mon-cep.org
              </a>{" "}
            </p>

            <h2 className="fr-h6">Pour réaliser votre projet</h2>
            <p>
              Les associations Transitions Pro vous accompagnent pour élaborer
              votre demande de financement de reconversion et organiser votre
              parcours de formation
            </p>
            <p>
              Contactez l’association Transitions pro dans votre région :
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.transitionspro.fr/"
              >
                https://www.transitionspro.fr/
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
