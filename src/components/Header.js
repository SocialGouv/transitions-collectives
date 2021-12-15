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
          <NavSubItem title="dans ma région pour en savoir plus" link="/" />
          <NavSubItem
            title="dans mon territoire pour passer à l'action"
            link="/"
          />
        </NavItem>
        <NavItem title="Je souhaite faire connaitre ce dispositif">
          <NavSubItem
            title="auprès des recruteurs de mon territoire"
            link="/faire-connaitre-recruteurs"
          />
          <NavSubItem
            title="auprès de mes collègues de travail et de mes partenaires"
            link="/faire-connaitre-partenaires"
          />
        </NavItem>
        <NavItem title="Contact / Liens utiles" link="/" />
      </HeaderNav>
    </DSFRHeader>
  )
}

export default Header
