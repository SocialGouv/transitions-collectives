import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

const EmployeeFaqAvantFormation = () => {
  return (
    <div>
      <h2>Avant la formation</h2>
      <Accordion>
        <AccordionItem title="Ai-je le droit d’entrer dans ce parcours de reconversion ?">
          <article>
            <p>
              <strong>
                Pour recourir à Transitions collectives, vous devez :
              </strong>
              <ul>
                <li>
                  Occuper un poste identifié comme fragilisé dans l’entreprise
                  (voir plus d’informations dans la question « comment savoir si
                  mon métier fait partie de la liste des métiers dits fragilisés
                  dans mon entreprise ? »)
                </li>
                <li>
                  Être en CDI, en CDD ou être en contrat de travail temporaire
                  (dit aussi contrat d’intérim){" "}
                </li>
                <li>Ne pas être en phase de rupture de contrat de travail</li>
                <li>
                  Respecter les conditions d’ancienneté suivantes :
                  <ul>
                    <li>
                      Si vous êtes en CDI, avoir été salarié au moins pendant 24
                      mois, consécutifs ou non, dont 12 mois dans votre
                      entreprise actuelle ;
                    </li>
                    <li>
                      Si vous êtes en CDD, avoir été salarié 24 mois au cours
                      des cinq dernières années, dont 4 mois en CDD au cours des
                      12 derniers mois ;
                    </li>
                    <li>
                      Si vous êtes intérimaire, être titulaire d’un contrat de
                      travail justifiant d’une ancienneté de 1 600 heures
                      travaillées dans la branche, dont 600 heures dans
                      l’entreprise de travail temporaire où vous êtes
                      actuellement.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p>
              <strong>Pour accéder au dispositif, il faudra aussi :</strong>
              <ul>
                <li>
                  Obtenir l’autorisation de votre employeur d’entrer dans la
                  démarche de Transitions collectives ;
                </li>
                <li>
                  Être accompagné dans votre projet par un conseiller en
                  évolution professionnelle.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Quelles conditions mon parcours de formation doit-il remplir pour être validé et financé ?">
          <article>
            <p>
              Pour bénéficier de la prise en charge de votre projet de
              reconversion, ce dernier devra:
              <ul>
                <li>
                  Aboutir à une certification reconnue officiellement à travers
                  un diplôme ou un titre professionnel reconnu par l’État ou une
                  valorisation de l’acquis et de l’expérience (VAE),
                </li>{" "}
                <li>Concerner un métier porteur de votre région,</li>{" "}
                <li>
                  Être réalisé sur une durée maximale de deux ans ou 2400
                  heures,
                </li>
                <li>
                  Être mis en œuvre par un organisme de formation labellisé à
                  partir du 1er janvier 2022,
                </li>
                <li>
                  Ne pas correspondre aux obligations légales de votre employeur
                  quant à la formation professionnelle.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Comment savoir si mon métier fait partie de la liste des métiers dits fragilisés dans mon entreprise ?">
          <article>
            <p>
              {`Une réunion d’information organisée par votre employeur vous sera proposée si votre emploi est considéré comme fragilisé. Vous pouvez aussi contacter votre service des ressources humaines (RH) ou `}
              <a target="_blank" href="https://mon-cep.org/" rel="noreferrer">
                un conseiller en évolution professionnelle (CEP)
              </a>{" "}
              {`pour en savoir plus.`}
            </p>
            <p>
              À savoir: la liste des métiers identifiés comme fragilisés dans
              votre entreprise est établie dans le cadre d’un accord collectif
              signé entre votre employeur et les organisations représentatives
              du personnel. Les entreprises de moins de 300 salariés peuvent
              également établir cette liste, après consultation du comité social
              et économique (CSE) lorsqu’il existe.
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Mon employeur me propose un parcours de reconversion avec Transitions collectives. Suis-je obligé d’accepter ?">
          <article>
            <p>
              {`Non. Vous avez le choix d’entrer ou non dans le dispositif.`}
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Qui peut m'aider à définir mon futur projet professionnel ?">
          <article>
            <p>
              Le{" "}
              <a target="_blank" href="https://mon-cep.org/" rel="noreferrer">
                conseiller en évolution professionnel (CEP)
              </a>{" "}
              vous aide à élaborer votre parcours de reconversion. Vous
              construisez ensemble un parcours de formation adapté, en fonction
              des métiers identifiés comme porteurs sur votre territoire. Cet
              accompagnement est gratuit. Pour trouver un conseiller proche de
              chez vous, rendez-vous sur{" "}
              <a target="_blank" href="https://mon-cep.org/" rel="noreferrer">
                mon-cep.org
              </a>
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Puis-je choisir le métier dans lequel je souhaite me reconvertir ?">
          <article>
            <p>
              Des listes de métiers qui recrutent (dit aussi métiers porteurs)
              ont été identifiés dans chaque région.Vous pouvez choisir le
              métier vers lequel vous souhaitez vous diriger à partir de ces
              listes, accessibles sur{" "}
              <a
                target="_blank"
                href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                rel="noreferrer"
              >
                le site du ministère du Travail, de l’Emploi et de l’Insertion
              </a>
              .
            </p>
            <p>
              À noter : ces métiers émergents sont issus de nouveaux domaines
              d’activité ou de métiers en tension dans des secteurs qui peinent
              à recruter.
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Et si je ne veux pas me reconvertir dans un métier porteur ?">
          <article>
            <p>
              Vous pouvez toujours vous reconvertir dans un autre métier à
              travers le dispositif{" "}
              <a
                target="_blank"
                href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/article/projet-de-transition-professionnelle"
                rel="noreferrer"
              >
                projet de transition professionnelle (PTP).
              </a>
              {`Vous pourrez être accompagné par le CEP. Votre projet sera étudié
              afin de définir le financement de votre formation et le maintien
              de votre rémunération. Dans ce cas, les droits inscrits sur votre
              compte personnel de formation seront mobilisés. Votre métier n'a
              pas besoin de faire partie de la liste de métiers fragilisés au
              sein de votre entreprise pour faire une demande de PTP.`}
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default EmployeeFaqAvantFormation
