import React from "react"

const HomeEmployeeCard = ({ title, image, link, isExternal }) => {
  return (
    <div className="card--green">
      <div className="fr-card fr-enlarge-link">
        <div
          className={`fr-card__body undefined ${
            isExternal ? "is-external-url" : ""
          }`}
        >
          <h4 className="fr-card__title">
            <a
              className="fr-card__link"
              title={`Aller à la page ${title}`}
              href={link}
              target={isExternal ? "_blank" : "_self"}
              rel="noreferrer"
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

const HomeEmployee = () => {
  return (
    <div className="fr-container home-employee">
      <h3 className="fr-h4">{`Je suis un salarié`} </h3>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-4">
          <HomeEmployeeCard
            image="images/home_employee.jpg"
            title="Je souhaite me reconvertir"
            link="/"
          />
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <HomeEmployeeCard
            image="images/home_employee.jpg"
            title="Je veux connaître les métiers qui recrutent"
            link="https://travail-emploi.gouv.fr/formation-professionnelle/formation-des-salaries/transitions_collectives/article/les-metiers-porteurs-en-region"
            isExternal
          />
        </div>
      </div>
    </div>
  )
}

export default HomeEmployee
