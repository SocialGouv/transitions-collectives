import Head from "next/head"
import React, { useEffect } from "react"

import Layout from "@/components/Layout"

const Page = () => {
  useEffect(() => {
    document.title = "Mentions légales"
  }, [])

  return (
    <Layout>
      <Head>
        <title>Sites utiles</title>
      </Head>
      <div className="fr-container fr-my-6w">
        <h1 id="mentions-legales">Mentions légales</h1>
        <div>
          <div className="fr-mt-3w">
            <h2>Éditeur de la Plateforme</h2>
            <p className="fr-mb-0">
              Le site est édité par la fabrique des Ministères sociaux située :
            </p>
            <address className="fr-my-2w">
              Tour Mirabeau
              <br />
              39-43 Quai André Citroën
              <br />
              75015 PARIS
              <br />
              Tél. : 01 40 56 60 00
            </address>
          </div>
          <div className="fr-mt-3w">
            <h2>Directeur de la publication</h2>
            <p className="fr-mb-2w">
              Bruno Lucas, Délégué général à l’Emploi et à la Formation
              Professionnelle
            </p>
          </div>
          <div className="fr-mt-3w">
            <h2>Hébergement du site</h2>
            Ce site est hébergé par : <br />
            <p className="fr-mb-2w">
              Microsoft Azure <br />
              37 Quai du Président Roosevelt <br />
              92130 Issy-les-Moulineaux
            </p>
          </div>
          <div id="accessibilite" className="fr-mt-3w">
            <h2>Accessibilité</h2>
            <p className="fr-mb-2w">
              La conformité aux normes d’accessibilité numérique est un objectif
              ultérieur mais nous tâchons de rendre ce site accessible à toutes
              et à tous.
            </p>
          </div>

          <div className="fr-mt-3w">
            <h2>Signaler un dysfonctionnement</h2>
            <p>
              Si vous rencontrez un défaut d’accessibilité vous empêchant
              d’accéder à un contenu ou une fonctionnalité du site, merci de
              nous en faire part. Si vous n’obtenez pas de réponse rapide de
              notre part, vous êtes en droit de faire parvenir vos doléances ou
              une demande de saisine au Défenseur des droits.
            </p>
            <p>
              Pour en savoir plus sur la politique d’accessibilité numérique de
              l’État :
              <a
                target="_blank"
                rel="noreferrer"
                href="http://references.modernisation.gouv.fr/accessibilite-numerique"
              >
                http://references.modernisation.gouv.fr/accessibilite-numerique
              </a>
            </p>
          </div>
          <div className="fr-mt-3w">
            <h2>Sécurité</h2>
            <p>
              Le site est protégé par un certificat électronique, matérialisé
              pour la grande majorité des navigateurs par un cadenas. Cette
              protection participe à la confidentialité des échanges. En aucun
              cas les services associés à la plateforme ne seront à l’origine
              d’envoi de courriels pour demander la saisie d’informations
              personnelles.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Page
