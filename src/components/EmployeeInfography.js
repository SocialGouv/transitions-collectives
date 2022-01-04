import React from "react"

const EmployeeInfography = () => {
  return (
    <div className="fr-container infography">
      <h2 className="fr-h3">{`Transitions collectives c'est`}</h2>
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img alt="" src="/images/employee/picto_1.png" />
              <p>
                {`Une formation vers un métier d’avenir et qui recrute près de chez vous.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img alt="" src="/images/employee/picto_2.png" />
              <p>{`Un accompagnement personnalisé pour vous reconvertir.`}</p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img alt="" src="/images/employee/picto_3.png" />
              <p>{`Le financement complet de votre parcours de formation.`}</p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img alt="" src="/images/employee/picto_4.png" />
              <p>
                {`Le maintien d’un niveau important de rémunération pendant toute la durée de la formation.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img alt="" src="/images/employee/picto_5.png" />
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
