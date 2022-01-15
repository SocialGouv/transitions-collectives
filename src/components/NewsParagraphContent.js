import React from "react"

const NewsParagraphContent = ({ children, list }) => {
  return list ? (
    <ul className="fr-text--lg">{children}</ul>
  ) : (
    <p className="fr-text--lg">{children}</p>
  )
}

export default NewsParagraphContent
