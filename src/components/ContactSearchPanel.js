import { Select } from "@dataesr/react-dsfr"
import Fuse from "fuse.js"
import { uniqBy } from "lodash"
import React, { useState } from "react"

import contacts from "@/lib/data/contacts"
import departements from "@/lib/data/departements"
import opco from "@/lib/data/opco"

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

const ContactCard = ({ contact }) => (
  <div className="card fr-p-3w">
    <p className="fr-text--lg fr-mb-1w">
      <strong>
        {contact.name} {contact.opcoNetwork || ""}
      </strong>
      <br />
    </p>
    <p className="fr-mb-2w">
      <strong>{contact.address}</strong>
    </p>
    {contact.email && (
      <div className="fr-mb-2w">
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
    )}
    {contact.website && (
      <div className="fr-mb-2w">
        <div className="icon-link">
          <i className="ri-global-line" aria-hidden="true" />
          <a
            rel="noopener noreferrer"
            target="_blank"
            title={`Site web`}
            href={contact.website}
          >
            {contact.website}
          </a>
        </div>
      </div>
    )}
    <p className="fr-text--sm fr-mb-2w">{contact.comment}</p>
  </div>
)

const ContactSearchPanel = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedOpcoType, setSelectedOpcoType] = useState("")

  const [opcos, setOpcos] = useState([])
  const [ddets, setDdets] = useState([])
  const [darps, setDarps] = useState([])
  const [atPros, setAtPros] = useState([])

  const opcoOptions = [EMPTY_SELECT_OPTION].concat(opco)

  const departementOptions = [EMPTY_SELECT_OPTION].concat(departements)

  const search = ({ departement, opcoType }) => {
    let result = []
    let ddets = []
    let opcos = []
    let darps = []
    let atPros = []

    if (departement && opcoType) {
      console.log({ departement, opcoType })
      result = (fuse.search(`'${departement}`) || []).map(({ item }) => item)
      console.log({ departement, opcoType, result })
      ddets = getContacts(result, ["DDETS", "DDETSPP"])
      opcos = getContacts(result, ["OPCO"], opcoType)
      darps = getContacts(result, ["DARP"])
      atPros = getContacts(result, ["ATPRO"])
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

  const getContacts = (contacts, structureFilters, opcoTypeFilter) => {
    const ddets = contacts
      .map((contact) => {
        return {
          address: contact.address,
          comment: contact.comment,
          email:
            contact.email ||
            contact.email2 ||
            contact.contact_email ||
            contact.contact2_email,
          name: contact.name || contact.structure,
          opcoNetwork: contact.opco_network,
          opcoType: contact.opco_type,
          region: contact.region,
          structure: contact.structure,
          website: contact.website,
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
    return uniqBy(ddets, "email")
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
          {ddets.map((contact, index) => (
            <li key={index} className="fr-col-lg-6 fr-col-12">
              <ContactCard key={index} contact={contact} />
            </li>
          ))}
          {opcos.map((contact, index) => (
            <li key={index} className="fr-col-lg-6 fr-col-12">
              <ContactCard key={index} contact={contact} />
            </li>
          ))}
          {darps.map((contact, index) => (
            <li key={index} className="fr-col-lg-6 fr-col-12">
              <ContactCard key={index} contact={contact} />
            </li>
          ))}
          {atPros.map((contact, index) => (
            <li key={index} className="fr-col-lg-6 fr-col-12">
              <ContactCard key={index} contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactSearchPanel
