import { Select } from "@dataesr/react-dsfr"
import Fuse from "fuse.js"
import React, { useState } from "react"

import contacts from "@/lib/data/contacts"
import darps from "@/lib/data/darps"
import departements from "@/lib/data/departements"
import opcoTypes from "@/lib/data/opco"

const EMPTY_SELECT_OPTION = {
  label: "Sélectionnez une option",
  value: null,
}

const options = {
  includeMatches: true,
  keys: ["departement"],
  useExtendedSearch: true,
}
const fuse = new Fuse(contacts, options)

const DarpInfo = () => (
  <section className="fr-text--sm">
    {
      "Le délégué à l'accompagnement des reconversions professionnelles (DARP) est votre interlocuteur privilégié sur le territoire. Il vous accompagne pour :"
    }
    <ul>
      <li>
        - repérer les enjeux RH de votre entreprise, vos besoins notamment en
        matière de compétences, et identifier avec vous des solutions
      </li>
      <li>
        - faciliter l’identification et le soutien d’interlocuteurs de proximité
        (DDETS, Pôle emploi, OPCO, organismes de formation…)
      </li>
      <li>
        - échanger et suivre la démarche de Transitions collectives de votre
        entreprise
      </li>
    </ul>
  </section>
)

const OpcoInfo = () => (
  <section className="fr-text--sm">
    Votre opérateur de compétences (OPCO) :
    <ul>
      <li>- pour vous accompagner dans la réalisation d’un diagnostic RH</li>{" "}
      <li>
        - pour identifier les métiers fragilisés au sein de votre entreprise
      </li>{" "}
      <li>
        - pour un appui à la réalisation de votre dossier de demande de
        Transitions collectives
      </li>
    </ul>
  </section>
)

const AtProInfo = () => (
  <section className="fr-text--sm">
    Votre association de Transitions pro (ATpro) :
    <ul>
      <li>- pour constituer les dossiers de demande de vos salariés</li>
    </ul>
  </section>
)

const hasInfo = (type) => {
  return ["DARP", "At Pro", "OPCO"].includes(type)
}

const StructureCard = ({ structure }) => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="search-contact__card fr-p-3w">
      <p className="fr-text--lg fr-mb-1w">
        <strong>
          {structure.name} {structure.opcoNetwork || ""}
        </strong>
        {hasInfo(structure.name) && (
          <button type="button" onClick={() => setShowInfo(structure.name)}>
            <i className="ri-question-line fr-text--lg" aria-hidden="true" />
          </button>
        )}
        <br />
      </p>
      <p className="fr-mb-2w">{structure.address}</p>
      {structure.email && (
        <div className="fr-mb-2w">
          <div className="icon-link">
            <i className="ri-mail-fill" aria-hidden="true" />
            <a
              rel="noopener noreferrer"
              title={`Envoyer un email à ${structure.email} - ouvre une nouvelle fenêtre`}
              href={`mailto:${structure.email}`}
            >
              {structure.email}
            </a>
          </div>
        </div>
      )}
      {!structure.email &&
        structure.contacts?.map((contact, index) => {
          return (
            <div key={index} className="fr-mb-2w">
              {contact.role && (
                <p className="fr-text--lg fr-mb-1w">
                  <strong>{contact.role}</strong>
                  <button
                    type="button"
                    onClick={() => setShowInfo(contact.role)}
                  >
                    <i
                      className="ri-question-line fr-text--lg"
                      aria-hidden="true"
                    />
                  </button>
                  <br />
                </p>
              )}
              <div className="icon-link">
                <i className="ri-mail-fill" aria-hidden="true" />
                <a
                  rel="noopener noreferrer"
                  title={`Envoyer un email à ${contact.email} - ouvre une nouvelle fenêtre`}
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>
            </div>
          )
        })}
      {structure.website && (
        <div className="fr-mb-2w">
          <div className="icon-link">
            <i className="ri-global-line" aria-hidden="true" />
            <a
              rel="noopener noreferrer"
              target="_blank"
              title={`Site web`}
              href={structure.website}
            >
              {structure.website}
            </a>
          </div>
        </div>
      )}
      <p className="fr-text--sm fr-mb-2w">{structure.comment}</p>
      {showInfo && (
        <div className="search-contact__info fr-p-3w">
          <section className="search-contact__info__top fr-pb-2w">
            <strong>{showInfo}</strong>
            <button
              type="button"
              onClick={() => setShowInfo(false)}
              aria-label="Fermer"
            >
              <i className="ri-close-circle-line fr-text--md" />
            </button>
          </section>
          {showInfo === "DARP" && <DarpInfo />}
          {showInfo === "OPCO" && <OpcoInfo />}
          {showInfo === "At Pro" && <AtProInfo />}
        </div>
      )}
    </div>
  )
}

const ContactSearchPanel = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedOpcoType, setSelectedOpcoType] = useState("")

  const [opcos, setOpcos] = useState([])
  const [ddets, setDdets] = useState([])
  const [atPros, setAtPros] = useState([])

  const opcoOptions = [EMPTY_SELECT_OPTION].concat(opcoTypes)

  const departementOptions = [EMPTY_SELECT_OPTION].concat(departements)

  const search = ({ departement, opcoType }) => {
    let result = []
    let ddets = []
    let opcos = []
    let atPros = []

    if (departement && opcoType) {
      result = (fuse.search(`'${departement}`) || []).map(({ item }) => item)
      ddets = getStructure(result, {
        depFilter: departement,
        structureTypesFilter: ["DDETS", "DDETSPP"],
      })
      opcos = getStructure(result, {
        depFilter: departement,
        opcoTypeFilter: opcoType,
        structureTypesFilter: ["OPCO"],
      })
      atPros = getStructure(result, {
        depFilter: departement,
        structureTypesFilter: ["ATPRO"],
      })
    }
    setDdets(ddets)
    setOpcos(opcos)
    setAtPros(atPros)
  }

  const onDepartmentSelection = (event) => {
    const departement = event.target.value
    setSelectedDepartment(departement)
    search({ departement, opcoType: selectedOpcoType })
  }

  const onOpcoTypeSelection = (event) => {
    const opcoType = event.target.value
    setSelectedOpcoType(opcoType)
    search({ departement: selectedDepartment, opcoType })
  }

  const getContact = (structure, depFilter) => {
    if (["DDETS", "DDETSPP"].includes(structure.structure)) {
      const darp = darps.find((darp) => darp.departement == depFilter)
      if (!darp) {
        return []
      }
      return [
        {
          email: darp.email,
          role: "DARP",
        },
      ]
    }
    return structure.contacts
  }

  const getStructureEmail = (structure) => {
    if (["DDETS", "DDETSPP"].includes(structure.structure)) {
      return null
    }
    return structure.email || structure.email2
  }

  const getStructure = (
    structures,
    { depFilter, structureTypesFilter, opcoTypeFilter }
  ) => {
    const result = structures
      .map((structure) => {
        let website = structure.website
        if (structure.structure === "OPCO" && opcoTypeFilter) {
          const opcoType = opcoTypes.find(
            (opco) => opco.value === structure.opco_type
          )
          website = opcoType.website
        }
        return {
          address: structure.address,
          comment: structure.comment,
          contacts: getContact(structure, depFilter),
          email: getStructureEmail(structure),
          name: structure.name || structure.structure,
          opcoNetwork: structure.opco_network,
          opcoType: structure.opco_type,
          region: structure.region,
          structure: structure.structure,
          website,
        }
      })
      .filter(({ structure, opcoType }) => {
        if (!structureTypesFilter.includes(structure)) {
          return false
        }
        if (opcoTypeFilter) {
          return opcoTypeFilter === opcoType
        }
        return true
      })
    return result
  }

  return (
    <section className="search-contact fr-py-3w">
      <div className="fr-container">
        <h2 className="fr-text--md fr-text--regular">
          Prenez contact avec vos correspondants pour toute information
          supplémentaire.
        </h2>
        <div className="fr-grid-row fr-mb-2w">
          <div className=" fr-col-sm-12 fr-col-lg-5  fr-p-2w">
            <Select
              label="Votre département"
              onChange={onDepartmentSelection}
              selected={selectedDepartment}
              options={departementOptions}
            />
          </div>
          <div className=" fr-col-sm-12 fr-col-lg-5 fr-p-2w">
            <Select
              label="Votre opérateur de compétences"
              onChange={onOpcoTypeSelection}
              selected={selectedOpcoType}
              options={opcoOptions}
            />
          </div>
        </div>
      </div>

      <div className="fr-pt-3w fr-container">
        <ul className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          {ddets.map((structure, index) => (
            <li key={index} className="fr-col-lg-6 fr-col-12">
              <StructureCard key={index} structure={structure} />
            </li>
          ))}
          {opcos.map((structure, index) => (
            <li key={index} className="fr-col-lg-6 fr-col-12">
              <StructureCard key={index} structure={structure} />
            </li>
          ))}
          {atPros.map((structure, index) => (
            <li key={index} className="fr-col-lg-6 fr-col-12">
              <StructureCard key={index} structure={structure} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactSearchPanel
