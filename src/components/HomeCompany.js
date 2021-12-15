import React from "react"

const HomeCompanyCard = ({ title, image, link }) => {
  return (
    <div className="card--green">
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
      <h3 className="fr-h4">{`Je suis responsable d’une entreprise`}</h3>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-4">
          <HomeCompanyCard
            image="/images/home/j_ai_des_besoins_en_recrutement.jpg"
            title="J’ai des besoins en recrutement"
            link="/entreprise/besoins-en-recrutement"
          />
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <HomeCompanyCard
            image="/images/home/je_fais_face_a_des_difficultes.jpg"
            title="Je fais face à des difficultés dans mon secteur d’activité"
            link="/entreprise/difficultes-dans-mon-secteur"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeCompany
