import React from "react"

import EmployeeFaqApresFormation from "./EmployeeFaqApresFormation"
import EmployeeFaqAvantFormation from "./EmployeeFaqAvantFormation"
import EmployeeFaqContact from "./EmployeeFaqContact"
import EmployeeFaqPendantFormation from "./EmployeeFaqPendantFormation"

const EmployeeFaq = () => {
  return (
    <div className="fr-container faq">
      <h2 className="fr-pt-4w">FAQ</h2>
      <div className="fr-py-2w">
        <EmployeeFaqAvantFormation />
      </div>
      <div className="fr-py-2w">
        <EmployeeFaqPendantFormation />
      </div>
      <div className="fr-py-2w">
        <EmployeeFaqApresFormation />
      </div>
      <div className="fr-py-2w">
        <EmployeeFaqContact />
      </div>
    </div>
  )
}

export default EmployeeFaq
