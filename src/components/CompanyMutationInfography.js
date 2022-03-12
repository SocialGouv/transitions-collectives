import Image from "next/image"
import React from "react"

import picto1 from "../../public/images/company-mutation/picto_1.png"
import picto2 from "../../public/images/company-mutation/picto_2.png"
import picto3 from "../../public/images/company-mutation/picto_3.png"
import picto4 from "../../public/images/company-mutation/picto_4.png"

const CompanyMutationInfography = () => {
  return (
    <div className="fr-container infography">
      <h2 className="fr-h3">{`Transitions collectives c'est`}</h2>
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <Image alt="" src={picto1} />
              <p>
                {`Être accompagné pour anticiper les mutations économiques de votre secteur d’activité et sur votre territoire.`}
              </p>
            </div>
            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <Image alt="" src={picto2} />
              <p>{`Assurer l’avenir de vos salariés volontaires en les formant à un métier porteur.`}</p>
            </div>

            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <Image alt="" src={picto3} />
              <p>{`Sécuriser vos salariés en leur permettant de conserver leur contrat de travail et leur rémunération pendant leur parcours de formation.`}</p>
            </div>
            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <Image alt="" src={picto4} />
              <p>{`Être accompagné financièrement par l’État.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyMutationInfography
