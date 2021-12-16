import { MediaVideo } from "@dataesr/react-dsfr"
import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <div className="news">
        <Head>
          <title>Retour sur le premier projet de Transitions collectives</title>
        </Head>

        <div className="fr-container">
          <header>
            <h1 className="fr-h3 fr-pt-4w">
              Retour sur le premier projet de Transitions collectives
            </h1>
            <p>
              <strong>
                Lancé le 1er février 2021 par Elisabeth Borne, ministre du
                Travail, de l’Emploi et de l’Insertion et co-construit avec les
                partenaires sociaux, le dispositif Transitions collectives vise
                à accompagner les entreprises et les salariés qui font face à
                des mutations économiques dans leur secteur. En avril dernier le
                premier projet de Transitions Collectives a été signé entre le
                groupe Korian et le groupe Derichebourg multiservices.
              </strong>
            </p>
          </header>
          <section>
            <article>
              <p>
                Les groupes Korian et Derichebourg sont en effet les premiers à
                se saisir de ce dispositif innovant. Ainsi, des salariées
                volontaires du groupe de services Derichebourg suivent{" "}
                <strong>une formation rémunérée</strong> pour se reconvertir
                vers les métiers de la prise en charge de la dépendance, à
                l’issue de laquelle elles pourront être{" "}
                <strong>recrutées en CDI</strong> chez Korian après{" "}
                <strong>
                  obtention de leur diplôme d’État d’aide-soignante.
                </strong>
              </p>
              <p>
                Retour en vidéo sur le lancement de cet accord, en présence
                d’Élisabeth Borne, ministre du Travail, de l’Emploi et de
                l’Insertion, de Sophie Boissard, Directrice générale du groupe
                Korian, et de Boris Derichebourg, Président de Derichebourg
                multiservices :
              </p>
              <div className="fr-grid-row fr-grid-row--center fr-pb-4w">
                <div className="fr-col-lg-8 fr-col-12">
                  <MediaVideo>
                    <iframe
                      title="Lancement officiel du dispositif « Transitions Collectives »"
                      className="fr-responsive-vid__player"
                      src="https://www.dailymotion.com/embed/video/x80pxgy?loop=1"
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
                <em>
                  «Je me réjouis de voir le dispositif «Transitions Collectives»
                  devenir réalité. Grâce au projet des groupes Derichebourg et
                  Korian, des dizaines de salariées vont pouvoir s’engager dans
                  une reconversion vers un secteur où les besoins de recrutement
                  ne manquent pas, sans avoir à connaître le choc du
                  licenciement. Cela confirme que le dispositif de «Transitions
                  Collectives» est une innovation sociale majeure au service des
                  salariés, des entreprises et des territoires. J’invite toutes
                  les entreprises qui connaissent une baisse d’activité à s’en
                  saisir».{" "}
                  <strong>
                    Élisabeth Borne, ministre du Travail, de l’Emploi et de
                    l’Insertion.
                  </strong>
                </em>
              </p>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Page
