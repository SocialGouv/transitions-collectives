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
          <img
            style={{
              height: "85px",
              width: "85px",
            }}
            src="/images/france-relance-logo.png"
            alt="France Relance"
          />
        </HeaderOperator>
        <Service title="Transitions collectives" description="" />
      </HeaderBody>
      <HeaderNav>
        <NavItem title="Mes interlocuteurs de proximité">
          <NavSubItem
            title="je suis salarié"
            link="/interlocuteurs-pour-les-salaries"
          />
          <NavSubItem
            title="je suis responsable d'entreprise"
            link="/interlocuteurs-pour-les-entreprises"
          />
        </NavItem>
        <NavItem title="Je souhaite faire connaitre ce dispositif">
          <NavSubItem
            title="auprès des recruteurs de mon territoire"
            link="/faire-connaitre-recruteurs"
          />
          <NavSubItem
            title="auprès de mes collègues de travail"
            link="/faire-connaitre-collegues"
          />
          <NavSubItem
            title="auprès de mes partenaires"
            link="/faire-connaitre-partenaires"
          />
        </NavItem>
        <NavItem title="Sites utiles" link="/sites-utiles" />
      </HeaderNav>
    </DSFRHeader>
  )
}

export default Header
