import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

const EmployeeFaqAvantFormation = () => {
  return (
    <div>
      <h3 className="fr-h4">Avant la formation</h3>
      <Accordion>
        <AccordionItem title="Ai-je le droit d’entrer dans ce parcours de formation ?">
          <article>
            <p>
              Pour recourir à Transitions collectives, vous devez :
              <ul>
                <li>
                  Occuper un poste identifié comme fragilisé dans l’entreprise
                  (voir plus d’informations dans la question « comment savoir si
                  mon métier fait partie de la liste des métiers dits fragilisés
                  dans mon entreprise ? »)
                </li>
                <li>
                  Être en CDI, CDD ou en contrat de travail temporaire (dit
                  aussi contrat d’intérim). ☄ À noter : seul un contrat en CDI
                  est accepté dans le cadre d’un congé de mobilité.
                </li>
                <li>
                  Respecter certaines conditions d’ancienneté : pour les CDI, 24
                  mois en tant que salarié, dont 12 mois au sein de votre
                  entreprise. ☄ À noter : cette condition ne s’applique pas dans
                  le cadre du congé de mobilité.
                </li>
              </ul>
            </p>
            <p>
              Pour accéder au dispositif, il faudra aussi :
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
        <AccordionItem title="Quelles conditions mon parcours de formation doit-il remplir ?">
          <article>
            <p>
              Pour bénéficier de la prise en charge de votre parcours de
              formation, ce dernier devra :
              <ul>
                <li>
                  Aboutir à une certification professionnelle reconnues par
                  l’État ou à une valorisation de l’acquis et de l’expérience
                  (VAE) ;
                </li>
                <li>Concerner un métier porteur de votre région ;</li>
                <li>
                  Être réalisé sur une durée maximale de deux ans ou 2400
                  heures ; ☄ À noter : dans le cadre d’un congé de mobilité, la
                  durée de votre parcours de formation ne peut excéder celle du
                  congé de mobilité.
                </li>
                <li>
                  Être mis en œuvre par un organisme de formation certifié
                  Qualiopi.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Comment savoir si mon métier fait partie de la liste des métiers dits fragilisés dans mon entreprise ?">
          <article>
            <p>
              Une réunion d’information organisée par votre employeur peut vous
              être proposée si votre emploi est considéré comme fragilisé. Vous
              pouvez aussi contacter votre service des ressources humaines (RH)
              ou un{" "}
              <a target="_blank" href="https://mon-cep.org/" rel="noreferrer">
                conseiller en évolution professionnelle (CEP)
              </a>{" "}
              pour en savoir plus.
            </p>
            <p>
              À savoir : la liste des métiers identifiés comme fragilisés dans
              votre entreprise est établie dans le cadre d’un accord collectif,
              différent selon les situations, signé entre votre employeur et les
              organisations représentatives du personnel. Les entreprises de
              moins de 300 salariés peuvent également établir cette liste par
              décision unilatérale, après consultation du comité social et
              économique (CSE) lorsqu’il existe.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Mon employeur me propose un parcours de formation avec Transitions collectives. Suis-je obligé d’accepter ? ">
          <article>
            <p>Non. Vous avez le choix d’entrer ou non dans le dispositif.</p>
          </article>
        </AccordionItem>
        <AccordionItem title="Qui peut m'aider à définir mon futur projet professionnel ? ">
          <article>
            Le{" "}
            <a href="https://mon-cep.org/" target="_BLANK" rel="noreferrer">
              conseiller en évolution professionnel (CEP)
            </a>{" "}
            vous aide à élaborer votre parcours de reconversion. Vous
            construisez ensemble un parcours de formation adapté, en fonction de
            vos souhaits et des métiers identifiés comme porteurs sur votre
            territoire. Cet accompagnement est gratuit. Pour trouver un
            conseiller proche de chez vous, rendez-vous sur{" "}
            <a href="https://mon-cep.org/" target="_BLANK" rel="noreferrer">
              mon-cep.org
            </a>
          </article>
        </AccordionItem>
        <AccordionItem title="Puis-je choisir le métier dans lequel je souhaite me reconvertir ? ">
          <article>
            <p>
              Votre parcours de formation doit concerner un métier à forte
              perspective d’emploi de votre région. Des listes de métiers qui
              recrutent (dit aussi métiers porteurs) ont été identifiés dans
              chaque région.Vous pouvez choisir le métier vers lequel vous
              souhaitez vous diriger à partir de ces listes, accessibles sur le{" "}
              <a
                href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
                target="_BLANK"
                rel="noreferrer"
              >
                site du ministère du Travail, de l’Emploi et de l’Insertion
              </a>
              .
            </p>
            <p>
              À noter : ces métiers porteurs sont issus de nouveaux domaines
              d’activité ou de métiers en tension dans des secteurs qui peinent
              à recruter.
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="Que faire si le métier qui m’intéresse n’est pas dans la liste des métiers porteurs ?">
          <article>
            <p>
              Vous pouvez toujours vous reconvertir dans un autre métier à
              travers le dispositif des{" "}
              <a
                taget="_blank"
                href="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/article/projet-de-transition-professionnelle"
              >
                projets de transition professionnelle (PTP)
              </a>{" "}
              qui vous permet de mobiliser votre compte personnel de formation
              (CPF) afin d’accomplir un projet de reconversion professionnelle .
              Vous pourrez être accompagné par le CEP pour élaborer votre
              parcours de formation. Si votre projet est retenu, votre
              rémunération sera maintenue dans les mêmes conditions que pour
              Transitions collectives.
            </p>
            <p>
              {`Votre métier n'a pas besoin de faire partie de la liste de métiers
              fragilisés au sein de votre entreprise pour vous permettre de
              faire une demande de PTP.`}
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default EmployeeFaqAvantFormation
