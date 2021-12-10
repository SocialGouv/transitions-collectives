import {
  Card,
  CardDescription,
  CardImage,
  Col,
  Container,
  Row,
  TitleDisplay,
} from "@dataesr/react-dsfr"
import React from "react"

const HomeCompany = () => {
  return (
    <Container>
      <TitleDisplay as="h2">Je suis une entreprise</TitleDisplay>
      <Row className="fr-m-2w">
        <Col
          spacing="m-1w"
          className="fr-col-12 fr-col-sm-8 fr-col-md-4 fr-col-lg-4 fr-col-xl-4 "
        >
          <Card href="/">
            <CardImage
              alt="alternative"
              src="images/home_entreprise.jpg"
              enlargeLink={true}
              hasArrow={true}
            />
            <CardDescription>
              {`Mon entreprise connait des mutations dans son secteur d’activité`}
            </CardDescription>
          </Card>
        </Col>
        <Col
          spacing="m-1w"
          className="fr-col-12 fr-col-sm-8 fr-col-md-4 fr-col-lg-4 fr-col-xl-4"
        >
          <Card href="/">
            <CardImage
              alt="alternative"
              src="images/home_entreprise.jpg"
              enlargeLink={true}
              hasArrow={true}
            />
            <CardDescription>
              {`Mon entreprise a des besoins en recrutement`}
            </CardDescription>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeCompany
