import React from "react"

const HomeInfography = () => {
  return (
    <div className="fr-container infography">
      <div className="fr-grid-row fr-grid-row--gutters block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Une action responsable</strong>
              </h3>
              <p>
                {`Ce dispositif permet d’inscrire son action dans une démarche responsable vis-à-vis de ses salariés`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Un accompagnement des salariés</strong>
              </h3>
              <p>
                {`Ce dispositif permet d’accompagner ses salariés vers des métiers d’avenir sur le territoire`}
              </p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-5w">
              <h3 className="emphasis fr-mb-3w fr-h6">
                <strong>Une démarche locale</strong>
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
