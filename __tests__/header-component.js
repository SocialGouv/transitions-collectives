import { render } from "@testing-library/react"
import React from "react"

import Header from "@/components/Header"

test("renders deploy link", async () => {
  const { getByText } = render(<Header />)
  const brand = getByText(/Ministère/)
  expect(brand).toBeInTheDocument()
})
