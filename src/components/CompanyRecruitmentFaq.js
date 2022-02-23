import { Accordion, AccordionItem, Link } from "@dataesr/react-dsfr"
import React from "react"

const CompanyRecruitmentFaq = () => {
  return (
    <div className="fr-container fr-py-4w faq">
      <h2 className="fr-h3">{`Je me pose des questions`}</h2>
      <Accordion>
        <AccordionItem title="Mon entreprise est-elle éligible au dispositif Transitions collectives ?">
          <article>
            <p>
              Toute entreprise souhaitant recruter dans un métier identifié
              comme porteur peut faire appel à un salarié qui a suivi un
              parcours de reconversion professionnelle dans le cadre de
              Transitions collectives.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Qu’est-ce qu’un métier porteur ?">
          <article>
            <p>
              Il s’agit de métiers émergents issus de nouveaux domaines
              d’activité ou de métiers en tension dans des secteurs qui peinent
              à recruter. Les listes de ces métiers d’avenir identifiés au sein
              de votre région sont disponibles sur le{" "}
              <a
                target="_blank"
                href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                rel="noreferrer"
              >
                site du ministère du Travail, de l’Emploi et de l’Insertion
              </a>
              .
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Comment identifier les salariés bénéficiant d’un parcours de Transitions collectives dans ma région ?">
          <article>
            <p>
              Des acteurs identifient et mettent en relation les entreprises qui
              recrutent - comme la vôtre - et celles avec des métiers fragilisés
              en leur sein. Vous pouvez être accompagné par :
              <ul>
                <li>
                  Votre OPCO. Il vous guide aussi dans l’identification des
                  compétences dont vous avez besoin.
                </li>
                <li>
                  Les conseillers en évolution professionnelles. Ils
                  accompagnent les salariés bénéficiant d’un parcours de
                  Transitions collectives pour l’ensemble de leurs démarches, y
                  compris leur recherche d’emploi. Si vous avez montré votre
                  intérêt pour Transitions collectives auprès des acteurs
                  animant le dispositif (DREETS, AT Pro, plateforme, etc), les
                  conseillers en évolution professionnelle pourront vous
                  contacter.{" "}
                </li>
                <li>Pôle Emploi</li>
              </ul>
              À noter: des plateformes territoriales sont en cours de
              développement dans chaque département. Un objectif : mettre en
              lien les entreprises qui recrutent et les entreprises ayant des
              emplois fragilisés. Les DREETS peuvent vous renseigner sur
              l’existence d’une plateforme dans votre bassin d’emploi.
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Comment m’informer sur Transitions Collectives ?">
          <article>
            <p>
              {`Le délégué à l'accompagnement des reconversions professionnelles
              (DARP) de votre département est votre contact privilégié.
              Retrouvez son contact sur la page `}
              <Link href="/interlocuteurs-pour-les-entreprises">
                « Mes interlocuteurs de proximité »
              </Link>
              .
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default CompanyRecruitmentFaq
