import { MediaVideo } from "@dataesr/react-dsfr"
import React from "react"

const NewsVideo = ({ title, src }) => {
  return (
    <div className="fr-grid-row fr-grid-row--center fr-pb-2w">
      <div className="fr-col-lg-8 fr-col-12">
        <MediaVideo>
          <iframe
            title={title}
            className="fr-responsive-vid__player"
            src={src}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
        </MediaVideo>
      </div>
    </div>
  )
}

export default NewsVideo
