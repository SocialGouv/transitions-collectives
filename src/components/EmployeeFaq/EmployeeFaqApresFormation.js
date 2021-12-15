import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

const EmployeeFaqApresFormation = () => {
  return (
    <div>
      <h3 className="fr-h4">Après la formation</h3>
      <Accordion>
        <AccordionItem title="Mon contrat de travail actuel s’arrête-t-il à la fin de la formation ?">
          <article>
            <p>
              L’objectif de votre parcours de reconversion est de vous permettre
              de trouver un emploi en rapport avec la formation que vous avez
              suivie.
            </p>
            <p>
              Cependant, vous gardez la possibilité de réintégrer votre poste de
              travail ou un poste équivalent dans votre entreprise à l’issue de
              votre parcours de reconversion, car votre contrat de travail ne
              s’arrête pas à la fin de la formation.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Puis-je être accompagné pour trouver un emploi après la formation ?">
          <article>
            <p>
              Oui, vous pouvez tout à fait être accompagné pendant votre
              recherche d’emploi. Pôle Emploi pourra notamment vous proposer les
              offres d’emploi correspondant aux nouvelles compétences que vous
              avez acquises sur le métier porteur de votre choix.
            </p>
            <p>
              Votre CEP est également mobilisable pendant votre parcours de
              formation pour vous aider à trouver un nouvel emploi.
            </p>
            <p>
              Enfin, des plateformes territoriales se développent actuellement
              sur vos territoires. Leur mission : mettre en relation les
              entreprises dont les emplois sont menacés et les entreprises qui
              recrutent. Votre CEP pourra vous orienter vers elles.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Que se passe-t-il si je ne trouve pas d’emploi après ma formation ?">
          <article>
            <p>
              À l’issue de votre formation, si vous ne trouvez pas d’employeur
              dans le secteur choisi, vous pourrez réintégrer votre poste de
              travail (ou un poste équivalent) au sein de votre entreprise.
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default EmployeeFaqApresFormation
