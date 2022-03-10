import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

const EmployeeFaqAvantFormation = () => {
  return (
    <div>
      <h3 className="fr-h4">Avant la formation</h3>
      <Accordion>
        <AccordionItem title="Comment puis-avoir accès aux Transitions collectives ?">
          <article>
            Vous avez la possibilité d’entrer volontairement dans un parcours de
            Transitions collectives dans les deux cas suivants :
            <ul>
              <li>
                <u>
                  Si votre entreprise a identifié votre métier comme étant
                  fragilisé
                </u>{" "}
                au sein d’un accord de gestion des emplois et des parcours
                professionnels (GEPP) ;
              </li>
              <li>
                <u>Dans le cadre d’un congé de mobilité</u>, si votre entreprise
                a signé un accord GEPP ou une rupture conventionnelle collective
                (RCC) prévoyant le recours au congé de mobilité et autorisant
                les salariés à bénéficier au dispositif Transitions collectives.
              </li>
            </ul>
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
