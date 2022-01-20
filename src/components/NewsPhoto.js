import Image from "next/image"
import React from "react"

const NewsPhoto = ({ photo, source }) => {
  return (
    <div className="fr-container fr-py-2w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-10">
          <Image src={photo} layout="responsive" />
          <div className="fr-text--xs text-center">
            <em>{source}</em>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPhoto
