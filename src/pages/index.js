import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import Collapsible from "react-collapsible"
import Helmet from "react-helmet"

import Color from "../utils/colors"

import styled from "styled-components"

import Layout from "../components/layout"

class HomePrototype extends React.Component {
  render() {
    const recently = this.props.data.recently.edges
    const featured = this.props.data.featured.edges

    return (
      <Layout>
        <Helmet title={"Home"} />
        <Row>
          <Col>
            <h3
              css={{
                borderBottom: "double",
                margin: "0px 0px 6px 0px",
                paddingBottom: "4px",
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
              const { slug } = node.fields

              return (
                <Collapsible
                  easing="ease-in-out"
                  open={false}
                  transitionTime={200}
                  trigger={
                    <div>
                      <Row
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: "0px",
                          }}
                        >
                          {title}
                        </h4>
                        <Row>
                          <h4>
                            {city}, {country}
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>{date}</h4>
                        </Row>
                      </Row>
                    </div>
                  }
                  triggerWhenOpen={
                    <div>
                      <Row
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          borderBottom: "solid",
                          borderBottomWidth: "thin",
                          color: "blue",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: "0px",
                          }}
                        >
                          {title}
                        </h4>
                        <Row>
                          <h4>
                            {city}, {country}
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>{date}</h4>
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
                  <Link
                    to={`/${template}${slug}`}
                    css={{ textDecorationColor: "blue" }}
                  >
                    <h4
                      css={{
                        marginLeft: "0px",
                        marginBottom: "16px",
                        marginTop: "8px",
                        color: "blue",
                      }}
                    >
                      Read More
                    </h4>
                  </Link>
                </Collapsible>
              )
            })}
            <h3
              css={{
                borderBottom: "double",
                margin: "24px 0px 6px 0px",
                paddingBottom: "4px",
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
              const { slug } = node.fields

              return (
                <Collapsible
                  easing="ease-in-out"
                  open={false}
                  transitionTime={200}
                  trigger={
                    <div>
                      <Row
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: "0px",
                          }}
                        >
                          {title}
                        </h4>
                        <Row>
                          <h4>
                            {city}, {country}
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>{date}</h4>
                        </Row>
                      </Row>
                    </div>
                  }
                  triggerWhenOpen={
                    <div>
                      <Row
                        css={{
                          justifyContent: "space-between",
                          cursor: "pointer",
                          borderBottom: "solid",
                          borderBottomWidth: "thin",
                          color: "blue",
                          marginLeft: "0px !important",
                          marginRight: "0px !important",
                        }}
                      >
                        <h4
                          css={{
                            fontSize: "16px",
                            fontWeight: "500",
                            marginLeft: "0px",
                          }}
                        >
                          {title}
                        </h4>
                        <Row>
                          <h4>
                            {city}, {country}
                          </h4>
                          <h4 css={{ paddingRight: "4px" }}>{date}</h4>
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
                  <Link
                    to={`/${template}${slug}`}
                    css={{ textDecorationColor: "blue" }}
                  >
                    <h4
                      css={{
                        marginLeft: "0px",
                        marginBottom: "16px",
                        marginTop: "8px",
                        color: "blue",
                      }}
                    >
                      Read More
                    </h4>
                  </Link>
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
