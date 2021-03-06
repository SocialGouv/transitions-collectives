import { Button } from "@dataesr/react-dsfr"
import Image from "next/image"
import React from "react"

import banner from "../../public/images/home/banner.jpg"

const HomeBanner = () => {
  return (
    <div className={`fr-container--fluid hero-banner`}>
      <div className={`fr-grid-row--center hero-banner__wrapper`}>
        <div className="background-image">
          <Image layout="fill" alt="cover" src={banner} />
        </div>
        <div className={`fr-container hero-banner__content fr-py-2w`}>
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
                <Button size="sm">Je suis un salarié</Button>
              </a>
              <a href="/#entreprise" target="_self">
                <Button size="sm">Je suis une entreprise</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
