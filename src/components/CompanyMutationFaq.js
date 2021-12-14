import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

const CompanyMutationFaq = () => {
  return (
    <div className="fr-container fr-py-4w faq">
      <h2>FAQ</h2>
      <Accordion>
        <AccordionItem title="Comment avoir accès au dispositif Transitions collectives ?">
          <article>
            <p>
              Pour permettre à vos salariés de se reconvertir en bénéficiant
              d’un parcours de Transitions collectives, votre entreprise doit
              signer un accord GEPP incluant la liste des métiers fragilisés en
              son sein. Les salariés dont les métiers sont mentionnés dans cette
              liste seront éligibles à un parcours de Transitions collectives.
              Cet accord, à déposer en ligne, permet à votre direction des
              ressources humaines d’avoir une vision de l’évolution des métiers
              de l’entreprise
            </p>
            <p>
              À noter : si votre entreprise comprend moins de 300 salariés, la
              liste des métiers fragilisés peut être formalisée par une simple
              décision unilatérale, après consultation de votre CSE si votre
              entreprise en dispose.
            </p>
            <p>
              Vous pouvez également inscrire vos salariés dans un parcours de
              Transitions collectives dans le cadre des congés de mobilité. Deux
              possibilités s’offrent à vous dans ce cadre :
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
                  établissant la liste des métiers fragilisés
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
              Dans son rôle de conseil, l’OPCO peut vous accompagner à
              identifier les compétences dont vous avez besoin.
            </p>
            <p>
              Les entreprises de moins de 250 salariés peuvent aussi bénéficier
              de{" "}
              <a
                target="_blank"
                href="https://travail-emploi.gouv.fr/emploi-et-insertion/tpe-pme/gerer-mes-ressources-humaines/prestation-conseils-rh"
                rel="noreferrer"
              >
                la prestation conseil en ressources humaines (PCRH)
              </a>
              . Cette prestation est également accessible aux collectifs
              d’entreprises appartenant à la catégorie des très petites ou
              moyennes entreprises (TPE-PME). Elle permet à l’entreprise, ou à
              un collectif d’entreprises, de bénéficier d’un accompagnement en
              ressources humaines réalisé par un prestataire et cofinancé par
              l’État.
            </p>
            <p>
              Enfin, vous pouvez également solliciter la DREETS de votre
              territoire pour bénéficier d’un appui technique à l’établissement
              de cette liste.
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
                  L’identification des métiers fragilisés. Pour en savoir plus,
                  rendez-vous dans les questions « comment avoir accès au
                  dispositif Transitions collectives » et « comment identifier
                  les métiers fragilisés dans mon entreprise ».
                </li>
                <li>
                  Le dépôt de l’accord sur 
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.teleaccords.travail
                  mploi.gouv.fr/PortailTeleprocedures/"
                  >
                    https://www.teleaccords.travail
                    mploi.gouv.fr/PortailTeleprocedures/
                  </a>
                  . Un récépissé vous sera transmis.
                </li>
                <li>
                  Une fois l’accord signé ou la décision unilatérale prise, vous
                  devez en informer individuellement les salariés dont le métier
                  est identifié comme fragilisé. Une information collective doit
                  ensuite être organisée avec les salariés concernés. Elle est
                  réalisée par un conseiller en évolution professionnelle (CEP)
                  lors d’une réunion organisée dans votre entreprise. Peut
                  également y participer l’association Transitions Pro de votre
                  territoire.
                </li>
                <li>
                  Le dépôt d’un dossier de Transitions collectives auprès de l’
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travail-emploi.gouv.fr/formation-professionnelle/acteurs-cadre-et-qualite-de-la-formation-professionnelle/cpir#liste"
                  >
                    association Transitions Pro compétente de votre région
                  </a>
                  , qui inclue l’accord ou la décision signée.
                </li>
                <li>
                  Si la demande de prise en charge du parcours de Transitions
                  collectives du salarié est validée par l’association
                  transitions Pro, son contrat de travail est suspendu au moment
                  où débute son parcours de formation.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Le dispositif propose-t-il un parcours de reconversion serein et sécurisé à mes salariés ?">
          <article>
            <p>
              Tout à fait, son parcours est sécurisé du début à la fin de son
              parcours de formation, et son maintien dans l’emploi est assuré.
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
              également pris en charge. Sous certaines conditions, il peut enfin
              bénéficier d’une prise en charge de certains frais annexes
              (hébergement, transport, restauration).
            </p>
            <p>
              S’agissant de l’accompagnement dont le salarié bénéficie, un
              conseiller en évolution professionnelle est à ses côtés pendant
              tout son parcours de Transitions collectives pour l’aider à
              définir son projet, instruire son dossier de demande à
              l’association transitions Pro et identifier des offres d’emploi.
              Il est également important qu’il maintienne des liens avec son
              entreprises d’origine, par exemple par le biais des délégués du
              personnel.
            </p>
            <p>
              Enfin, à l’issue de son parcours de formation, la suspension du
              contrat de travail du salarié prend fin, et le salarié réintègre
              son poste de travail ou un poste équivalent s’il ne trouve pas
              immédiatement d’entreprise recruteuse dans le métier pour lequel
              il a été formé.
            </p>
            <p>
              S’il choisit de quitter son entreprise, le salarié pourra
              bénéficier des offres de services de Pôle emploi, de plateformes
              de transitions professionnelles ou encore de tout autre acteur
              mobilisé au niveau des territoires pour repérer des emplois
              disponibles.
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Quelle aide puis-je obtenir de l’État ?">
          <article>
            <p>
              Les associations Transitions Pro (AT Pro), qui instruisent les
              demandes de parcours de Transitions collectives, prennent en
              charge la rémunération de vos salariés (y compris les charges
              sociales légales et conventionnelles) et le coût pédagogique des
              formations pour une durée maximale de 24 mois.
            </p>
            <p>
              Le niveau de prise en charge par les AT Pro des coûts pédagogiques
              et de la rémunération dépend de la taille de votre entreprise :
              <ul>
                <li>
                  100 % de l’ensemble des coûts liés à la formation et à la
                  rémunération pour les entreprises de moins de 300 salariés,
                </li>
                <li>70 % pour les entreprises de 300 à 1 000 salariés,</li>
                <li>40 % pour les entreprises de plus de 1 000 salariés.</li>
              </ul>
            </p>
            <p>
              Par ailleurs, les OPCO peuvent dans certaines conditions
              participer au cofinancement de parcours de Transitions
              collectives, ainsi qu’une entreprise qui prévoit d’embaucher votre
              salarié à l’issue du parcours de formation.
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
                  Être accompagné en matière de dialogue social, via l’offre de
                  services des OPCO ou celle des Associations régionales pour
                  l’amélioration des conditions de travail (ARACT).
                </li>
                <li>
                  Solliciter la DREETS de votre territoire pour bénéficier d’un
                  appui technique à l’établissement de cette liste.
                </li>
              </ul>
            </p>
            <p>
              A noter : les entreprises de moins de 250 salariés peuvent par
              ailleurs bénéficier de la prestation conseil en ressources
              humaines (PCRH).
            </p>
            <p>
              Pour la réalisation des dossiers de demande de vos salariés :
              <ul>
                <li>
                  Les conseillers en évolution professionnelle accompagnent
                  chacun de vos salariés.{" "}
                </li>
                <li>
                  Votre association Transitions Pro pour faciliter
                  l’organisation des parcours de vos salariés et obtenir des
                  informations techniques sur l’instruction des demandes de
                  prise en charge.
                </li>
              </ul>
            </p>
            <p>
              Pour vous renseigner sur les métiers d’avenir identifiés au sein
              de votre région :
              <ul>
                <li>
                  Les listes de ces métiers du CREFOP de votre région,
                  disponibles sur{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                  >
                    le site du ministère du Travail, de l’Emploi et de
                    l’Insertion
                  </a>{" "}
                </li>
              </ul>
            </p>
            <p>
              Pour identifier les entreprises de débouchés potentiels pour vos
              salariés en reconversion :
              <ul>
                <li>
                  Des plateformes territoriales sont en cours de développement
                  dans chaque département. Un objectif : mettre en lien les
                  entreprises qui recrutent et les entreprises ayant des emplois
                  fragilisés. Les DREETS peuvent vous renseigner sur l’existence
                  d’une plateforme dans votre bassin d’emploi et vous orientera.
                </li>
                <li>
                  L’OPCO dont vous dépendez identifie également les entreprises
                  et salariés susceptibles de bénéficier d’une démarche
                  s’inscrivant dans Transitions collectives. L’OPCO a notamment
                  pour mission d’accompagner les entreprises recruteuses dans
                  l’identification des compétences dont vous avez besoin. Il
                  pourra à ce titre vous orienter.
                </li>
                <li>
                  Pôle Emploi peut également contribuer à mettre en relation les
                  entreprises qui souhaitent recruter et les entreprises qui ont
                  identifié des métiers fragilisés.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Qui dois-je contacter pour toute information complémentaire ?">
          <article>
            <p>
              Vous pouvez vous tourner vers plusieurs acteurs pour vous informer
              sur le dispositif et sa mise en œuvre :
              <ul>
                <li>
                  <strong>
                    Les représentants des branches professionnelles
                  </strong>{" "}
                  peuvent vous relayer les informations qui leur sont transmises
                  par les DREETS, en charge de l’animation du dispositif et de
                  la coordination entre acteurs.
                </li>
                <li>
                  <strong>L’OPCO dont vous dépendez</strong> communique
                  également auprès de ses entreprises sur le dispositif.
                </li>
                <li>
                  <strong>Les associations Transitions Pro</strong> contribuent
                  à la diffusion de la communication relative aux parcours de
                  transitions collectives.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default CompanyMutationFaq
