// Core Libraries
import React from "react"

// Base Stylesheet
import "./layout.css"

// Yarn Packages
import Helmet from "react-helmet"

// Components
import SEO from "../components/seo"

export default ({ children }) => (
  <div>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://use.typekit.net/pls6imv.css " />
      <meta
        name="Colander World"
        content="Traveling the world to understand the politics of digitally networked life"
      />
    </Helmet>
    <SEO />
    {children}
  </div>
)
