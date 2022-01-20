import React from "react"

const NewsHeaderSummary = ({ children }) => {
  return (
    <p className="fr-text--lead">
      <strong>{children}</strong>
    </p>
  )
}

export default NewsHeaderSummary
