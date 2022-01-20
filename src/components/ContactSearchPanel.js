import { Select } from "@dataesr/react-dsfr"
import Fuse from "fuse.js"
import { uniqBy } from "lodash"
import React, { useState } from "react"

import contacts from "@/lib/data/contacts"
import departements from "@/lib/data/departements"
import opco from "@/lib/data/opco"

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
        {contact.name} {contact.network || ""}
      </strong>
    </p>
    <p className="fr-mb-2w">
      <strong>{contact.address}</strong>
    </p>
    <div className="fr-mb-2w">
      <a
        rel="noopener noreferrer"
        target="_blank"
        title={`Envoyer un email à ${contact.email} - ouvre une nouvelle fenêtre`}
        href={`mailto:${contact.email}`}
      >
        {contact.email}
      </a>
    </div>
  </div>
)

const ContactSearchPanel = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedOpcoType, setSelectedOpcoType] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [opcos, setOpcos] = useState([])
  const [ddets, setDdets] = useState([])

  const opcoOptions = [{ label: "Sélectionnez une option", value: "" }].concat(
    opco
  )

  const departementOptions = [
    { label: "Sélectionnez une option", value: "" },
  ].concat(departements)

  const onDepartmentSelection = (event) => {
    const departement = event.target.value
    let result = []
    let ddets = []
    let opcos = []
    if (departement) {
      result = (fuse.search(`'${departement}`) || []).map(({ item }) => item)
      ddets = getDdets(result)
    }
    if (selectedOpcoType) {
      opcos = getOpcos(result, selectedOpcoType)
    }
    setOpcos(opcos)
    setSelectedDepartment(departement)
    setSearchResult(result)
    setDdets(ddets)
  }

  const onOpcoTypeSelection = (event) => {
    const opcoType = event.target.value
    setSelectedOpcoType(opcoType)
    let opcos = []
    if (opcoType) {
      opcos = getOpcos(searchResult, opcoType)
    }
    setOpcos(opcos)
  }

  const getEmail = ({ email, contact_email }) => {
    return email ? email : contact_email
  }

  const getDdets = (contacts) => {
    const ddets = contacts
      .map((contact) => {
        return {
          address: contact.address,
          email: getEmail(contact),
          name: contact.name,
          region: contact.region,
          structure: contact.structure,
        }
      })
      .filter(({ structure }) => ["DDETS", "DDETSPP"].includes(structure))
    return uniqBy(ddets, "email")
  }

  const getOpcos = (contacts, opcoType) => {
    const ddets = contacts
      .map((contact) => {
        return {
          address: contact.address,
          email: getEmail(contact),
          name: contact.name,
          network: contact.network,
          region: contact.region,
          structure: contact.structure,
        }
      })
      .filter(
        ({ structure, name }) =>
          ["OPCO"].includes(structure) && opcoType === name
      )
    return uniqBy(ddets, "email")
  }

  return (
    <section className="search-contacts fr-py-3w background-grey">
      <div className="fr-container">
        <h2 className="fr-text--md fr-text--regular">
          Sélectionnez votre département et prenez contact avec vos
          correspondants pour toute information supplémentaire.
        </h2>
        <div className="fr-col-lg-4 fr-col-sm-12 fr-mb-5w">
          <Select
            onChange={onDepartmentSelection}
            selected={selectedDepartment}
            options={departementOptions}
          />
        </div>

        {ddets && (
          <ul className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
            {ddets.map((contact, index) => (
              <li key={index} className="fr-col-lg-6 fr-col-12">
                <ContactCard key={index} contact={contact} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedDepartment && (
        <div className="fr-pt-3w fr-container">
          <h2 className="fr-text--md fr-text--regular">
            Sélectionnez votre opérateur de compétences
          </h2>
          <div className="fr-col-lg-4 fr-col-sm-12 fr-mb-5w">
            <Select
              onChange={onOpcoTypeSelection}
              selected={selectedOpcoType}
              options={opcoOptions}
            />
          </div>
          {opcos && (
            <ul className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
              {opcos.map((contact, index) => (
                <li key={index} className="fr-col-lg-6 fr-col-12">
                  <ContactCard key={index} contact={contact} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  )
}

export default ContactSearchPanel
