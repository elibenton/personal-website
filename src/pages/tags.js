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
            description
          }
        }
        city: allGhostTag(filter: { name: { regex: "/City: /" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        countryOrState: allGhostTag(filter: { name: { regex: "/Country: |State: /" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        countries: allGhostTag(filter: { name: { regex: "/Country: /" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        types: allGhostTag(filter: { name: { regex: "/Type: /" } }) {
          totalCount
          group(field: name) {
            fieldValue
          }
        }
        topics: allGhostTag(filter: { name: { regex: "/Topic: /" } }) {
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
              {data.types.group.map(type => (
                <Link
                  to={`/tag/${kebabCase(type.fieldValue.split(": ")[1])}/`}
                  css={{ textDecoration: "none" }}
                >
                  <Tag color="blue">{upperFirst(type.fieldValue.split(": ")[1])}</Tag>
                </Link>
              ))}
              <Spacer height={10} xsHeight={5} />
              {data.countryOrState.group.map(region => (
                <Link
                  to={`/tag/${kebabCase(region.fieldValue.split(": ")[1])}/`}
                  css={{ textDecoration: "none" }}
                >
                  <Tag color="green">{region.fieldValue.split(": ")[1]}</Tag>
                </Link>
              ))}
              <Spacer height={10} xsHeight={5} />
              {data.topics.group.map(topic => (
                <Link
                  to={`/tag/${kebabCase(topic.fieldValue.split(": ")[1])}/`}
                  css={{ textDecoration: "none" }}
                >
                  <Tag color={"red"}>{topic.fieldValue.split(": ")[1]}</Tag>
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
