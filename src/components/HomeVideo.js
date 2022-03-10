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
        <p className="fr-mb-1w">
          Porté par le ministère du Travail, de l’Emploi et de l’Insertion et
          co-construit avec les organisations syndicales et patronales, le
          dispositif Transitions collectives a pour but d’aider les employeurs
          et les salariés à faire face aux mutations qui peuvent impacter le
          modèle et l’activité de leur entreprise.
          <br />
          Il s’adresse aux  :
        </p>
        <ul>
          <li>entreprises en perspective de développement</li>
          <li>
            entreprises en mutation (évolution de l’organisation du travail,
            transition technologique…)
          </li>
        </ul>
        <p>
          Il favorise la mobilité des salariés positionnés sur des métiers
          fragilisés.
        </p>
      </div>
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div className="fr-col-lg-6 fr-col-12">
          <MediaVideo>
            <iframe
              width="846"
              height="424"
              className="fr-responsive-vid__player"
              src="https://www.youtube.com/embed/tMa2_T7sewo"
              title="Présentation transco"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </MediaVideo>
        </div>
      </div>
    </div>
  )
}

export default HomeVideo
