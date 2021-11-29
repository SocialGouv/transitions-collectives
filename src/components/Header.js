import {
  Header as DSFRHeader,
  HeaderBody,
  Logo,
  Service,
} from "@dataesr/react-dsfr"
import React from "react"

const Header = () => {
  return (
    <DSFRHeader>
      <HeaderBody>
        <Logo splitCharacter={10}>Ministère du travail</Logo>
        <Service
          title="Transitions collectives"
          description="Simplification du dispositif Transitions collectives"
        />
      </HeaderBody>
    </DSFRHeader>
  )
}

export default Header
