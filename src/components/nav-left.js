// Core Libraries
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

// Static Content
import logo from "../../content/images/logo.gif"

// Yarn Packages
import styled from "styled-components"

// Utilities and Ancillary Libraries
import Spacer from "../utils/spacer"
import Tag from "../utils/tag"
import { kebabCase, upperFirst } from "lodash"

const Name = styled.h1`
  display: flex;
  text-transform: none;
  text-align: left;
  font-weight: 600;
  font-size: 38px;
  margin-top: 0;
  margin-bottom: 4px;
  margin-left: 10px;
  line-height: 1.1em;
`
const ReverseHide = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: inline;
  }
`
const Hide = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Col = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
const Row = styled.div`
  display: flex;
  margin-left: -4px;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin: 12px;
    flex-direction: row;
  }
`
const InnerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -4px;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`

const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    /* border-bottom: 1px black solid; */
    margin-bottom: 24px;
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
      <Wrapper>
        <Row>
          <Col>
            <InnerRow>
              <Link css={{ textDecoration: "none" }} to="/">
                <img css={{ marginRight: "10px" }} src={logo} alt="Logo" width="70" height="90" />
              </Link>
              <Name css={{ fontFamily: "ibm-plex-mono, Courier, monospace" }}>
                {data.site.siteMetadata.title}
              </Name>
            </InnerRow>
            <Spacer xsHeight={0} height={20} />
            {/* <h2>{data.site.siteMetadata.description}</h2> */}
          </Col>
        </Row>
        <Spacer xsHeight={0} height={30} />
        <Row>
          <Link to="/about" css={{ textDecoration: "none", textTransform: "uppercase" }}>
            <h4>about</h4>
          </Link>
          &nbsp;/&nbsp;
          <a
            href="https://www.notion.so/elibentoncohen/911170cb13cb42b291e4801d553a71bc?v=7fa7960e9a5147168060fd09e7b0ae2a"
            css={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            <h4>reading</h4>
          </a>
          &nbsp;/&nbsp;
          <a
            href="https://join.colanderworld.com/newsletter"
            css={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            <h4>subscribe</h4>
          </a>
          <ReverseHide>&nbsp;/&nbsp;</ReverseHide>
          <ReverseHide>
            <Link to={`/tags`} css={{ textDecoration: "none", textTransform: "uppercase" }}>
              <h4>tags</h4>
            </Link>
          </ReverseHide>
        </Row>
        <Hide>
          <div
            css={{
              marginTop: "30px",
              marginLeft: "-6px",
              display: "inline-block",
              lineHeight: "1.3em",
            }}
          >
            {/* <Rotate>Types</Rotate> */}
            {data.types.group.map(type => (
              <Link
                to={`/tag/${kebabCase(type.fieldValue.split(": ")[1])}/`}
                css={{ textDecoration: "none" }}
              >
                <Tag color="blue">{upperFirst(type.fieldValue.split(": ")[1])}</Tag>
              </Link>
            ))}
            <Spacer height={10} xsHeight={5} />
            {/* <Rotate>Places</Rotate> */}

            {data.countryOrState.group.map(region => (
              <Link
                to={`/tag/${kebabCase(region.fieldValue.split(": ")[1])}/`}
                css={{ textDecoration: "none" }}
              >
                <Tag color="green">{region.fieldValue.split(": ")[1]}</Tag>
              </Link>
            ))}
            <Spacer height={10} xsHeight={5} />
            {/* <Rotate>Topics</Rotate> */}

            {data.topics.group.map(topic => (
              <Link
                to={`/tag/${kebabCase(topic.fieldValue.split(": ")[1])}/`}
                css={{ textDecoration: "none" }}
              >
                <Tag color={"red"}>{topic.fieldValue.split(": ")[1]}</Tag>
              </Link>
            ))}
          </div>
        </Hide>
      </Wrapper>
    )}
  />
)
