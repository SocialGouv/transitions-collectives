import Image from "next/image"
import React from "react"

import banner from "../../public/images/home/banner.jpg"

const HomeBanner = () => {
  return (
    <div className={`fr-container--fluid hero-banner`}>
      <div className={`fr-grid-row--center wrapper`}>
        <div className="background-image">
          <Image layout="fill" alt="cover" src={banner} />
        </div>
        <div className={`fr-container content fr-py-2w`}>
          <div className="fr-grid-row">
            <div className="fr-col-12 fr-col-lg-5 fr-mb-1w">
              <h1>
                <div>Transitions</div>
                <div>collectives</div>
              </h1>
              <p>
                <div>Une démarche pour anticiper</div>
                <div>les mutations économiques et protéger l’emploi local</div>
              </p>
            </div>
          </div>
          <div className="fr-grid-row">
            <div className="fr-col-12 fr-col-lg-6 fr-mb-2w">
              <a href="/#salarie" target="_self">
                <button className="first-button" type="button">
                  Je suis un salarié
                </button>
              </a>
              <a href="/#entreprise" target="_self">
                <button className="second-button" type="button">
                  Je suis une entreprise
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
