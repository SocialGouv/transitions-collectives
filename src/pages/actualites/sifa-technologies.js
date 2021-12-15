import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <div className="news">
        <Head>
          <title>
            Témoignages : SIFA Technologies face à l’évolution des marchés
          </title>
        </Head>

        <div className="fr-container">
          <header>
            <h1 className="fr-h3 fr-pt-4w">
              Témoignages : SIFA Technologies face à l’évolution des marchés
            </h1>
            <p>
              <strong>
                Face aux mutations de la filière automobile, l’entreprise SIFA
                Technologies, spécialisée dans la transformation de l’aluminium
                a fait appel au dispositif Transitions collectives. Véritable
                outil d’anticipation, Transco propose une reconversion sereine
                et sécurisée aux salariés de l’entreprise. Témoignages de Julien
                Barbrault et Stéphanie Roux, respectivement directeur et RH de
                l’entreprise SIFA Technologies.
              </strong>
            </p>
          </header>
          <section>
            <article>
              <h2 className="fr-h4">
                Une réponse aux évolutions stratégiques de l’entreprise
              </h2>
              <p>
                SIFA Technologies, entreprise familiale crée en 1936, est une
                sous-traitante de la filière automobile spécialisée dans la
                transformation de l’aluminium.
              </p>
              <p>
                La société s’est spécialisée depuis quelques années dans le
                Diesel. Face à des métiers en mutation, l’entreprise doit
                aujourd’hui se positionner sur de nouveaux marchés : véhicules
                électriques, industrie hors automobile…
              </p>
              <p>
                L’entreprise a décidé de recourir au dispositif Transitions
                collectives afin d’accompagner une partie de ses salariés
                souhaitant se reconvertir vers d’autres métiers porteurs sur le
                bassin d’emploi de la métropole d’Orléans et de Pithiviers.
              </p>
              <p>
                « Le dispositif permet d’accompagner nos salariés vers des
                métiers d’avenir. Nous savons que SIFA Technologies va entamer
                une transition, des métiers historiques du Diesel vers d’autres
                métiers. Nous aurons besoin de nous redimensionner et de laisser
                partir un certain nombre de compétences vers d’autres
                secteurs. » Julien Barbrault, directeur de l’entreprise SIFA
                technologies. Écouter son témoignage complet.
              </p>

              <h2 className="fr-h4">
                Une réorientation stratégie de l’entreprise et des salariés
              </h2>
              <p>
                Pour Stéphanie Roux, responsable ressources humaines chez SIFA
                Technologies, Transitions collectives représente un moyen
                d’anticipation des projets RH de l’entreprise.
              </p>
              <p>
                « Dans le cadre des entreprises professionnels, je me suis
                aperçue que les salariés avaient un réel besoin de se
                reconvertir dans un milieu autre que l’industrie comme nous le
                pratiquons chez SIFA Technologies. Dans ce cadre, il m’a paru
                évident de faire appel à Transo pour mettre en place les projets
                des salariés. Il s’agit d’une réorientation stratégique, à la
                fois de l’entreprise et des salariés. » Stéphanie Roux.
              </p>
              <h2 className="fr-h4">Une reconversion négociée et sécurisée</h2>
              <p>
                SIFA Technologies signe actuellement un accord GEPP avec ses
                représentants du personnel afin d’identifier les métiers
                porteurs mais aussi les métiers fragilisés en son sein. La
                signature de cet accord est la première étape du parcours
                (renvoi vers question spécifique) pour accéder au dispositif.
                Pour cette responsable RH, l’écoute des salariés et des
                représentants du personnel est la clé de Transitions collectives
                réussies.{" "}
                <a
                  target="_blank"
                  href="https://www.dailymotion.com/video/x85ew9y"
                  rel="noreferrer"
                >
                  Écouter son témoignage complet
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
