import React from "react"

const HomeCompanyCard = ({ title, image, link }) => {
  return (
    <div className="card--blue">
      <div className="fr-card fr-enlarge-link ">
        <div className="fr-card__body">
          <h4 className="fr-card__title">
            <a
              className="fr-card__link"
              title={`Aller à la page ${title}`}
              href={link}
            >
              {title}
            </a>
          </h4>
        </div>
        <div className="fr-card__img">
          <span>
            <img alt="" sizes="100vw" src={image} />
          </span>
        </div>
      </div>
    </div>
  )
}

const HomeCompany = () => {
  return (
    <div className="fr-container home-company">
      <h3 className="fr-h4">{`Je suis une entreprise`}</h3>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-4">
          <HomeCompanyCard
            image="images/home_company.jpg"
            title="Je fais face à des difficultés dans mon secteur d’activité"
            link="/"
          />
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <HomeCompanyCard
            image="images/home_company.jpg"
            title="J’ai des besoins en recrutement"
            link="/"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeCompany
