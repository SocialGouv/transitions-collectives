import Image from "next/image"
import React from "react"

import picto1 from "../../public/images/employee/picto_1.png"
import picto2 from "../../public/images/employee/picto_2.png"
import picto3 from "../../public/images/employee/picto_3.png"
import picto4 from "../../public/images/employee/picto_4.png"
import picto5 from "../../public/images/employee/picto_5.png"

const EmployeeInfography = () => {
  return (
    <div className="fr-container infography">
      <h2 className="fr-h3">{`Transitions collectives c'est`}</h2>
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto1} />
              <p>
                {`Une formation vers un métier d’avenir et qui recrute près de chez vous.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto2} />
              <p>{`Un accompagnement personnalisé pour vous reconvertir.`}</p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto3} />
              <p>{`Le financement complet de votre parcours de formation.`}</p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto4} />
              <p>
                {`Le maintien d’un niveau important de rémunération pendant toute la durée de la formation.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto5} />
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
