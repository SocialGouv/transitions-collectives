import {
  Header as DSFRHeader,
  HeaderBody,
  HeaderNav,
  Logo,
  NavItem,
  NavSubItem,
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
      <HeaderNav>
        <NavItem title="nav item #1" link="/" />
        <NavItem title="nav item #2">
          <NavSubItem title="nav subItem #1" link="/path-to-resources-1" />
          <NavSubItem
            title="nav subItem #2"
            link="/path-to-resources-2"
            current
          />
          <NavSubItem title="nav subItem #3" link="/path-to-resources-3" />
        </NavItem>
      </HeaderNav>
    </DSFRHeader>
  )
}

export default Header
