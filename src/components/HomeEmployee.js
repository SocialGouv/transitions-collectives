import React from "react"

const HomeEmployeeCard = ({ title, image, link }) => {
  return (
    <div className="card--green">
      <div className="fr-card fr-enlarge-link">
        <div className={`fr-card__body`}>
          <h4 className="fr-card__title">
            <a
              className="fr-card__link"
              title={`Aller à la page ${title}`}
              href={link}
              target={"_self"}
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
        <div className="fr-col-12 fr-col-md-6 fr-col-lg-4">
          <HomeEmployeeCard
            image="/images/home/en_questionnement_professionnel.jpg"
            title="Je me pose des questions sur mon avenir professionnel"
            link="/salarie/avenir-professionel"
          />
        </div>
        <div className="fr-col-12 fr-col-md-6 fr-col-lg-4">
          <HomeEmployeeCard
            image="/images/home/en_souhait_evolution_vers_un_secteur.jpg"
            title="Je souhaite m’orienter vers un secteur qui recrute"
            link="/salarie/souhait-evolution"
            isExternal
          />
        </div>
      </div>
    </div>
  )
}

export default HomeEmployee
