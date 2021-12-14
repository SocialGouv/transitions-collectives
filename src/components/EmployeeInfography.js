import React from "react"

const EmployeeInfography = () => {
  return (
    <div className="fr-container infography">
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--center fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              {/* <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Une action responsable</strong>
              </h3> */}
              <p>
                {`Une formation vers un métier d’avenir et qui recrute près de chez vous.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              {/* <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Un accompagnement des salariés</strong>
              </h3> */}
              <p>{`Un accompagnement personnalisé pour vous reconvertir.`}</p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              {/* <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>
                  Une démarche de maintien dans l’emploi au niveau local
                </strong>
              </h3> */}
              <p>{`Le financement complet de votre parcours de formation.`}</p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              {/* <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>
                  Une démarche de maintien dans l’emploi au niveau local
                </strong>
              </h3> */}
              <p>
                {`Le maintien d’un niveau important de rémunération pendant toute la durée de la formation.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              {/* <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>
                  Une démarche de maintien dans l’emploi au niveau local
                </strong>
              </h3> */}
              <p>
                {`La sécurité de l’emploi par le maintien de votre contrat de travail.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeInfography
