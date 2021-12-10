import React from "react"

const HomeBanner = () => {
  return (
    <div className={`fr-container--fluid hero-banner`}>
      <div className={`fr-grid-row--center wrapper`}>
        <div className={`fr-container content fr-py-2w`}>
          <div className="fr-grid-row">
            <div className="fr-col-12 fr-col-lg-6 fr-mb-2w">
              <h1>Transitions collectives</h1>
              <p>
                {`Transitions collectives, une démarche responsable pour accompagner l’emploi local vers des filières d’avenir`}
              </p>
            </div>
          </div>
          <div className="fr-grid-row">
            <div className="fr-col-12 fr-mb-2w">
              <a href="/#entreprise">
                <div>
                  <button
                    className="fr-btn fr-btn--lg first-button"
                    type="button"
                  >
                    Je suis une entreprise
                  </button>
                </div>
              </a>
            </div>
            <div className="fr-col-12 fr-mb-2w">
              <a href="/#salarie">
                <div>
                  <button
                    className="fr-btn fr-btn--lg second-button"
                    type="button"
                  >
                    Je suis un salarié
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
