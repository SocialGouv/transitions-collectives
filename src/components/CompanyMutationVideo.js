import React from "react"

const { MediaVideo } = require("@dataesr/react-dsfr")

const CompanyMutationVideo = () => {
  return (
    <div className="fr-container video-section">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        <div className="fr-col-lg-6 fr-col-12">
          <MediaVideo>
            <iframe
              title="Présentation transco"
              className="fr-responsive-vid__player"
              src="https://www.dailymotion.com/embed/video/x80pxgy"
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

export default CompanyMutationVideo
