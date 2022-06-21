import {
  Header as DSFRHeader,
  HeaderBody,
  HeaderNav,
  Link,
  NavItem,
  NavSubItem,
  Service,
} from "@dataesr/react-dsfr"
import React from "react"

const Logo = () => (
  <Link className="ds-fr--no-shadow" title="Accueil" href="/">
    <p className="fr-logo">
      Ministère
      <br /> du travail,
      <br />
      du plein emploi
      <br />
      {`et de l'insertion`}
    </p>
  </Link>
)

const Header = () => {
  return (
    <DSFRHeader>
      <HeaderBody>
        <Logo __TYPE="Logo" />
        <Service title="Transitions collectives" description="" />
      </HeaderBody>
      <HeaderNav>
        <NavItem title="Entreprise">
          <NavSubItem
            title="Je fais face à des difficultés dans mon secteur d'activité"
            link="/entreprise/difficultes-dans-mon-secteur"
          />
          <NavSubItem
            title="J'ai des besoins en recrutement"
            link="/entreprise/besoins-en-recrutement"
          />
          <NavSubItem
            title="Mes interlocuteurs de proximité"
            link="/interlocuteurs-pour-les-entreprises"
          />
        </NavItem>
        <NavItem title="Salarié">
          <NavSubItem
            title="Je me pose des questions sur mon avenir pro"
            link="/salarie/avenir-professionel"
          />
          <NavSubItem
            title="Je souhaite m'orienter vers un secteur qui recrute"
            link="/salarie/souhait-evolution"
          />
          <NavSubItem
            title="Mes interlocuteurs de proximité"
            link="/interlocuteurs-pour-les-salaries"
          />
        </NavItem>
        {/* <NavItem title="Je souhaite faire connaitre ce dispositif">
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
        </NavItem> */}
        <NavItem title="Actualités" link="/#news" />
        <NavItem title="Sites utiles" link="/sites-utiles" />
      </HeaderNav>
    </DSFRHeader>
  )
}

export default Header
