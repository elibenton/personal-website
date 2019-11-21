// Core Libraries
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

// Components
import Nav from "../components/nav-left"
import Layout from "../components/layout"

// Yarn Packages
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"

// Utilities and Ancillary Libraries
import { kebabCase, upperFirst } from "lodash"
import Spacer from "../utils/spacer"
import Tag from "../utils/tag"

const MarginCol = styled(Col)`
  margin-left: 50px;
  @media screen and (max-width: 767px) {
    margin-left: 15px;
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
        locations: allGhostTag(filter: { meta_title: { eq: "Location" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        states: allGhostTag(filter: { meta_title: { eq: "State" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        countries: allGhostTag(filter: { meta_title: { eq: "Country" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        types: allGhostTag(filter: { meta_title: { eq: "Type" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        topics: allGhostTag(filter: { meta_title: { eq: "Topic" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet title={`Topics`} />
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <Nav />
          </Col>
          <MarginCol xs={12} sm={12} md={7} lg={6}>
            <Spacer height={0} xsHeight={30} />
            <div
              css={{
                marginTop: "30px",
                marginLeft: "-6px",
                display: "inline-block",
                lineHeight: "1.3em",
              }}
            >
              {data.countries.group.map(country => (
                <Link
                  to={`/tag/${kebabCase(country.fieldValue)}/`}
                  css={{ textDecoration: "none" }}
                >
                  <Tag color="green">{country.fieldValue}</Tag>
                </Link>
              ))}
              <Spacer height={10} xsHeight={5} />
              {data.types.group.map(type => (
                <Link
                  to={`/tag/${kebabCase(type.fieldValue)}/`}
                  css={{ textDecoration: "none" }}
                >
                  <Tag color="blue">{upperFirst(type.fieldValue)}</Tag>
                </Link>
              ))}
              <Spacer height={10} xsHeight={5} />
              {data.topics.group.map(topic => (
                <Link
                  to={`/tags/${kebabCase(topic.fieldValue)}/`}
                  css={{ textDecoration: "none" }}
                >
                  <Tag color={"red"}>{topic.fieldValue}</Tag>
                </Link>
              ))}
            </div>
          </MarginCol>
        </Row>
        <Spacer height={20} xsHeight={20} />
      </Layout>
    )}
  />
)
