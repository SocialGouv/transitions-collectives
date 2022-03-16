import {
  Footer as DSFooter,
  FooterBody,
  FooterBodyItem,
  FooterBottom,
  FooterLink,
  Link,
  Logo,
  SwitchTheme,
} from "@dataesr/react-dsfr"
import React, { useState } from "react"

const footerBottomLinks = [
  {
    key: "footer-bottom-link-accessibility",
    link: "/mentions-legales#accessibilite",
    title: "Accessibilité : non conforme",
  },
  {
    key: "footer-bottom-link-legal",
    link: "/mentions-legales",
    title: "Mentions légales",
  },
]

const FooterDescription = () => (
  <>
    {`Le site du ministère du travail, de l'emploi et de l'insertion : `}
    <Link
      href="https://travail-emploi.gouv.fr/"
      target="_blank"
      rel="noopener noreferrer"
    >
      travail-emploi.gouv.fr
    </Link>
    <br />
    Le code source est ouvert et les contributions sont bienvenues :{" "}
    <Link
      href="https://github.com/socialgouv/transitions-collectives"
      target="_blank"
      rel="noopener noreferrer"
    >
      code source
    </Link>
    .
  </>
)

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <DSFooter>
        <FooterBody description={<FooterDescription />}>
          <Logo
            splitCharacter={8}
          >{`Ministère du travail, de l'emploi et de l'insertion`}</Logo>
          <FooterBodyItem>
            <Link target="_BLANK" href="https://legifrance.gouv.fr">
              legifrance.gouv.fr
            </Link>
          </FooterBodyItem>
          <FooterBodyItem>
            <Link target="_BLANK" href="https://gouvernement.fr">
              gouvernement.fr
            </Link>
          </FooterBodyItem>
          <FooterBodyItem>
            <Link target="_BLANK" href="https://service-public.fr">
              service-public.fr
            </Link>
          </FooterBodyItem>
          <FooterBodyItem>
            <Link target="_BLANK" href="https://data.gouv.fr">
              data.gouv.fr
            </Link>
          </FooterBodyItem>
        </FooterBody>
        <FooterBottom>
          {[
            <FooterLink key="theme" onClick={() => setIsOpen(true)}>
              <span
                className="fr-fi-theme-fill fr-link--icon-left"
                aria-controls="fr-theme-modal"
                data-fr-opened={isOpen}
              >
                Paramètres d’affichage
              </span>
            </FooterLink>,
          ].concat(
            footerBottomLinks.map((item) => (
              <FooterLink key={item.key} href={item.link}>
                {item.title}
              </FooterLink>
            ))
          )}
        </FooterBottom>
      </DSFooter>
      <SwitchTheme isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Footer
