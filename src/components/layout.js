import React from "react"
import "./layout.css"
import Helmet from "react-helmet"
import SEO from "../components/seo"

export default ({ children }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/pls6imv.css " />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather&display=swap"
        rel="stylesheet"
      ></link>
      <meta
        name="Eli Benton Cohen"
        content="Traveling the world to understand the politics of digitally networked life"
      />
    </Helmet>
    <SEO />
    {children}
  </div>
)
