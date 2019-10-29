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
    width: 90%;
    margin-left: 8px !important;
    padding-left: 4px;
  }
`

const MobileHeader = styled.h3`
  font-size: 28px;
  margin: 0px 0px 16px 0px;
  padding-bottom: 16px;
  font-weight: 500;
  border-bottom: solid;
  @media screen and (max-width: 767px) {
    padding-left: 12px;
    margin-right: -8px;
    margin-top: 24px;
    border-bottom: none;
    padding-bottom: 16px;
    line-height: 1.2em;
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
  margin-left: 70px !important;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    padding: 0 !important;
  }
`
const MobileText = styled.h4`
  font-size: 16px;
  margin-left: 0px;
  @media screen and (max-width: 767px) {
    padding-left: 12px;
  }
`
const IndexFiltered = ({ pageContext, data }) => {
  const { name } = pageContext
  const filtered = data.filtered.edges

  return (
    <Layout>
      <Helmet title={`${name}`} />
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
          {name === "Title IX" ? (
            <div>
              <MobileHeader>Title IX Today</MobileHeader>
              <MobileText>
                Pomona College, like most elite liberal arts universities across
                the country, is a hotbed for student activism and political
                dissent. But there was one cry that rose above the rest during
                the college’s 126ᵗʰ academic year: end sexual violence.
                <br />
                <br />
                It began as year of firsts and ended in mostly retractions. For
                the first time, students openly banned accused assailants from
                campus gatherings, invoking accusations of “blacklists” and
                vigilante justice. Half a year later, the Pomona administration
                disbanded <i>The Advocates for Survivors of Sexual Assault</i>,
                the student group tasked with helping victims navigate their
                process of recovery, prompting a new wave of outrage and
                furthering resolve that students alone had to solve this
                problem.
                <br />
                <br />
                The backdrop to it all was Title IX, the 1972 law barring sex
                discrimination on college campuses that is being systematically
                dismantled by Education Secretary Betsy Devos. These legal
                uncertainties—stemming from both executive orders and court
                rulings—forced the college to make hasty decisions, which were
                only explained in vague, circumspect language. This, of course,
                compounded the already volatile situation.
                <br />
                <br />
                This three part series tried to make sense of the events in real
                time, bringing to the fore voices of student activists, college
                administrators, and even accused perpetrators. Here is a window
                into one college's ongoing battle to end sexual assault.
                <br />
                <br />
              </MobileText>
            </div>
          ) : name === "Digital India" ? (
            <div>
              <MobileHeader>Digital India</MobileHeader>
              <MobileText>
                I didn't think my investigation of the internet would lead me to
                the remote mountain towns of India, to a place where people walk
                for five kilometers just to find a road, a place where the
                government ships in rice because, if it rains, making it to the
                weekly market becomes impossible. But the location actually
                makes perfect sense. To investigate the networked world, one
                follows the network—and here, the network was perfect.
                <br />
                <br />
                The discrepancy between India's physical and digital
                infrastructure boggles my mind. Here, public sanitation is still
                a political concern of the highest priority, but mobile
                broadband is so passé it's only three US cents per gigabyte.
                Nandan Nilekani, sometimes called “The CEO of India,” has said
                the country will be “data rich before it'll be economically
                rich.” He would know.
                <br />
                <br />
                Creator of Aadhaar, the world's largest biometric-based ID
                system, Nilekani conjured 1.2 billion new data points by
                digitizing the second largest population in the world. In recent
                years, Aadhaar has faced mounting criticism from privacy
                activists, civil society groups, and the Supreme Court, but it
                has not tempered the Aadhaar fever. The High Court of Tamil Nadu
                recommended Aadhaar be linked to Facebook to fight fake news.
                The Excise Department of Karnataka considered requiring the ID
                to purchase alcohol, to cut down on litter.
                <br />
                <br />
                Nothing appears off limits in India's digital experiment, even
                under unfavorable conditions: a still developing economy,
                massive cultural and linguistic diversity, and almost no digital
                literacy. People here say, “If it works it India, it could be
                the next global standard.” The globe might want to start paying
                attention.
                <br />
                <br />
              </MobileText>
            </div>
          ) : (
            <MobileHeader>{upperFirst(name)}</MobileHeader>
          )}
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
                  <Button>Read More&nbsp;➤</Button>
                </BetterLink>
              </Collapsible>
            )
          })}
        </CustomCol>
      </CustomRow>
      <Spacer height={40} xsHeight={20} />
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
