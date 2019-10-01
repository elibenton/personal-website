import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import Collapsible from "react-collapsible"
import Helmet from "react-helmet"
import moment from "moment"
import kebabCase from "lodash/kebabCase"
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
const MobileRowOuter = styled(Row)`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    flex-direction: column !important;
    margin-left: 4px !important;
  }
`
const MobileRowInner = styled(Row)`
  display: flex;
  flex-direction: row;
  margin-left: 0px !important;
  margin-right: -8px !important;
  @media screen and (max-width: 767px) {
    font-style: italic;
    margin: 0px 0px 8px -4px !important;
    flex-direction: row-reverse !important;
    justify-content: flex-end;
  }
`
const MobileTitle = styled.h4`
  letter-spacing: 0.7px;
  :hover,
  :active {
    color: #ffd666;
  }
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

const MobileContainer = styled.h4`
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 98%;
  }
`

const MobileHeader = styled.h3`
  margin: 0px 0px 6px 0px;
  padding-bottom: 4px;
  font-weight: 500;
  border-bottom: double;
  @media screen and (max-width: 767px) {
    margin: 0px -8px 6px -8px;
    padding-left: 12px;
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
      <Helmet title={`${name} | Eli Benton Cohen`} />
      <Row css={{ marginTop: "6em" }}>
        <Col>
          <MobileHeader>{name}</MobileHeader>
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
                    <MobileRowOuter
                      css={{
                        justifyContent: "space-between",
                        cursor: "pointer",
                        marginLeft: "0px !important",
                        marginRight: "0px !important",
                      }}
                    >
                      <MobileTitle
                        css={{
                          fontSize: "15px",
                          fontWeight: "500",
                          marginLeft: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        {title}
                      </MobileTitle>
                      <MobileRowInner>
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
                      <MobileTitle
                        css={{
                          fontSize: "15px",
                          fontWeight: "500",
                          marginLeft: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        {title}
                      </MobileTitle>
                      <MobileRowInner>
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
