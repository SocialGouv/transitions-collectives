import React from "react"

const NewsCard = ({ title, image, link }) => {
  return (
    <div className="fr-card fr-enlarge-link">
      <div className="fr-card__body">
        <h4 className="fr-card__title">
          <a href={link} className="fr-card__link">
            {title}
          </a>
        </h4>
      </div>
      <div className="fr-card__img">
        <img src={image} className="fr-responsive-img" alt="" /> 
      </div>
    </div>
  )
}

const HomeNews = () => {
  return (
    <div className="fr-container home-news">
      <h2 className="fr-mb-6w">{`Actualités`} </h2>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6 fr-col-lg-4">
          <NewsCard
            image="images/news/retour-premier-projet-transco.jpg"
            title="Mobilisation de ManpowerGroup France et Adecco , leaders de l’intérim"
            link="/actualites/mobilisation-manpower-et-adecco"
          />
        </div>
        <div className="fr-col-12 fr-col-md-6 fr-col-lg-4">
          <NewsCard
            image="images/news/retour-premier-projet-transco.jpg"
            title="Retour sur le premier projet de Transitions collectives"
            link="/actualites/retour-premier-projet-transco"
          />
        </div>
        <div className="fr-col-12 fr-col-md-6 fr-col-lg-4">
          <NewsCard
            image="images/news/sifa-technologies.jpg"
            title="Julien Barbrault et Stéphanie Roux, directeur et RRH de l’entreprise SIFA Technologies"
            link="/actualites/sifa-technologies"
          />
        </div>
        <div className="fr-col-12 fr-col-md-6 fr-col-lg-4">
          <NewsCard
            image="images/news/formation-pour-devenir-conducteur.png"
            title="Farid Mechhat, en formation pour devenir conducteur de véhicules"
            link="/actualites/formation-pour-devenir-conducteur"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeNews
