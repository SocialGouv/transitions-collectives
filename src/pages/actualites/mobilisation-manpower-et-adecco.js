import Head from "next/head"
import React from "react"

import Layout from "@/components/Layout"
import NewsCard from "@/components/NewsCard"
import NewsContent from "@/components/NewsContent"
import NewsFooter from "@/components/NewsFooter"
import NewsHeader from "@/components/NewsHeader"
import NewsParagraph from "@/components/NewsParagraph"
import NewsParagraphContent from "@/components/NewsParagraphContent"
import NewsPhoto from "@/components/NewsPhoto"

import photo from "../../../public/images/news/mobilisation-manpower-et-adecco.jpg"

const Page = () => {
  return (
    <Layout>
      <div className="news">
        <Head>
          <title>
            Mobilisation de ManpowerGroup France et Adecco , leaders de
            l’intérim
          </title>
        </Head>

        <div className="fr-container">
          <NewsHeader title="Mobilisation de ManpowerGroup France et Adecco , leaders de" />
          <NewsPhoto
            photo={photo}
            source="Ministères sociaux/ DICOM / Tristan Reynaud / Sipa Press"
          />

          <NewsContent>
            <NewsParagraph
              title="Manpower s’engage à embaucher jusqu’à 2500 salariés en CDI
                Intérimaire"
            >
              <NewsParagraphContent>
                En déplacement chez Manpower le 23 septembre 2021, Élisabeth
                Borne, ministre du Travail, de l’Emploi et de l’Insertion, a
                signé une convention de partenariat avec le groupe Manpower dans
                le cadre du dispositif Transitions collectives. Par cette
                convention, l’entreprise s’engage à:
              </NewsParagraphContent>
              <NewsParagraphContent list>
                <li>
                  <strong>Mobiliser ses filiales</strong> pour encourager les
                  entreprises ayant des emplois menacés à moyen terme, à
                  proposer à leurs salariés d’adhérer au dispositif Transitions
                  collectives;
                </li>
                <li>
                  <strong>
                    Embaucher à l’échelle du territoire national jusqu’à 2 500
                    salariés,
                  </strong>{" "}
                  , au terme de leur formation, en contrat à durée indéterminée
                  pour être mis à disposition au sein de ses entreprises
                  clientes.
                </li>
              </NewsParagraphContent>
              <NewsParagraphContent>
                ManpowerGroup France a déjà lancé deux projets pilotes, en
                Occitanie et en Provence-Alpes-Côte d’Azur: « Explor’aire Terre
                » et « Explor’aire Mer ».{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://travail-emploi.gouv.fr/actualites/presse/communiques-de-presse/article/transitions-collectives-manpowergroup-france-s-associe-au-ministere-du-travail"
                >
                  En savoir plus
                </a>
              </NewsParagraphContent>
              <NewsParagraphContent>
                <em>
                  <strong>Pour Elisabeth Borne</strong>: « Avec Transitions
                  collectives, nous voulons donner de nouvelles perspectives aux
                  salariés dont l’emploi est fragilisé en leur permettant de
                  s’engager dans une reconversion professionnelle à proximité de
                  chez eux, en évitant un licenciement. Le partenariat signé
                  avec ManpowerGroup France va permettre d’accélérer le
                  développement de ce nouvel outil qui est amené à jouer un rôle
                  essentiel auprès des entreprises qui connaissent des mutations
                  durables ».
                </em>
              </NewsParagraphContent>
            </NewsParagraph>

            <NewsParagraph
              title="Adecco s’engage à amplifier l’accompagnement des demandeurs
                  d’emploi de longue durée"
            >
              <NewsParagraphContent>
                Le 14 décembre 2021, Elisabeth Borne, ministre du Travail, de
                l’Emploi et de l’Insertion, et Alexandre Viros, président France
                du groupe Adecco ont signé une convention de partenariat
                comprenant trois axes :
              </NewsParagraphContent>
              <NewsParagraphContent list>
                <li>
                  <strong>
                    Un renforcement de l’insertion par l’activité économique
                    (IAE) pour le retour à l’emploi des publics vulnérables.{" "}
                  </strong>
                  Le groupe Adecco s’engage à doubler dès 2022, le nombre
                  d’implantations de ses entreprises de travail temporaire
                  d’insertion (ETTI) en passant de 75 à 150 structures, ainsi
                  que le nombre de ses bénéficiaires à partir de 2023, en
                  ciblant un total de 15 000 personnes accompagnées chaque
                  année.
                </li>
                <li>
                  <strong>
                    Une extension de l’aide à l’embauche en contrat de
                    professionnalisation.
                  </strong>{" "}
                  Adecco s’engage à recruter et former 1 000 demandeurs d’emploi
                  de longue durée supplémentaires en contrat d’alternance en
                  2022, en ayant recours aux contrats d’insertion professionnel
                  intérimaire (CIPI) et aux contrats de développement
                  professionnel intérimaire (CDPI). L’État a rendu ces deux
                  types de contrats éligibles à l’aide à l’embauche de 8 000
                  euros annoncée fin septembre dans le cadre du plan de
                  réduction des tensions de recrutement qui comporte un volet
                  spécifique pour les demandeurs d’emploi de longue durée.
                </li>
                <li>
                  <strong>
                    Une contribution active au déploiement du dispositif
                    Transitions collectives.
                  </strong>
                </li>
              </NewsParagraphContent>
              <NewsParagraphContent>
                <em>
                  <strong>Pour Elisabeth Borne :</strong> « Depuis le début du
                  quinquennat, nous agissons pour permettre aux personnes
                  éloignées de l’emploi et aux salariés dont l’emploi est menacé
                  de rebondir rapidement. Les groupes d’intérim comme Adecco,
                  qui jouent un rôle essentiel dans l’insertion professionnelle,
                  doivent avoir toute leur place dans les dispositifs que l’Etat
                  a mis en place. La convention que nous signons aujourd’hui
                  avec Adecco est un grand pas en ce sens et permettra notamment
                  la réinsertion rapide vers l’emploi des plus vulnérables. »
                </em>
              </NewsParagraphContent>
              <NewsParagraphContent>
                <em>
                  <strong>Pour Alexandre Viros :</strong> « Tous les acteurs,
                  publics comme privés, doivent se mobiliser au service de
                  l’accès à l’emploi des plus vulnérables. Le groupe Adecco,
                  notamment à travers ses réseaux Adecco & Adecco Inclusion, est
                  pleinement engagé dans l’accompagnement des demandeurs
                  d’emploi, en particulier des demandeurs d’emploi longue durée.
                  La signature de cette convention illustre la reconnaissance du
                  rôle clé des entreprises de travail temporaire au sein du
                  service public de l’emploi. »
                </em>
              </NewsParagraphContent>
            </NewsParagraph>

            <NewsFooter>
              <NewsCard>
                Lire les articles complets sur le site du ministère du Travail,
                de l’Emploi et de l’Insertion :
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://travail-emploi.gouv.fr/actualites/presse/communiques-de-presse/article/signature-d-une-convention-de-partenariat-avec-le-groupe-adecco-pour-favoriser"
                    >
                      Signature d’une convention de partenariat avec le groupe
                      Adecco pour favoriser l’accès à l’emploi des demandeurs
                      d’emploi de longue durée et les reconversions des salariés
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://travail-emploi.gouv.fr/actualites/presse/communiques-de-presse/article/transitions-collectives-manpowergroup-france-s-associe-au-ministere-du-travail"
                    >
                      ManpowerGroup France s’associe au ministère du Travail, de
                      l’Emploi et de l’Insertion et s’engage à recruter jusqu’à
                      2 500 CDI Intérimaires sur un an
                    </a>
                  </li>
                </ul>
              </NewsCard>
            </NewsFooter>
          </NewsContent>
        </div>
      </div>
    </Layout>
  )
}

export default Page
