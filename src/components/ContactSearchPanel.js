import { Select } from "@dataesr/react-dsfr"
import Fuse from "fuse.js"
import React, { useState } from "react"

import contacts from "../data/contacts"
import departements from "../data/departements"

const options = {
  keys: ["departement"],
  threshold: 0.0,
}

const fuse = new Fuse(contacts, options)

const ContactSearchPanel = () => {
  const [selected, setSelected] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const departementOptions = [
    { label: "Sélectionnez une option", value: "" },
  ].concat(departements)

  const onSearch = (event) => {
    const departement = event.target.value
    let result = []
    if (departement) {
      result = fuse.search(departement)
    }
    setSelected(departement)
    setSearchResult(result.map(({ item }) => item))
  }

  const getName = ({ structure, name }) => {
    return structure === "OPCO" ? `${structure} ${name}` : name
  }

  const getEmail = ({ email, contact_email }) => {
    return email ? email : contact_email
  }

  return (
    <section className="search-contacts fr-py-3w background-grey">
      <div className="fr-container">
        <h2 className="fr-text--md fr-text--regular">
          Sélectionnez un département pour afficher les contacts
        </h2>
        <div className="fr-col-lg-4 fr-col-sm-12 fr-mb-5w">
          <Select
            onChange={onSearch}
            selected={selected}
            options={departementOptions}
          />
        </div>

        {searchResult && (
          <ul className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
            {searchResult.map((contact, index) => (
              <li key={index} className="fr-col-lg-6 fr-col-12">
                <div className="card fr-p-3w">
                  <p className="fr-text--lg fr-mb-1w">
                    <strong>{getName(contact)}</strong>
                  </p>
                  <p className="fr-mb-2w">
                    <strong>{contact.address}</strong>
                  </p>
                  <div className="fr-mb-2w">
                    <a
                      className="Linkstyled-sc-z214if-0 eWKksw email"
                      rel="noopener noreferrer"
                      target="_blank"
                      title={`Envoyer un email à ${getEmail(
                        contact
                      )} - ouvre une nouvelle fenêtre`}
                      href={`mailto:${getEmail(contact)}`}
                    >
                      {getEmail(contact)}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default ContactSearchPanel
