// core libraries
import React from "react"
import { Link, graphql } from "gatsby"

// yarn packages
import { Row, Col } from "react-flexbox-grid"
import Collapsible from "react-collapsible"
import Helmet from "react-helmet"
import styled from "styled-components"

// components and utils
import Layout from "../components/layout"
import Spacer from "../utils/spacer"
import Nav from "../components/nav-left"
import Footer from "../components/footer"

// ancillary libraries
import moment from "moment"
import kebabCase from "lodash/kebabCase"

const Button = styled.h4`
  margin: 16px 0 30px 0;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* font-style: italic; */
  :hover,
  :active {
    color: #ffd666;
  }
  @media screen and (max-width: 767px) {
    /* padding-left: 12px; */
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
    /* margin-left: 12px !important; */
  }
`
const MobileRowInner = styled(Row)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    font-style: italic;
    margin: 0px 0px 8px -4px !important;
    flex-direction: row-reverse !important;
    justify-content: flex-end;
  }
`
const MobileTitle = styled.h4`
  letter-spacing: 0.7px;
  font-weight: 500;
  :hover,
  :active {
    color: #ffd666;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
    :hover,
    :active {
      color: black;
    }
  }
`

const MobileContainer = styled.h4`
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 100%;
    /* margin-left: 8px !important; */
    /* padding-left: 4px; */
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
const Divider = styled(Col)`
  z-index: 100;
  @media screen and (max-width: 767px) {
    position: sticky;
    top: 0px;
  }
`
const CustomRow = styled(Row)`
  margin: 0 0 0 0 !important;
`

const CustomCol = styled(Col)`
  margin-left: 30px !important;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    padding: 0 !important;
  }
`

class HomePrototype extends React.Component {
  render() {
    const recently = this.props.data.recently.edges
    const everything = this.props.data.everything.edges
    const ghost = this.props.data.ghost.edges
    console.log(ghost)

    return (
      <Layout>
        <Helmet title={"Blog"} />
        <Spacer height={60} xsHeight={0} />
        <CustomRow>
          <Divider xs={12} sm={12} md={4} lg={3}>
            <Nav />
          </Divider>
          <CustomCol
            xsOffset={1}
            xs={10}
            smOffset={1}
            sm={10}
            mdOffset={0}
            md={7}
            lgOffset={0}
            lg={8}
          >
            <Spacer height={0} xsHeight={15} />
            {/* {ghost.map} */}
            {recently.map(({ node }) => {
              const {
                title,
                date,
                city,
                country,
                description,
                template,
              } = node.frontmatter
              const { slug, month } = node.fields

              return (
                <Collapsible
                  easing="ease-in-out"
                  open={true}
                  transitionTime={200}
                  trigger={
                    <div>
                      <MobileRowOuter>
                        <MobileTitle
                          css={{
                            fontSize: "15px",
                            marginLeft: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          {title}
                        </MobileTitle>
                        <MobileRowInner>
                          <h5>
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h5>
                          <h5>&middot;</h5>
                          <h5 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h5>
                        </MobileRowInner>
                      </MobileRowOuter>
                    </div>
                  }
                  triggerWhenOpen={
                    <div>
                      <MobileRowOuter
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          borderBottom: "dotted",
                          borderBottomWidth: "2px",
                          borderBottomColor: "#ffd666",
                          // marginLeft: "0px !important",
                          // marginRight: "0px !important",
                        }}
                      >
                        <MobileTitle
                          css={{
                            fontSize: "15px",
                            // fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          {title}
                        </MobileTitle>
                        <MobileRowInner>
                          <h5>
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h5>
                          <h5>&middot;</h5>
                          <h5 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h5>
                        </MobileRowInner>
                      </MobileRowOuter>
                    </div>
                  }
                >
                  <MobileContainer
                    css={{
                      marginLeft: "0px",
                      fontSize: "15px",
                    }}
                  >
                    {description}
                  </MobileContainer>
                  <BetterLink
                    to={`/${template}${slug}`}
                    css={{ textDecoration: "none" }}
                  >
                    <Button>Read More&nbsp;➤</Button>
                  </BetterLink>
                </Collapsible>
              )
            })}
            {/* <MobileHeader css={{ marginTop: "24px !important" }}>
              Everything
            </MobileHeader> */}
            {everything.map(({ node }) => {
              const {
                title,
                date,
                city,
                country,
                description,
                template,
              } = node.frontmatter
              const { slug, month } = node.fields

              return (
                <Collapsible
                  easing="ease-in-out"
                  open={false}
                  transitionTime={200}
                  trigger={
                    <div>
                      <MobileRowOuter>
                        <MobileTitle
                          css={{
                            fontSize: "15px",
                            marginLeft: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          {title}
                        </MobileTitle>
                        <MobileRowInner>
                          <h5>
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h5>
                          <h5>&middot;</h5>
                          <h5 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h5>
                        </MobileRowInner>
                      </MobileRowOuter>
                    </div>
                  }
                  triggerWhenOpen={
                    <div>
                      <MobileRowOuter
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          borderBottom: "dotted",
                          borderBottomWidth: "2px",
                          borderBottomColor: "#ffd666",
                          // marginLeft: "0px !important",
                          // marginRight: "0px !important",
                        }}
                      >
                        <MobileTitle
                          css={{
                            fontSize: "15px",
                            // fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          {title}
                        </MobileTitle>
                        <MobileRowInner>
                          <h5>
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h5>
                          <h5>&middot;</h5>
                          <h5 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h5>
                        </MobileRowInner>
                      </MobileRowOuter>
                    </div>
                  }
                >
                  <MobileContainer
                    css={{
                      marginLeft: "0px",
                      fontSize: "15px",
                    }}
                  >
                    {description}
                  </MobileContainer>
                  <BetterLink
                    to={`/${template}${slug}`}
                    css={{ textDecoration: "none" }}
                  >
                    <Button>Read More&nbsp;➤</Button>
                  </BetterLink>
                </Collapsible>
              )
            })}
          </CustomCol>
        </CustomRow>
        <Spacer height={100} xsHeight={40} />
        <Footer />
      </Layout>
    )
  }
}

export default HomePrototype

export const pageQuery = graphql`
  query {
    everything: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { ne: "reading" } } }
      skip: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            city
            country
            date(formatString: "MM-DD-YYYY")
            description
            tags
            template
          }
          fields {
            slug
            month
          }
        }
      }
    }
    recently: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { ne: "reading" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            city
            country
            date(formatString: "MM-DD-YYYY")
            description
            tags
            template
          }
          fields {
            slug
            month
          }
        }
      }
    }
    ghost: allGhostPost(sort: { order: ASC, fields: published_at }) {
      edges {
        node {
          slug
          url
          id
        }
      }
    }
  }
`
