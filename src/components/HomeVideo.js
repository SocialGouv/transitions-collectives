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
          Porté par le ministère du Travail, de l’Emploi et de l’Insertion, le
          dispositif Transitions collectives aide employeurs et salariés dans
          les phases de transformation de la vie de l’entreprise. Il
          accompagne :
        </p>
        <ul>
          <li>Les entreprises en perspective de développement</li>
          <li>
            Les entreprises en mutation (évolution de l’organisation du travail,
            transition technologique…)
          </li>
          <li>Les entreprises en difficultés économiques</li>
        </ul>
        <p>
          Et favorise la mobilité des salariés positionnés sur des métiers
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
              src="https://www.youtube.com/embed/YARhy56fwG4"
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
