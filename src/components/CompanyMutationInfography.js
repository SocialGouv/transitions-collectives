import React from "react"

const CompanyMutationInfography = () => {
  return (
    <div className="fr-container infography">
      <h2 className="fr-h3">{`Transitions collectives c'est`}</h2>
      <div className="fr-grid-row block">
        <div className="fr-col-12">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-mutation/picto_1.png"
                aria-hidden="true"
              />
              <p>
                {`Être accompagné pour anticiper les mutations économiques de votre secteur d’activité et sur votre territoire.`}
              </p>
            </div>
            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-mutation/picto_2.png"
                aria-hidden="true"
              />
              <p>{`Assurer l’avenir de vos salariés volontaires en les formant à un métier émergent.`}</p>
            </div>

            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-mutation/picto_3.png"
                aria-hidden="true"
              />
              <p>{`Sécuriser vos salariés en leur permettant de conserver leur contrat de travail et leur rémunération.`}</p>
            </div>
            <div className="fr-col-md-3 fr-col-12 fr-p-4w">
              <img
                alt=""
                src="/images/company-mutation/picto_4.png"
                aria-hidden="true"
              />
              <p>{`Être accompagné financièrement par l’État.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyMutationInfography
