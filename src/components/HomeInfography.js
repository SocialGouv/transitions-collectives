import Image from "next/image"
import React from "react"

import picto1 from "../../public/images/home/picto_1.png"
import picto2 from "../../public/images/home/picto_2.png"
import picto3 from "../../public/images/home/picto_3.png"

const HomeInfography = () => {
  return (
    <div className="fr-container infography">
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <span>
                <Image alt="" src={picto1} />
              </span>
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Une action responsable</strong>
              </h3>
              <p>
                {`Ce dispositif permet d’inscrire son action dans une démarche responsable vis-à-vis de ses salariés`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <Image alt="" src={picto2} />
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Un accompagnement des salariés</strong>
              </h3>
              <p>
                {`Ce dispositif permet d’accompagner ses salariés vers des métiers d’avenir sur le territoire`}
              </p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <span>
                <Image alt="" src={picto3} />
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
