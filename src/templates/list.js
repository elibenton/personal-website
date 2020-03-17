// Core Libraries
import React from "react"
import { Link, graphql } from "gatsby"

// Yarn Packages
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"
import styled from "styled-components"

// Components
import Layout from "../components/layout"
import Nav from "../components/nav-left"
import Footer from "../components/footer"

// Utilities and Ancillary Libraries
import { kebabCase, startCase } from "lodash"
import Spacer from "../utils/spacer"

const Padding = styled.div`
  padding-left: 35px;
  padding-right: 25px;
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`
const MobileRowOuter = styled(Row)`
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
  justify-content: space-between;
  cursor: pointer;
  margin-left: 0px !important;
  margin-right: 0px !important;
  @media screen and (max-width: 767px) {
    flex-direction: column !important;
    margin-left: 8px !important;
    margin-right: 8px !important;
  }
`
const MobileRowInner = styled(Row)`
  display: flex;
  flex-direction: row;
  margin-left: -4px !important;

  @media screen and (max-width: 767px) {
    font-style: italic;
    margin: 0px 0px 8px -4px !important;
    flex-direction: row-reverse !important;
    justify-content: flex-end;
  }
`
const MobileTitle = styled.h4`
  letter-spacing: 0.8px;
  font-weight: 500;
  margin: 0;
`
const MobileContainer = styled.h4`
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 95%;
    margin-left: 8px;
    /* margin-right: 24px; */
  }
`
const BetterLink = styled(Link)`
  text-decoration: none;
  @media screen and (max-width: 767px) {
    :hover,
    :active {
      color: black;
    }
  }
`
const MarginCol = styled(Col)`
  margin-left: 50px;
  @media screen and (max-width: 767px) {
    margin-left: 0;
  }
`
const StyledCol = styled(Col)`
  position: sticky;
  top: 0;
  align-self: flex-start;
  @media screen and (max-width: 767px) {
    position: relative;
  }
`

const IndexFiltered = ({ pageContext, data }) => {
  const { name } = pageContext
  const posts = data.filtered.edges
  return (
    <Layout>
      <Padding>
        <Helmet title={`${startCase(name)}`} />
        <Row>
          <StyledCol xs={12} sm={12} md={4} lg={3}>
            <Spacer height={50} xsHeight={0} />
            <Nav />
          </StyledCol>
          <MarginCol xs={12} sm={12} md={7} lg={8}>
            <Spacer height={50} xsHeight={0} />
            {/* <MobileHeader>{startCase(name)}</MobileHeader> */}

            {posts.map(({ node }) => {
              const { title, published_at, updated_at, excerpt, slug, tags } = node

              const [types = {}] = tags.filter(tag => tag.name.includes("Type: "))
              const [months = {}] = tags.filter(tag => tag.name.includes("Month: "))
              const [cities = {}] = tags.filter(tag => tag.name.includes("City: "))
              const [states = {}] = tags.filter(tag => tag.name.includes("State: "))
              const [countries = {}] = tags.filter(tag => tag.name.includes("Country"))
              const topics = tags.filter(tag => tag.name.includes("Topic: "))
              const regions =
                states.name === undefined
                  ? countries.name.split(": ")[1]
                  : states.name.split(": ")[1]

              // console.log(types.name)

              return (
                <div>
                  <MobileRowOuter
                    css={{
                      justifyContent: "space-between",
                      cursor: "pointer",
                      borderBottom: "dotted",
                      borderBottomWidth: "2px",
                      borderBottomColor: "#ffd666",
                    }}
                  >
                    <BetterLink to={`post/${slug}`}>
                      <MobileTitle
                        css={{
                          fontSize: "16px",
                          marginLeft: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        {title}
                      </MobileTitle>
                    </BetterLink>
                    <MobileRowInner>
                      <h5>
                        <BetterLink to={`/tag/${kebabCase(regions)}/`}>
                          {cities.name.split(": ")[1]}, {countries.name.split(": ")[1]}
                        </BetterLink>
                      </h5>
                      <h5>&middot;</h5>
                      <h5 css={{ paddingRight: "4px" }}>
                        <BetterLink to={`/tag/${kebabCase(months.name.split(": ")[1])}/`}>
                          {published_at}
                        </BetterLink>
                      </h5>
                    </MobileRowInner>
                  </MobileRowOuter>
                  <MobileContainer
                    css={{
                      marginLeft: "0px",
                      fontSize: "15px",
                    }}
                  >
                    {excerpt}
                  </MobileContainer>
                  <Spacer height={30} xsHeight={30} />
                </div>
              )
            })}
          </MarginCol>
        </Row>
        <Spacer height={40} xsHeight={40} />
        <Footer />
      </Padding>
    </Layout>
  )
}

export default IndexFiltered

export const pageQuery = graphql`
  query($filter: GhostPostFilterInput) {
    filtered: allGhostPost(sort: { order: DESC, fields: published_at }, filter: $filter) {
      edges {
        node {
          excerpt
          title
          id
          slug
          updated_at(formatString: "MM-DD-YYYY")
          published_at(formatString: "MM-DD-YYYY")
          tags {
            name
          }
        }
      }
    }
  }
`
