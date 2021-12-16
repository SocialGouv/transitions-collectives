import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Sites utiles</title>
      </Head>
      <div className="fr-container">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">Sites utiles</h1>
        </div>
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-10">
            <h2 className="fr-h6">
              Pour l’accompagnement à la reconversion professionnelle
            </h2>
            <p>
              <a target="_blank" href="https://mon-cep.org/" rel="noreferrer">
                Mon-cep.org
              </a>
            </p>

            <h2 className="fr-h6">
              Pour connaître les métiers porteurs de ma région
            </h2>
            <p>
              <a
                target="_blank"
                href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                rel="noreferrer"
              >
                Site du ministère du Travail, de l’Emploi et de l’Insertion
              </a>
            </p>

            <h2 className="fr-h6">
              Pour être accompagné dans la mise en place du dispositif
            </h2>
            <p>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/d/u/2/edit?mid=1kIhuHBMGKdNdq14RiYPG3YXAsG51a-Pv&usp=sharing"
                    rel="noreferrer"
                  >
                    Opco
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="www.transitionspro.fr"
                    rel="noreferrer"
                  >
                    At Pro
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page
