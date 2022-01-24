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

const footerBodyLinks = [
  {
    external: true,
    key: "footer-body-link-4",
    link: "https://www.fabrique.social.gouv.fr/",
    title: "Fabrique numérique des ministères sociaux",
  },
]

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
    Le code source est ouvert et les contributions sont bienvenues.{" "}
    <Link
      href="https://github.com/socialgouv/transitions-collectives"
      target="_blank"
      rel="noopener noreferrer"
    >
      Voir le code source
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
          <Logo href="https://travail-emploi.gouv.fr/">
            {`Ministère du travail, de l'emploi et de l'insertion`}
          </Logo>
          {footerBodyLinks.map((item) => (
            <FooterBodyItem key={item.key}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.alt}
              >
                {item.title}
              </Link>
            </FooterBodyItem>
          ))}
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
