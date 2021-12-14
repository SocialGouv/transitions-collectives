import React from "react"

import EmployeeFaqApresFormation from "./EmployeeFaqApresFormation"
import EmployeeFaqAvantFormation from "../EmployeeFaqAvantFormation"
import EmployeeFaqContact from "../EmployeeFaqContact"
import EmployeeFaqPendantFormation from "./EmployeeFaqPendantFormation"

const EmployeeFaq = () => {
  return (
    <div className="fr-container employee-faq">
      <div className="fr-py-4w">
        <EmployeeFaqAvantFormation />
      </div>
      <div className="fr-py-4w">
        <EmployeeFaqPendantFormation />
      </div>
      <div className="fr-py-4w">
        <EmployeeFaqApresFormation />
      </div>
      <div className="fr-py-4w">
        <EmployeeFaqContact />
      </div>
    </div>
  )
}

export default EmployeeFaq
