import React from "react"

const { MediaVideo } = require("@dataesr/react-dsfr")

const HomeVideo = () => {
  return (
    <div className="fr-container video-section">
      <h2 className="fr-grid-row fr-my-4w">
        <span className="fr-mr-md-3w">
          Le dispositif Transistions collectives
        </span>
      </h2>
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
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-py-2w">
        <div className="fr-col-lg-8 fr-col-12">
          {`Le dispositif des Transitions collectives permet aux salariés et aux
        employeurs d’adopter une démarche responsable, en cas de difficulté
        économique conjoncturelle. Ce dispositif porté par le Ministère du
        Travail, de l’Emploi et de l’Insertion s’inscrit dans une triple
        démarche visant à trouver des solutions concrètes aux entreprises et aux
        salariés dans des phases délicates pour la vie de l’entreprise.`}
        </div>
      </div>
    </div>
  )
}

export default HomeVideo
