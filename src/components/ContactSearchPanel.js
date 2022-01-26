import { Select } from "@dataesr/react-dsfr"
import Fuse from "fuse.js"
import React, { useState } from "react"

import contacts from "@/lib/data/contacts"
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

const StructureCard = ({ structure }) => (
  <div className="card fr-p-3w">
    <p className="fr-text--lg fr-mb-1w">
      <strong>
        {structure.name} {structure.opcoNetwork || ""}
      </strong>
      <br />
    </p>
    <p className="fr-mb-2w">
      <strong>{structure.address}</strong>
    </p>
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
  </div>
)

const ContactSearchPanel = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedOpcoType, setSelectedOpcoType] = useState("")

  const [opcos, setOpcos] = useState([])
  const [ddets, setDdets] = useState([])
  const [darps, setDarps] = useState([])
  const [atPros, setAtPros] = useState([])

  const opcoOptions = [EMPTY_SELECT_OPTION].concat(opcoTypes)

  const departementOptions = [EMPTY_SELECT_OPTION].concat(departements)

  const search = ({ departement, opcoType }) => {
    let result = []
    let ddets = []
    let opcos = []
    let darps = []
    let atPros = []

    if (departement && opcoType) {
      result = (fuse.search(`'${departement}`) || []).map(({ item }) => item)
      ddets = getStructure(result, ["DDETS", "DDETSPP"])
      opcos = getStructure(result, ["OPCO"], opcoType)
      darps = getStructure(result, ["DARP"])
      atPros = getStructure(result, ["ATPRO"])
    }
    setDdets(ddets)
    setOpcos(opcos)
    setDarps(darps)
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

  const getStructure = (structures, structureFilters, opcoTypeFilter) => {
    const result = structures
      .map((structure) => {
        let website = structure.website
        if (structure.structure === "OPCO" && selectedOpcoType) {
          const opcoType = opcoTypes.find(
            (opco) => opco.opcoType === structure.opcoType
          )
          website = opcoType.website
        }
        return {
          address: structure.address,
          comment: structure.comment,
          contacts: structure.contacts,
          email: structure.email || structure.email2,
          name: structure.name || structure.structure,
          opcoNetwork: structure.opco_network,
          opcoType: structure.opco_type,
          region: structure.region,
          structure: structure.structure,
          website,
        }
      })
      .filter(({ structure, opcoType }) => {
        if (!structureFilters.includes(structure)) {
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
    <section className="search-contacts fr-py-3w background-grey">
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
          {darps.map((structure, index) => (
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
