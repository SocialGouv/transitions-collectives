import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Sites utiles</title>
      </Head>
      <div className="fr-container usefull-wrapper">
        <div className="fr-grid-row">
          <h1 className="fr-h2 fr-pt-4w">Sites utiles</h1>
        </div>
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-10">
            <h2 className="fr-h6">En tant qu’entreprise ou partenaire:</h2>

            <p>
              <strong>
                Pour être accompagné dans la mise en place du dispositif:
              </strong>
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

            <h2 className="fr-h6">En tant que salarié:</h2>

            <p>
              <strong>
                Pour l’accompagnement à la reconversion professionnelle:
              </strong>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://mon-cep.org/"
                    rel="noreferrer"
                  >
                    Mon-cep.org
                  </a>
                </li>
              </ul>
            </p>

            <p>
              <strong>
                Et rechercher un emploi dans un secteur qui recrute:
              </strong>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://candidat.pole-emploi.fr/offres/emploi"
                    rel="noreferrer"
                  >
                    Pôle emploi
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.apec.fr/candidat/recherche-emploi.html/emploi"
                    rel="noreferrer"
                  >
                    APEC
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://fr.linkedin.com/jobs"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </p>

            <p>
              <strong>Pour connaître les métiers porteurs de ma région:</strong>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                    rel="noreferrer"
                  >
                    Site du ministère du Travail, de l’Emploi et de l’Insertion
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
