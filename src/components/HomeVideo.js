import React from "react"

const { MediaVideo } = require("@dataesr/react-dsfr")

const HomeVideo = () => {
  return (
    <div className="fr-container video-section">
      <h2 className="fr-grid-row fr-my-4w">
        <span className="fr-mr-md-3w">
          Le dispositif Transitions collectives
        </span>
      </h2>
      <div className="fr-grid-row">
        <p>
          {`Le dispositif des Transitions collectives permet aux salariés et aux employeurs d’adopter une démarche socialement responsable en accompagnant:`}
          <ul>
            <li>Les entreprises en perspectives de développement</li>
            <li>
              Les entreprises en mutation (évolution de l’organisation du
              travail, transition technologique…)
            </li>
            <li>Les entreprises en difficultés économique </li>
          </ul>
          {`Et en favorisant la mobilité des salariés positionnés sur des métiers fragilisés`}
        </p>
      </div>
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div className="fr-col-lg-6 fr-col-12">
          <MediaVideo>
            <iframe
              title="Présentation transco"
              className="fr-responsive-vid__player"
              src="https://www.dailymotion.com/embed/video/x80ghfn"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </MediaVideo>
        </div>
      </div>
    </div>
  )
}

export default HomeVideo
