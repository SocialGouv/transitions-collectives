import Image from "next/image"
import React from "react"

import picto1 from "../../public/images/company-recruitment/picto_1.png"
import picto2 from "../../public/images/company-recruitment/picto_2.png"
import picto3 from "../../public/images/company-recruitment/picto_3.png"
import picto4 from "../../public/images/company-recruitment/picto_4.png"
import picto5 from "../../public/images/company-recruitment/picto_5.png"

const CompanyRecruitmentInfography = () => {
  return (
    <div className="fr-container infography">
      <h2 className="fr-h3">{`Transitions collectives c'est`}</h2>
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto1} />
              <p>
                {`Accompagner des salariés volontaires à se reconvertir vers un métier d’avenir. `}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto2} />
              <p>{`Accueillir des salariés dans un cadré sécurisé : leur salaire et leur contrat de travail sont maintenus.`}</p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto3} />
              <p>{`Bénéficier de l’aide des acteurs de Transitions collectives pour rechercher des profils adaptés à vos besoins.`}</p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto4} />
              <p>
                {`Recruter des personnes expérimentées au parcours diversifié.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <Image alt="" src={picto5} />
              <p>
                {`Participer à la reprise économique en créant une solidarité entre entreprises dans votre région.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyRecruitmentInfography
