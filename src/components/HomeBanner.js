import React from "react"

const HomeBanner = () => {
  return (
    <div className={`fr-container--fluid hero-banner`}>
      <div className={`fr-grid-row--center wrapper`}>
        <div className="background-image">
          <img
            alt="cover"
            src="/images/home/banner.jpg"
            decoding="async"
            data-nimg="fill"
          />
        </div>
        <div className={`fr-container content fr-py-2w`}>
          <div className="fr-grid-row">
            <div className="fr-col-12 fr-col-lg-5 fr-mb-2w">
              <h1 className="fr-display-md">Transitions collectives</h1>
              <p>
                {`Une démarche socialement responsable pour accompagner l’emploi local vers des filières d’avenir`}
              </p>
            </div>
          </div>
          <div className="fr-grid-row">
            <div className="fr-col-12 fr-col-lg-3 fr-mb-2w">
              <a href="/#salarie">
                <div>
                  <button type="button">Je suis un salarié</button>
                </div>
              </a>
            </div>
            <div className="fr-col-12 fr-col-lg-3 fr-mb-2w">
              <a href="/#entreprise">
                <div>
                  <button type="button">Je suis une entreprise</button>
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
