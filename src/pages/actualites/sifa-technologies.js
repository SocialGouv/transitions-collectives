import Head from "next/head"
import Link from "next/link"
import React from "react"

import Layout from "@/components/Layout"
import NewsCard from "@/components/NewsCard"
import NewsFooter from "@/components/NewsFooter"
import NewsHeader from "@/components/NewsHeader"
import NewsHeaderSummary from "@/components/NewsHeaderSummary"
import NewsParagraph from "@/components/NewsParagraph"
import NewsParagraphContent from "@/components/NewsParagraphContent"
import NewsVideo from "@/components/NewsVideo"

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
          <NewsHeader title="Témoignages : SIFA Technologies face à l’évolution des marchés">
            <NewsHeaderSummary>
              Face aux mutations de la filière automobile, l’entreprise SIFA
              Technologies, spécialisée dans la transformation de l’aluminium a
              fait appel au dispositif Transitions collectives. Véritable outil
              d’anticipation, Transco propose une reconversion sereine et
              sécurisée aux salariés de l’entreprise. Témoignages de Julien
              Barbrault et Stéphanie Roux, respectivement directeur et RH de
              l’entreprise SIFA Technologies.
            </NewsHeaderSummary>
          </NewsHeader>
          <section>
            <article>
              <NewsParagraph title="Une réponse aux évolutions stratégiques de l’entreprise">
                <NewsParagraphContent>
                  SIFA Technologies, entreprise familiale crée en 1936, est une
                  sous-traitante de la filière automobile spécialisée dans la
                  transformation de l’aluminium.
                </NewsParagraphContent>
                <NewsParagraphContent>
                  La société s’est spécialisée depuis quelques années dans le
                  Diesel. Face à des métiers en mutation, l’entreprise doit
                  aujourd’hui se positionner sur de nouveaux marchés : véhicules
                  électriques, industrie hors automobile…
                </NewsParagraphContent>
                <NewsParagraphContent>
                  L’entreprise a décidé de recourir au dispositif Transitions
                  collectives afin d’accompagner une partie de ses salariés
                  souhaitant se reconvertir vers d’autres métiers porteurs sur
                  le bassin d’emploi de la métropole d’Orléans et de Pithiviers.
                </NewsParagraphContent>
                <NewsParagraphContent>
                  « Le dispositif permet d’accompagner nos salariés vers des
                  métiers d’avenir. Nous savons que SIFA Technologies va entamer
                  une transition, des métiers historiques du Diesel vers
                  d’autres métiers. Nous aurons besoin de nous redimensionner et
                  de laisser partir un certain nombre de compétences vers
                  d’autres secteurs. »
                  <br />
                  <span
                    className="fr-text--lg"
                    style={{ display: "block", textAlign: "end" }}
                  >
                    Julien Barbrault, directeur de l’entreprise SIFA
                    technologies.
                  </span>
                </NewsParagraphContent>
                <NewsVideo
                  title="Présentation transco"
                  src="https://www.dailymotion.com/embed/video/x85ewa2?loop=1"
                />
              </NewsParagraph>

              <NewsParagraph title="Une réorientation stratégie de l’entreprise et des salariés">
                <NewsParagraphContent>
                  Pour Stéphanie Roux, responsable ressources humaines chez SIFA
                  Technologies, Transitions collectives représente un moyen
                  d’anticipation des projets RH de l’entreprise.
                </NewsParagraphContent>
                <NewsParagraphContent>
                  « Dans le cadre des entreprises professionnels, je me suis
                  aperçue que les salariés avaient un réel besoin de se
                  reconvertir dans un milieu autre que l’industrie comme nous le
                  pratiquons chez SIFA Technologies. Dans ce cadre, il m’a paru
                  évident de faire appel à Transo pour mettre en place les
                  projets des salariés. Il s’agit d’une réorientation
                  stratégique, à la fois de l’entreprise et des salariés. »
                  Stéphanie Roux.
                </NewsParagraphContent>
              </NewsParagraph>

              <NewsParagraph title="Une reconversion négociée et sécurisée">
                <NewsParagraphContent>
                  SIFA Technologies signe actuellement un accord GEPP avec ses
                  représentants du personnel afin d’identifier les métiers
                  porteurs mais aussi les métiers fragilisés en son sein. La
                  signature de cet accord est la première étape du parcours
                  (renvoi vers question spécifique) pour accéder au dispositif.
                  Pour cette responsable RH, l’écoute des salariés et des
                  représentants du personnel est la clé de Transitions
                  collectives réussies.
                </NewsParagraphContent>
                <NewsVideo
                  src="https://www.dailymotion.com/embed/video/x85ew9y?loop=1"
                  title={`Dispositif "TRANSCO" : témoignage de Stéphanie Roux, RRH chez SIFA Technologies`}
                />
              </NewsParagraph>

              <NewsFooter>
                <NewsCard>
                  Vous êtes responsable d’une entreprise et vous avez des
                  questions sur Transitions collectives ? Consultez - en
                  fonction de votre situation – la page dédiée{" "}
                  <Link href="/entreprise/difficultes-dans-mon-secteur">
                    aux entreprises en mutation
                  </Link>{" "}
                  ou celle dédiée{" "}
                  <Link href="/entreprise/besoins-en-recrutement">
                    aux entreprises avec des besoins de recrutement
                  </Link>
                  .
                </NewsCard>
                <p className="fr-pt-4w">
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
              </NewsFooter>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Page
