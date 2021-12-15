import React from "react"

const CompanyRecruitmentInfography = () => {
  return (
    <div className="fr-container infography">
      <h2 className="fr-h3">{`Transitions collectives c'est`}</h2>
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-recruitment/picto_1.png"
                aria-hidden="true"
              />
              <p>
                {`Accompagner des salariés volontaires à se reconvertir vers un métier d’avenir. `}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-recruitment/picto_2.png"
                aria-hidden="true"
              />
              <p>{`Accueillir des salariés dans un cadré sécurisé : leur salaire et leur contrat de travail sont maintenus.`}</p>
            </div>

            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-recruitment/picto_3.png"
                aria-hidden="true"
              />
              <p>{`Bénéficier de l’aide des acteurs de Transitions collectives pour rechercher des profils adaptés à vos besoins`}</p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-recruitment/picto_4.png"
                aria-hidden="true"
              />
              <p>
                {`Recruter des personnes expérimentées au parcours diversifié.`}
              </p>
            </div>
            <div className="fr-col-md-4 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-recruitment/picto_5.png"
                aria-hidden="true"
              />
              <p>
                {`Participer à la reprise économique en créant une solidarité entre entreprises dans votre région.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyRecruitmentInfography
