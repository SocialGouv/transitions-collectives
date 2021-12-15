import { Text } from "@dataesr/react-dsfr"
import React from "react"

const HomeInfography = () => {
  return (
    <div className="fr-container infography">
      <div className="fr-grid-row">
        <Text>{`Porté par le Ministère du Travail, de l’Emploi et de l’Insertion il s’inscrit dans une triple démarche visant à trouver des solutions concrètes aux entreprises et aux salariés dans des phases de transformation pour la vie de l’entreprise.
`}</Text>
      </div>
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <span>
                <img alt="" src="/images/home/picto_1.png" aria-hidden="true" />
              </span>
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Une action responsable</strong>
              </h3>
              <p>
                {`Ce dispositif permet d’inscrire son action dans une démarche responsable vis-à-vis de ses salariés`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <img alt="" src="/images/home/picto_2.png" aria-hidden="true" />
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Un accompagnement des salariés</strong>
              </h3>
              <p>
                {`Ce dispositif permet d’accompagner ses salariés vers des métiers d’avenir sur le territoire`}
              </p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <span>
                <img alt="" src="/images/home/picto_3.png" aria-hidden="true" />
              </span>
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>
                  Une démarche de maintien dans l’emploi au niveau local
                </strong>
              </h3>
              <p>
                {`Ce dispositif s’inscrit dans une démarche citoyenne avec un impact local immédiat.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeInfography
