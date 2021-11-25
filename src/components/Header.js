import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <div className="header">
      <div className="marianne" />
      <h1>
        <Link href="/" as="/">
          <a>Stand up</a>
        </Link>
        <small className="description">
          Le stand up de <a href="https://github.com/socialgouv">@SocialGouv</a>
        </small>
      </h1>
    </div>
  )
}

export default Header
