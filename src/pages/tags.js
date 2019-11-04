import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"
import upperFirst from "lodash/upperFirst"

// Components
import { Helmet } from "react-helmet"
import { Link, StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import Nav from "../components/nav-left"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"

const BetterLink = styled(Link)`
  text-decoration: none;
`

const CustomRow = styled(Row)`
  margin: 0 0 0 0 !important;
`
const Divider = styled(Col)`
  z-index: 100;
  @media screen and (max-width: 767px) {
    position: sticky;
    top: 0px;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(limit: 2000) {
          tags: group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          templates: group(field: frontmatter___template) {
            fieldValue
            totalCount
          }
          countries: group(field: frontmatter___country) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet title={`Topics | ${data.title}`} />
        <Spacer height={20} xsHeight={10} />
        <CustomRow>
          <Divider xs={12} sm={12} md={3} lg={3}>
            <Nav />
          </Divider>
          <Col xs={12} sm={12} md={7} lg={6}>
            <Spacer height={0} xsHeight={10} />
            <div
              css={{
                marginLeft: "-6px",
                display: "inline-block",
                lineHeight: "1.3em",
              }}
            >
              {data.allMdx.countries.map(country => (
                <BetterLink
                  to={`/${kebabCase(country.fieldValue)}/`}
                  css={{ textDecoration: "none" }}
                >
                  <span class="tag-green">
                    {country.fieldValue}: {country.totalCount}
                  </span>
                </BetterLink>
              ))}
              <Spacer height={10} xsHeight={5} />
              {data.allMdx.templates.map(template => (
                <BetterLink
                  to={`/${kebabCase(template.fieldValue)}/`}
                  css={{ textDecoration: "none" }}
                >
                  <span class="tag-blue">
                    {upperFirst(template.fieldValue)}: {template.totalCount}
                  </span>
                </BetterLink>
              ))}
              <Spacer height={10} xsHeight={5} />
              {data.allMdx.tags.map(tag => (
                <BetterLink
                  to={`/${kebabCase(tag.fieldValue)}/`}
                  css={{ textDecoration: "none" }}
                >
                  <span class="tag-red">
                    {tag.fieldValue}: {tag.totalCount}
                  </span>
                </BetterLink>
              ))}
            </div>
          </Col>
        </CustomRow>
        <Spacer height={20} xsHeight={20} />
      </div>
    )}
  />
)
