import { Accordion, AccordionItem, Link } from "@dataesr/react-dsfr"
import React from "react"

const CompanyMutationFaq = () => {
  return (
    <div className="fr-container fr-py-4w faq">
      <h2 className="fr-h3">{`Je me pose des questions`}</h2>
      <Accordion>
        <AccordionItem title="Comment avoir accès au dispositif Transitions collectives ?">
          <article>
            <p>
              Pour permettre à vos salariés de se reconvertir en bénéficiant
              d’un parcours de Transitions collectives, votre entreprise doit
              signer un accord de gestion des emplois et des parcours
              professionnels (GEPP) incluant la liste des métiers fragilisés.
              Les salariés dont les métiers sont mentionnés dans cette liste
              seront éligibles à un parcours de Transitions collectives. Cet
              accord est à déposer{" "}
              <a
                target="_blank"
                href="https://www.teleaccords.travail-emploi.gouv.fr/PortailTeleprocedures/"
                rel="noreferrer"
              >
                en ligne
              </a>
              .
            </p>
            <p>
              Si votre entreprise comprend moins de 300 salariés, la liste des
              métiers fragilisés peut être formalisée par une simple décision
              unilatérale, après consultation de votre CSE (si votre entreprise
              en dispose).
            </p>
            <p>
              Dans le cadre d’un congé de mobilité, deux possibilités s’offrent
              à vous :
              <ul>
                <li>
                  Vous pouvez adopter un accord GEPP prévoyant la mise en œuvre
                  du congé de mobilité et établissant la liste des métiers
                  fragilisés qui donneront accès à Transitions collectives pour
                  les salariés concernés ;
                </li>
                <li>
                  Vous pouvez adopter un accord de rupture conventionnelle
                  collective prévoyant la mise en œuvre du congé de mobilité et
                  établissant la liste des métiers fragilisés.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Comment identifier les métiers fragilisés dans mon entreprise ?">
          <article>
            <p>
              Pour identifier les emplois fragilisés dans votre entreprise, vous
              pouvez solliciter la prestation gratuite « Diagnostic RH » auprès
              de{" "}
              <a
                target="_blank"
                href="https://www.transopco.info/"
                rel="noreferrer"
              >
                votre opérateur de compétences (OPCO)
              </a>
              . Vous pouvez également être accompagné en matière de dialogue
              social, via l’offre de services des OPCO ou celle des Associations
              régionales pour l’amélioration des conditions de travail (ARACT).
            </p>
            <p>
              Les entreprises de moins de 250 salariés peuvent aussi bénéficier
              de la{" "}
              <a
                target="_blank"
                href="https://travail-emploi.gouv.fr/emploi-et-insertion/tpe-pme/gerer-mes-ressources-humaines/prestation-conseils-rh"
                rel="noreferrer"
              >
                la prestation conseil en ressources humaines (PCRH)
              </a>
              . Elle vous permet à l’entreprise de bénéficier d’un
              accompagnement en ressources humaines réalisé par un prestataire
              et cofinancé par l’État.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Quel accompagnement pour mes salariés ?">
          <article>
            <p>
              Des conseillers en évolution professionnelle (CEP) sont mobilisés
              pour accompagner gratuitement vos salariés dans la construction de
              leur parcours de reconversion. Ils peuvent contacter ces
              conseillers via les sites{" "}
              <a href="https://mon-cep.org/" rel="noreferrer">
                mon-cep.org
              </a>{" "}
              ou{" "}
              <a target="_blank" href="https://www.apec.fr/" rel="noreferrer">
                apec.fr
              </a>{" "}
              pour les cadres.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Quelles sont les étapes pour mettre en place Transitions collectives dans mon entreprise ?">
          <article>
            <p>
              La mise en place de Transitions collectives est organisée en 3
              étapes :
              <ul>
                <li>
                  Signer un accord collectif de gestion des emplois et des
                  compétences, un accord prévoyant une rupture conventionnelle
                  collective dans le cadre d’un congé de mobilité ou une
                  décision unilatérale (pour les entreprises de moins de 300
                  salariés) qui établisse la liste des métiers fragilisés de
                  l’entreprise.
                  <br />
                  Pour en savoir plus, rendez-vous dans les questions « comment
                  avoir accès au dispositif Transitions collectives » et
                  « comment identifier les métiers fragilisés dans mon
                  entreprise.
                </li>
                <li>
                  Informer les salariés dont le métier est identifié comme
                  fragilisé : une information collective peut être organisée
                  avec les salariés concernés. Elle est réalisée par un
                  conseiller en évolution professionnelle (CEP) lors d’une
                  réunion organisée dans votre entreprise.
                </li>
                <li>
                  Déposer un dossier de demande de prise en charge d’un parcours
                  de Transitions collectives auprès de l’
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travail-emploi.gouv.fr/formation-professionnelle/acteurs-cadre-et-qualite-de-la-formation-professionnelle/cpir#liste"
                  >
                    association Transitions Pro compétente de votre région
                  </a>
                  , qui inclue l’accord signé
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Le dispositif propose-t-il un parcours de reconversion serein et sécurisé à mes salariés ?">
          <article>
            <p>
              Tout à fait, son parcours est sécurisé du début à la fin, et son
              maintien dans l’emploi est assuré pendant toute sa formation.
            </p>
            <p>
              Pendant l’ensemble de son parcours de Transitions collectives, le
              salarié bénéficie du maintien de sa rémunération sous certaines
              conditions :
              <ul>
                <li>
                  Si sa rémunération est égale ou inférieure à deux SMIC,
                  l’ensemble de sa rémunération est maintenu ;
                </li>
                <li>
                  Si sa rémunération est supérieure à deux SMIC, Il perçoit 90 %
                  de sa rémunération antérieure la première. Si son projet dure
                  plus d’un an (ou plus de 1200 heures), il perçoit 60 % de sa
                  rémunération antérieure à partir de la deuxième année. Sa
                  rémunération ne peut toutefois être inférieure à deux SMIC.
                </li>
              </ul>
            </p>
            <p>
              Outre sa rémunération, les coûts pédagogiques de sa formation sont
              pris en charge. Sous certaines conditions, il peut enfin
              bénéficier d’une prise en charge de certains frais annexes
              (hébergement, transport, restauration).
            </p>
            <p>
              S’agissant de l’accompagnement dont le salarié bénéficie, un
              conseiller en évolution professionnelle peut être à ses côtés
              pendant tout son parcours de Transitions collectives pour l’aider
              à définir son projet, instruire son dossier de demande à
              l’association transitions Pro et identifier des offres d’emploi.
              Il est également important qu’il maintienne des liens avec son
              entreprises d’origine, par exemple par le biais du comité social
              et économique (CSE).
            </p>
            <p>
              À l’issue de son parcours de formation, la suspension du contrat
              de travail du salarié prend fin, et le salarié peut choisir de
              réintégrer son poste de travail ou un poste équivalent s’il ne
              trouve pas immédiatement d’entreprise recruteuse dans le métier
              pour lequel il a été formé.
            </p>

            <p>
              Si le salarié choisit de quitter son entreprise ou s’il est dans
              le cadre d’un congé de mobilité, il peut bénéficier des offres de
              services de son conseiller en évolution professionnelle (CEP), de
              Pôle emploi, de plateformes de transitions collectives ou encore
              de tout autre acteur mobilisé au niveau des territoires pour
              repérer des emplois disponibles.
            </p>
            <p>
              À noter : dans le cadre d’un congé de mobilité, le contrat du
              salarié est rompu à la fin de sa formation.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Quelle aide puis-je obtenir de l’État ?">
          <article>
            <p>
              L’État prend en charge la rémunération de vos salariés (y compris
              les charges sociales légales et conventionnelles) et le coût
              pédagogique des formations certifiantes d’une durée maximale de 24
              mois. La prise en charge des salaires à 100 % est limitée à un
              plafond de 2 fois le Smic, 90 % au-delà de ce plafond.
            </p>

            <p>
              La prise en charge de l’État dépend de la taille de votre
              entreprise. Financement à :
              <ul>
                <li>100 % pour les entreprises de moins de 300 salariés,</li>
                <li>75 % pour les entreprises de 300 à 1 000 salariés,</li>
                <li>40 % pour les entreprises de plus de 1 000 salariés.</li>
              </ul>
            </p>

            <p>
              Par ailleurs, les OPCO ou une entreprise qui prévoit d’embaucher
              votre salarié à l’issue du parcours de formation, peuvent dans
              certaines conditions participer au cofinancement de parcours de
              Transitions collectives.
            </p>

            <p>
              À noter : dans le cadre du congé de mobilité, votre entreprise
              doit prendre en charge au moins 65 % de la rémunération brute du
              salarié. L’État prendra en charge le montant restant pour assurer
              le maintien de la rémunération nette du salarié. L’État prendra
              également en charge les coûts pédagogiques de la formation dans
              les taux précités.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Quels acteurs m’accompagnent dans la démarche ?">
          <article>
            <p>
              Pour l’identification des métiers fragilisés au sein de votre
              entreprise, vous pouvez :
              <ul>
                <li>
                  Solliciter la prestation gratuite « Diagnostic RH » auprès de{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.transopco.info/"
                  >
                    votre opérateur de compétences (OPCO).
                  </a>
                </li>
                <li>
                  Solliciter votre opérateur de compétences (OPCO) pour vous
                  aider à établir la liste des métiers fragilisés au sein de
                  votre entreprise.
                </li>
                <li>
                  Être accompagné en matière de dialogue social, via l’offre de
                  services des OPCO ou celle des Associations régionales pour
                  l’amélioration des conditions de travail (ARACT).{" "}
                </li>
              </ul>
            </p>
            <p>
              À noter : les entreprises de moins de 250 salariés peuvent par
              ailleurs bénéficier de la{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://travail-emploi.gouv.fr/emploi-et-insertion/tpe-pme/gerer-mes-ressources-humaines/prestation-conseils-rh"
              >
                prestation conseil en ressources humaines (PCRH).
              </a>
            </p>
            <p>
              Pour la réalisation des dossiers de demande de vos salariés. Deux
              interlocuteurs privilégiés :
              <ul>
                <li>
                  Les conseillers en évolution professionnelle accompagnent
                  chacun de vos salariés.
                </li>
                <li>Votre association Transitions Pro</li>
              </ul>
            </p>
            <p>
              Pour vous renseigner sur les métiers d’avenir identifiés au sein
              de votre région :
              <ul>
                <li>
                  {" "}
                  Les listes de ces métiers est disponible sur le{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                  >
                    site du ministère du Travail, de l’Emploi et de l’Insertion
                  </a>
                </li>
              </ul>
            </p>
            <p>
              Pour identifier les entreprises de débouchés potentiels pour vos
              salariés en reconversion :
              <ul>
                <li>
                  Le{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travail-emploi.gouv.fr/actualites/l-actualite-du-ministere/article/les-delegues-a-l-accompagnement-des-reconversions-professionnelles-darp"
                  >
                    {`Délégué à l'accompagnement des reconversions
                    professionnelles (DARP)`}
                  </a>
                  de votre département pourra vous orienter vers les entreprises
                  ayant des besoins en recrutement.
                </li>
                <li>
                  Des plateformes territoriales sont développement dans chaque
                  département. Un objectif : mettre en lien les entreprises qui
                  recrutent et les entreprises ayant des emplois fragilisés.
                </li>
                <li>
                  L’OPCO dont vous dépendez identifie également les entreprises
                  et salariés susceptibles de bénéficier d’une démarche
                  s’inscrivant dans Transitions collectives. L’OPCO a notamment
                  pour mission d’accompagner les entreprises recruteuses dans
                  l’identification des compétences dont elles ont besoin.{" "}
                </li>
                <li>
                  Pôle Emploi peut également contribuer à identifier les métiers
                  et les compétences attendues par les entreprises qui
                  recrutent. Il peut mettre à la disposition de vos salariés
                  l’ensemble des services digitaux qu’il propose pour
                  accompagner la construction des projets professionnels.
                </li>
              </ul>
            </p>

            <p>
              Retrouvez les contacts directs de vos correspondants sur la page
              <Link href="/interlocuteurs-pour-les-entreprises">
                « Mes interlocuteurs de proximité »
              </Link>
              .
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Qui dois-je contacter pour toute information complémentaire ?">
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

export default CompanyMutationFaq
