import {
  Button,
  Card,
  CardDescription,
  CardImage,
  Col,
  Container,
  MediaVideo,
  Row,
  Title,
  TitleDisplay,
} from "@dataesr/react-dsfr"
import React from "react"

import Layout from "@/components/Layout"

const Page = () => {
  return (
    <Layout>
      <Container spacing="pt-2w pb-2w">
        <Row>
          <Col className="fr-col-12 fr-col-sm-12 fr-col-md-6 fr-col-xl-6">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-beteen",
              }}
            >
              <div>
                <Title as="h1">Transitions collectives</Title>
                <div>{`un accompagnement à la reconversion`}</div>
                <div>{`professionnelle`}</div>
                <div>{`sur les territoires`}</div>
              </div>
              <div
                className="fr-pt-4w"
                style={{
                  flexGrow: "1",
                }}
              >
                <div className="fr-pb-1w">
                  <a rel tabIndex="-1" target="_self" href="#entreprise">
                    <Button
                      className="button-rounded"
                      size="lg"
                    >{`Je suis une entreprise`}</Button>
                  </a>
                </div>
                <div className="fr-pb-1w">
                  <a rel tabIndex="-1" target="_self" href="#salarie">
                    <Button
                      className="button-rounded"
                      size="lg"
                      secondary
                    >{`Je suis un salarié`}</Button>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col className="fr-col-12 fr-col-sm-12 fr-col-md-6 fr-col-xl-6 fr-p-4w">
            <MediaVideo>
              <iframe
                title="Présentation transco"
                className="fr-responsive-vid__player"
                src="https://www.dailymotion.com/embed/video/x80ghfn"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </MediaVideo>
          </Col>
        </Row>
      </Container>
      <div className="fr-container fr-py-2w" id="salarie">
        <Row>
          <TitleDisplay as="h2">Je suis un salarié</TitleDisplay>
        </Row>
        <div className="fr-grid-row infography">
          <Col className="fr-col-12 fr-col-sm-12 fr-col-md-3 fr-col-xl-3 fr-p-2w text-center">
            <img alt="" src="images/salarie-picto1.png" />
            <div>Un accompagnement personnalisé pour vous reconvertir</div>
          </Col>
          <Col className="fr-col-12 fr-col-sm-12 fr-col-md-3 fr-col-xl-3 fr-p-2w text-center">
            <img alt="" src="images/salarie-picto2.png" />
            <div>
              Une formation vers un métier d’avenir et qui recrute dans votre
              région
            </div>
          </Col>
          <Col className="fr-col-12 fr-col-sm-12 fr-col-md-3 fr-col-xl-3 fr-p-2w text-center">
            <img alt="" src="images/salarie-picto3.png" />
            <div>
              {" "}
              Le maintien de votre salaire et de votre contrat de travail
              pendant toute la durée de la formation
            </div>
          </Col>
          <Col className="fr-col-12 fr-col-sm-12 fr-col-md-3 fr-col-xl-3 fr-p-2w text-center">
            <img alt="" src="images/salarie-picto4.png" />
            <div>
              {" "}
              La possibilité de réintégrer votre poste de travail (ou un poste
              équivalent) au sein de votre entreprise
            </div>
          </Col>
        </div>
      </div>
      <div className="fr-container fr-py-2w" id="entreprise">
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
      </div>
    </Layout>
  )
}

export default Page
