import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

const EmployeeFaqContact = () => {
  return (
    <div>
      <h3 className="fr-h4">Qui contacter?</h3>
      <Accordion>
        <AccordionItem title="Je souhaite intégrer le dispositif Transitions collectives. Qui dois-je contacter ?">
          <article>
            <p>
              Vous pouvez contacter votre employeur (service des ressources
              humaines - RH) ou un conseiller en évolution professionnelle (CEP)
              pour avoir plus d’informations sur le dispositif. Les
              représentants du personnel de votre entreprise peuvent également
              être mobilisés pour vous informer et vous accompagner.
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default EmployeeFaqContact
