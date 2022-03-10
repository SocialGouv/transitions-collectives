import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import React from "react"

const EmployeeFaqPendantFormation = () => {
  return (
    <div>
      <h3 className="fr-h4">Pendant la formation</h3>
      <Accordion className="custom-class">
        <AccordionItem title="Mon salaire et mon contrat de travail sont-ils maintenus pendant la formation ?">
          <article>
            <p>
              Votre contrat de travail est maintenu pendant toute la durée de la
              formation. Votre salaire est maintenu en partie pendant toute la
              durée de la formation :
              <ul>
                <li>
                  Pour les salaires inférieurs ou égaux à deux SMIC : votre
                  rémunération est intégralement maintenue,
                </li>
                <li>
                  Pour les salaires supérieurs à deux SMIC : si votre projet
                  dure moins d’un an ou de 1200 heures, 90 % de votre
                  rémunération est maintenue et votre rémunération ne peut
                  descendre en-dessous de deux SMIC. Si votre parcours de
                  formation dure plus d’un an, votre rémunération représentera
                  60 % de votre salaire initial pendant la deuxième année. Votre
                  rémunération ne peut toutefois pas être inférieure à deux
                  SMIC.
                </li>
              </ul>
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Quelle est la durée de la formation ?">
          <article>
            <p>
              La durée de la formation dépend du métier choisi. Cependant, la
              formation ne peut pas dépasser 24 mois ou 2 400 heures.
            </p>
            <p>
              À noter : dans le cadre d’un congé de mobilité, la durée de votre
              parcours de formation ne peut pas dépasser celle du congé de
              mobilité.
            </p>
          </article>
        </AccordionItem>
        <AccordionItem title="Devrais-je quitter la ville dans laquelle je travaille aujourd’hui ?">
          <article>
            <p>
              Votre dossier de Transitions collectives doit s’appuyer sur un
              métier porteur de votre région. Ainsi, votre mobilité régionale
              peut être sollicitée.
            </p>
            <p>
              À l’issue de votre parcours de formation, vous êtes également
              libre de répondre aux offres d’emploi qui vous permettront de
              choisir votre zone de travail.
            </p>
            <p>
              Vous avez toutefois la possibilité de présenter votre projet dans
              une autre région, mais vous devrez justifier ce choix au regard de
              votre projet professionnel. Le traitement de votre dossier prendra
              en compte la cohérence de la région choisie par rapport à votre
              projet.
            </p>
          </article>
        </AccordionItem>

        <AccordionItem title="La formation est-elle payante ?">
          <article>
            <p>
              Non, la formation est prise en charge dans sa totalité. Vous
              n’aurez pas besoin d’utiliser votre compte personnel de formation
              (CPF) pour entrer dans ce parcours. Par ailleurs, vous pouvez sous
              certaines conditions bénéficier d’un forfait journalier vous
              permettant de compenser les dépenses éventuelles de transport, de
              restauration et d’hébergement.
            </p>
          </article>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default EmployeeFaqPendantFormation
