import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import Collapsible from "react-collapsible"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import styled from "styled-components"
import moment from "moment"
import kebabCase from "lodash/kebabCase"

const Button = styled.h4`
  margin: 12px 0 30px 0;
  font-weight: 600;
  font-size: 15px;
  :hover,
  :active {
    color: #ffd666;
  }
`
const MobileRowOuter = styled(Row)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    flex-direction: column !important;
  }
`
const MobileRowInner = styled(Row)`
  display: flex;
  flex-direction: row;
  margin-left: 0px !important;
  margin-right: -8px !important;
  @media screen and (max-width: 767px) {
    margin: 0px 0px 8px -4px !important;
    flex-direction: row-reverse !important;
    justify-content: flex-end;
  }
`

const BetterLink = styled(Link)`
  text-decoration: none;
`

class HomePrototype extends React.Component {
  render() {
    const recently = this.props.data.recently.edges
    const featured = this.props.data.featured.edges

    return (
      <Layout>
        <Helmet title={"Home | Eli Benton Cohen"} />
        <Row css={{ marginTop: "6em" }}>
          <Col>
            <h3
              css={{
                borderBottom: "double",
                margin: "0px 0px 6px 0px",
                paddingBottom: "4px",
                fontWeight: "500",
              }}
            >
              featured
            </h3>
            {featured.map(({ node }) => {
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
                      <MobileRowOuter
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "15px",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          <BetterLink>{title}</BetterLink>
                        </h4>
                        <MobileRowInner>
                          <h4>
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h4>
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
                          borderBottom: "dashed",
                          borderBottomWidth: "2px",
                          borderBottomColor: "#ffd666",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "15px",
                            fontWeight: "500",
                            marginLeft: "0px",
                          }}
                        >
                          {title}
                        </h4>
                        <MobileRowInner>
                          <h4
                            css={{
                              padding: "0px 0px 10px 4px !important",
                            }}
                          >
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h4>
                        </MobileRowInner>
                      </MobileRowOuter>
                    </div>
                  }
                >
                  <h4
                    css={{
                      width: "70%",
                      marginLeft: "0px",
                      fontSize: "15px",
                    }}
                  >
                    {description}
                  </h4>
                  <BetterLink
                    to={`/${template}${slug}`}
                    css={{ textDecoration: "none" }}
                  >
                    <Button>Read More&nbsp;&nbsp;➔</Button>
                  </BetterLink>
                </Collapsible>
              )
            })}
            <h3
              css={{
                borderBottom: "double",
                margin: "24px 0px 6px 0px",
                paddingBottom: "4px",
                fontWeight: "500",
              }}
            >
              recently
            </h3>
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
                  open={false}
                  transitionTime={200}
                  trigger={
                    <div>
                      <MobileRowOuter
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "15px",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "0px",
                          }}
                        >
                          <BetterLink>{title}</BetterLink>
                        </h4>
                        <MobileRowInner>
                          <h4>
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h4>
                        </MobileRowInner>
                      </MobileRowOuter>
                    </div>
                  }
                  triggerWhenOpen={
                    <div>
                      <Row
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          borderBottom: "dashed",
                          borderBottomWidth: "2px",
                          borderBottomColor: "#ffd666",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "15px",
                            fontWeight: "500",
                            marginLeft: "0px",
                          }}
                        >
                          {title}
                        </h4>
                        <Row>
                          <h4
                            css={{
                              padding: "0px 0px 10px 4px !important",
                            }}
                          >
                            <BetterLink
                              to={`/countries/${kebabCase(country)}/`}
                            >
                              {city}, {country}
                            </BetterLink>
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>
                            <BetterLink
                              to={`/${moment(month).format("YYYY")}/${moment(
                                month
                              )
                                .format("MMMM")
                                .toLowerCase()}/`}
                            >
                              {date}
                            </BetterLink>
                          </h4>
                        </Row>
                      </Row>
                    </div>
                  }
                >
                  <h4
                    css={{
                      width: "70%",
                      marginLeft: "0px",
                      fontSize: "15px",
                    }}
                  >
                    {description}
                  </h4>
                  <BetterLink
                    to={`/${template}${slug}`}
                    css={{ textDecoration: "none" }}
                  >
                    <Button>Read More&nbsp;&nbsp;➔</Button>
                  </BetterLink>
                </Collapsible>
              )
            })}
          </Col>
        </Row>
        <Spacer height={140} xsHeight={40} />
      </Layout>
    )
  }
}

export default HomePrototype

export const pageQuery = graphql`
  query {
    recently: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
    featured: allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { eq: "Title IX" } } }
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
  }
`
