import React from "react"

const NewsCard = ({ title, image }) => {
  return (
    <div className="fr-card fr-enlarge-link">
      <div className="fr-card__body">
        <h4 className="fr-card__title">
          <a href="#" className="fr-card__link">
            {title}
          </a>
        </h4>
        {/* <p className="fr-card__desc">
          La carte donne des aperçus cliquables d’une page de contenu à
          l’utilisateur. Elle fait généralement partie d'une collection ou liste
          d’aperçus de contenu similaires. La carte n’est jamais présentée de
          manière isolée.
        </p>
        <p className="fr-card__detail">Détail</p> */}
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
        <div className="fr-col-12 fr-col-md-4">
          <NewsCard
            image="images/home_salarie.jpg"
            title="Retour sur le lancement de Transitions collectives"
          />
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <NewsCard
            image="images/home_salarie.jpg"
            title="Témoignage : Mankoura en formation pour devenir aide-soignante"
          />
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <NewsCard
            image="images/home_salarie.jpg"
            title="Témoignage : Henri, RH de HealthCity"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeNews
