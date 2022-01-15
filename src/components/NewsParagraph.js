import React from "react"

const NewsParagraph = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  )
}

export default NewsParagraph
