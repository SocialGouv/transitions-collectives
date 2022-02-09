import React from "react"

const NewsHeaderSummary = ({ children }) => {
  return (
    <p className="fr-text--lead fr-pb-4w">
      <strong>{children}</strong>
    </p>
  )
}

export default NewsHeaderSummary
