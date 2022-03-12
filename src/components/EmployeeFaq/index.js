import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

import EmployeeFaqApresFormation from "./EmployeeFaqApresFormation"
import EmployeeFaqAvantFormation from "./EmployeeFaqAvantFormation"
import EmployeeFaqContact from "./EmployeeFaqContact"
import EmployeeFaqPendantFormation from "./EmployeeFaqPendantFormation"

const EmployeeFaq = () => {
  return (
    <div className="fr-container fr-py-4w faq">
      <h2 className="fr-h3">{`Je me pose des questions`}</h2>
      <div className="fr-py-2w">
        <Accordion>
          <AccordionItem title="Comment puis-avoir accès aux Transitions collectives ?">
            <p>
              Vous avez la possibilité d’entrer volontairement dans un parcours
              de Transitions collectives dans les deux cas suivants :
              <ul>
                <li>
                  <u>
                    Si votre entreprise a identifié votre métier comme étant
                    fragilisé
                  </u>{" "}
                  au sein d’un accord de gestion des emplois et des parcours
                  professionnels (GEPP) ;{" "}
                </li>
                <li>
                  <u> Dans le cadre d’un congé de mobilité</u>, si votre
                  entreprise a signé un accord GEPP ou une rupture
                  conventionnelle collective (RCC) prévoyant le recours au congé
                  de mobilité et autorisant les salariés à bénéficier au
                  dispositif Transitions collectives.
                </li>
              </ul>
            </p>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="fr-py-2w">
        <EmployeeFaqAvantFormation />
      </div>
      <div className="fr-py-2w">
        <EmployeeFaqPendantFormation />
      </div>
      <div className="fr-py-2w">
        <EmployeeFaqApresFormation />
      </div>
      <div className="fr-py-2w">
        <EmployeeFaqContact />
      </div>
    </div>
  )
}

export default EmployeeFaq
