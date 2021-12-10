import {
  Header as DSFRHeader,
  HeaderBody,
  HeaderNav,
  HeaderOperator,
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
        <Logo
          splitCharacter={10}
        >{`Ministère du travail, de l'emploi et de l'insertion`}</Logo>
        <HeaderOperator>
          <img src="images/france-relance-logo.png" alt="France Relance" />
        </HeaderOperator>
        <Service
          title="Transitions collectives"
          description="Simplification du dispositif Transitions collectives"
        />
      </HeaderBody>
      <HeaderNav>
        <NavItem title="Mes interlocuteurs">
          <NavSubItem title="dans ma région" link="/" />
          <NavSubItem title="dans mon territoire" link="/" />
        </NavItem>
        <NavItem title="Faire connaitre ce dispositif">
          <NavSubItem
            title="auprès des recruteurs de mon territoire"
            link="/"
          />
          <NavSubItem title="auprès de mes collègues de travail" link="/" />
        </NavItem>
        <NavItem title="Contact / Liens utiles" link="/" />
      </HeaderNav>
    </DSFRHeader>
  )
}

export default Header
