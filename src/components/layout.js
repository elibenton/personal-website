import React from "react"
import { graphql } from "gatsby"
import "./layout.css"
import styled from "styled-components"
import Helmet from "react-helmet"
import Nav from "./nav-left"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import SEO from "../components/seo"

export const TagText = styled.p`
  color: #999;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1em;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
  display: inline;
  :hover,
  :active {
    color: #ffd666;
  }
`

export const TemplateText = styled.p`
  color: #999;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 1em;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
  display: inline;
  :hover,
  :active {
    color: #ffd666;
  }
`

const Divider = styled(Col)`
  z-index: 100;
`
const CustomRow = styled(Row)`
  margin: 0 0 0 0 !important;
`

export default ({ children }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/pls6imv.css " />
      <meta
        name="Eli Benton Cohen"
        content="Traveling the world to understand the politics of digitally networked life"
      />
    </Helmet>
    <SEO />
    {children}
  </div>
)
