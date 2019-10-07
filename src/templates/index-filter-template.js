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
import { kebabCase, upperFirst } from "lodash"

const Button = styled.h4`
  margin: 12px 0 30px 0;
  font-weight: 600;
  font-size: 15px;
  :hover,
  :active {
    color: #ffd666;
  }
  @media screen and (max-width: 767px) {
    padding-left: 12px;
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
    margin-left: 12px !important;
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
    width: 90%;
    margin-left: 8px !important;
    padding-left: 4px;
  }
`

const MobileHeader = styled.h3`
  margin: 0px 0px 6px 0px;
  padding-bottom: 4px;
  font-weight: 500;
  border-bottom: double;
  @media screen and (max-width: 767px) {
    padding-left: 12px;
    margin-right: -8px;
    margin-top: 24px;
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
  margin-left: 50px;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    padding: 0 !important;
  }
`
const TagCount = styled.h1`
  font-size: 120px;
  margin: 90px 60px 55px 0;
  text-shadow: 2px 4px #ffd666;
  @media screen and (max-width: 767px) {
    font-size: 50px;
    line-height: 54px;
    margin: 10px 0px 10px 20px;
  }
`
const SubTitle = styled.h2`
  font-size: 28px;
  line-height: 26px;
  margin: 5px 5px 0px 0;
  font-style: italic;
  text-decoration-color: #ffd666;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 18px;
    margin: 2px 2px 0px 30px;
  }
`
const TagHeader = styled.p`
  font-size: 23px;
  line-height: 28px;
  margin-top: 12px;
  width: 100%;
  @media screen and (max-width: 767px) {
    margin-left: 5%;
    font-size: 16px;
    line-height: 20px;
    margin-top: 4px;
    width: 100%;
  }
`
const BlogTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  @media screen and (max-width: 767px) {
    justify-content: center;
    padding-top: 1em;
    width: 90%;
  }
`
const BlogTitle = styled.div`
  display: block;
  flex-direction: row;
  align-items: left;
`
const IndexFiltered = ({ pageContext, data }) => {
  const { name } = pageContext
  const filtered = data.filtered.edges

  return (
    <Layout>
      <Helmet title={`${name}`} />
      <Spacer height={60} xsHeight={0} />
      <CustomRow>
        <Divider xs={12} sm={12} md={3} lg={3}>
          <Nav />
        </Divider>
        <CustomCol xs={12} sm={12} md={8} lg={8}>
          {name === "Title IX" ? (
            <BlogTitleWrapper>
              <TagCount>Title IX Today</TagCount>
              <SubTitle>A Discussion Collective three part series</SubTitle>
              <Spacer height={40} />

              <BlogTitle>
                <TagHeader>
                  Pomona College, like most elite liberal arts universities
                  across the country, is a hotbed for student activism and
                  political dissent. But there was one cry that rose above the
                  rest during the college’s 126ᵗʰ academic year: end sexual
                  violence.
                  <br />
                  <br />
                  It began as year of firsts and ended in mostly retractions.
                  For the first time, students openly banned accused assailants
                  from campus gatherings, invoking accusations of “blacklists”
                  and vigilante justice. Half a year later, the Pomona
                  administration disbanded{" "}
                  <i>The Advocates for Survivors of Sexual Assault</i>, the
                  student group tasked with helping victims navigate their
                  process of recovery, prompting a new wave of outrage and
                  furthering resolve that students alone had to solve this
                  problem.
                  <br />
                  <br />
                  The backdrop to it all was Title IX, the 1972 law barring sex
                  discrimination on college campuses that is being
                  systematically dismantled by Education Secretary Betsy Devos.
                  These legal uncertainties—stemming from both executive orders
                  and court rulings—forced the college to make hasty decisions,
                  which were only explained in vague, circumspect language.
                  This, of course, compounded the already volatile situation.
                  <br />
                  <br />
                  This three part series tried to make sense of the events in
                  real time, bringing to the fore voices of student activists,
                  college administrators, and even accused perpetrators. Here is
                  a window one college's ongoing battle to end sexual assault.
                </TagHeader>
              </BlogTitle>
            </BlogTitleWrapper>
          ) : (
            <div></div>
          )}
          <MobileHeader>{upperFirst(name)}</MobileHeader>
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
                    <MobileRowOuter>
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
                          <BetterLink to={`/countries/${kebabCase(country)}/`}>
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
                        marginLeft: "0px !important",
                        marginRight: "0px !important",
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
                          <BetterLink to={`/countries/${kebabCase(country)}/`}>
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
                  <Button>Read More&nbsp;&nbsp;➔</Button>
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

export default IndexFiltered

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
