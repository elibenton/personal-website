import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import Collapsible from "react-collapsible"
import Helmet from "react-helmet"

import moment from "moment"
import kebabCase from "lodash/kebabCase"
import Color from "../utils/colors"

import styled from "styled-components"

import Layout from "../components/layout"

const Button = styled.h4`
  margin: 12px 0 30px 0;
  font-weight: 600;
  font-size: 15px;
  :hover,
  :active {
    color: #ffd666;
  }
`
const BetterLink = styled(Link)`
  text-decoration: none;
`

const HomePrototype = ({ pageContext, data }) => {
  const { name } = pageContext
  const filtered = data.filtered.edges
  console.log(filtered)

  return (
    <Layout>
      <Helmet title={"Home"} />
      <Row css={{ marginTop: "3em" }}>
        <Col>
          <h3
            css={{
              borderBottom: "double",
              margin: "0px 0px 6px 0px",
              paddingBottom: "4px",
            }}
          >
            {name}
          </h3>
          {filtered.map(({ node }) => {
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
                          fontSize: "15px",
                          fontWeight: "500",
                          marginLeft: "0px",
                        }}
                      >
                        {title}
                      </h4>
                      <Row>
                        <h4>
                          <BetterLink to={`/countries/${kebabCase(country)}/`}>
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
                        <h4>
                          <BetterLink to={`/countries/${kebabCase(country)}/`}>
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

export default HomePrototype

export const pageQuery = graphql`
  query($filter: MdxFilterInput) {
    filtered: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: $filter
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
