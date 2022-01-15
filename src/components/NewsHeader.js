import React from "react"

const NewsHeader = ({ title, children }) => {
  return (
    <header>
      <h1 className="fr-pt-4w">{title}</h1>
      {children}
    </header>
  )
}

export default NewsHeader
