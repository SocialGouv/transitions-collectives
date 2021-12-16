import { MediaVideo } from "@dataesr/react-dsfr"
import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <div className="news">
        <Head>
          <title>
            Témoignage : une formation pour devenir conducteur de véhicules
          </title>
        </Head>

        <div className="fr-container">
          <header>
            <h1 className="fr-h3 fr-pt-4w">
              Témoignage : une formation pour devenir conducteur de véhicules
            </h1>
            <p>
              <strong>
                Face à des difficultés dans son activité, l’entreprise
                d’insertion Triaction a fait appel à Transitions collectives.
                Farid Mechhat, chef d’équipe dans ce centre de tri, a débuté un
                parcours de formation vers un métier porteur de sa région, celui
                de conducteur poids lourd. Il témoigne.
              </strong>
            </p>
          </header>
          <section>
            <article>
              <h2 className="fr-h6">Une formation certifiante et sécurisée</h2>
              <p>
                Pour Farid Mecchat, salarié en formation pour devenir chauffeur
                poids lourd, Transitions collectives est une opportunité à
                saisir.
              </p>
              <p>
                «C’est une très bonne occasion de se former, de garder son
                salaire et de rester sur Pithiviers. Je peux avoir un diplôme à
                la fin de la formation, ce que je n’ai pas eu l’occasion d’avoir
                en France.»
              </p>
              <div className="fr-grid-row fr-grid-row--center fr-pb-4w">
                <div className="fr-col-lg-8 fr-col-12">
                  <MediaVideo>
                    <iframe
                      title="Lancement officiel du dispositif « Transitions Collectives »"
                      className="fr-responsive-vid__player"
                      src="https://www.dailymotion.com/embed/video/x85ewa0?loop=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                  </MediaVideo>
                </div>
              </div>
              <p>
                Le salaire du salarié en Transitions collectives est maintenu
                pendant toute la durée de la formation (en savoir plus sur le
                maintien de salaire). L’objectif est de proposer une
                reconversion sereine et sécurisée.
              </p>

              <h2 className="fr-h6">Une formation vers un métier d’avenir</h2>
              <p>
                La formation de Farid Mecchat, celle de conducteur de véhicules,
                est référencée dans la liste des{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://travail-emploi.gouv.fr/IMG/pdf/liste_metiers_porteurs_cvl.pdf"
                >
                  métiers porteurs de sa région, le Loiret
                </a>
                . Ces métiers émergents sont issus de nouveaux domaines
                d’activité ou de métier en tension dans des secteurs qui peinent
                à recruter.
              </p>
              <p>
                Comme Farid Mecchat, vous pouvez choisir le métier vers lequel
                vous souhaitez vous diriger à partir de{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                >
                  ces listes
                </a>
                .
              </p>
              <section>
                <p>
                  <em>
                    Article rédigé sur la base de témoignages recueillis par la{" "}
                    <a
                      target="_blank"
                      href="https://centre-val-de-loire.dreets.gouv.fr/Transitions-collectives-Transco-faciliter-la-reconversion-de-vos-salaries"
                      rel="noreferrer"
                    >
                      DREETS Centre-Val de Loire.{" "}
                    </a>
                  </em>
                </p>
              </section>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Page
