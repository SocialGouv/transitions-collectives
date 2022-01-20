import Head from "next/head"
import Link from "next/link"
import React from "react"

import Layout from "@/components/Layout"
import NewsCard from "@/components/NewsCard"
import NewsContent from "@/components/NewsContent"
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
            Témoignage : une formation pour devenir conducteur de véhicules
          </title>
        </Head>

        <div className="fr-container">
          <NewsHeader title="Témoignage : une formation pour devenir conducteur de véhicules">
            <NewsHeaderSummary>
              Face à des difficultés dans son activité, l’entreprise d’insertion
              Triaction a fait appel à Transitions collectives. Farid Mechhat,
              chef d’équipe dans ce centre de tri, a débuté un parcours de
              formation vers un métier porteur de sa région, celui de conducteur
              poids lourd. Il témoigne.
            </NewsHeaderSummary>
          </NewsHeader>

          <NewsContent>
            <NewsParagraph title="Une formation certifiante et sécurisée">
              <NewsParagraphContent>
                Pour Farid Mecchat, salarié en formation pour devenir chauffeur
                poids lourd, Transitions collectives est une opportunité à
                saisir.
              </NewsParagraphContent>
              <NewsParagraphContent>
                <em>
                  « C’est une très bonne occasion de se former, de garder son
                  salaire et de rester sur Pithiviers. Je peux avoir un diplôme
                  à la fin de la formation, ce que je n’ai pas eu l’occasion
                  d’avoir en France. »
                </em>
              </NewsParagraphContent>
              <NewsVideo
                title="Lancement officiel du dispositif « Transitions Collectives »"
                src="https://www.dailymotion.com/embed/video/x85ewa0?loop=1"
              />
              <NewsParagraphContent>
                Le salaire du salarié en Transitions collectives est maintenu
                pendant toute la durée de la formation (en savoir plus sur le
                maintien de salaire). L’objectif est de proposer une
                reconversion sereine et sécurisée.
              </NewsParagraphContent>
            </NewsParagraph>

            <NewsParagraph title="Une formation vers un métier d’avenir">
              <NewsParagraphContent>
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
              </NewsParagraphContent>
              <NewsParagraphContent>
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
              </NewsParagraphContent>
            </NewsParagraph>
            <NewsFooter>
              <NewsCard>
                Vous êtes salarié d’une entreprise et vous avez des questions
                sur Transitions collectives? Consultez la page de ce site dédiée{" "}
                <Link href="/salarie/avenir-professionel">aux salariés</Link> et
                celle consacrée{" "}
                <Link href="/salarie/souhait-evolution">
                  aux métiers porteurs dans votre région
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
          </NewsContent>
        </div>
      </div>
    </Layout>
  )
}

export default Page
