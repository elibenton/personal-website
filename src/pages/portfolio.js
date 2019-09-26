import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa"
import Collapsible from "react-collapsible"

import Spacer from "../utils/spacer"

const Par = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.2em;
`

const Indent = styled.div`
  margin-left: 40px;
  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`

const Header = styled.h2`
  margin-bottom: 15px;
  margin-top: 30px;
  font-weight: 500;
`

const MobileContainer = styled.span`
  @media screen and (max-width: 500px) {
    display: none;
  }
`

const Article = styled.h3`
  font-style: none;
  text-transform: none;
  font-weight: normal;
  margin-left: 40px;

  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`
const StyledLink = styled.a`
  font-weight: 600;
`
const Item = styled.div`
  margin-top: 20px;
  line-height: 28px !important;
`
const Publication = styled.div`
  display: inline;
  font-style: italic;
  text-transform: none;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    display: block;
  }
`

class PortfolioPage extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges

    return (
      <Layout>
        <Helmet
          title={`Portfolio | ${this.props.data.site.siteMetadata.title}`}
        />
        <Row>
          <Col
            xsOffset={1}
            xs={10}
            smOffset={2}
            sm={8}
            mdOffset={2}
            md={8}
            lgOffset={2}
            lg={8}
          >
            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Published Works
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Published Works
                </Header>
              }
              open={true}
              transitionTime={300}
            >
              {posts.map(({ node }) => {
                const { title, link } = node.frontmatter
                const date = node.frontmatter.date
                const publication = node.frontmatter.publication

                return (
                  <Item>
                    <Article>
                      <StyledLink href={link}>{title}</StyledLink>
                      <MobileContainer> in </MobileContainer>
                      <Publication>{publication}</Publication>
                      <h4>{date}</h4>
                    </Article>
                  </Item>
                )
              })}
            </Collapsible>
            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Education
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Education
                </Header>
              }
              transitionTime={250}
            >
              <Indent>
                <h3>Pomona College | Bachelor of Arts, Politics</h3>
                <h4>Thesis</h4>
                The Political Arguments of Podcasting
                <br /> <br />
                <h4>Senior Exam</h4>
                Theories of Journalism for a Post-Truth America
                <br /> <br />
                <h4>Coursework</h4>
                Political Journalism, Political Statistics, Newspaper Op-Ed,
                Advanced Programming,
                <br />
                Data Structures, Electronic Music Studio, Fundamentals of 2D
                Design
                <h3>Indian Springs School | High School</h3>
                <h4>Student Body President</h4>
                Led 22 member student government, liaison between administration
                and students
                <br />
                Originated and established 1st annual school-wide scavenger hunt
                with 75% student participation
              </Indent>
            </Collapsible>

            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Experience
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Experience
                </Header>
              }
              transitionTime={300}
            >
              <Indent>
                <h3>KQED</h3>
                <ul>
                  <li>
                    Helped produce Forum, a live two-hour call-in radio show
                  </li>
                  <li>
                    Researched, pitched, and produced three segments:
                    blockchain, Facebook, and conspiracy theories
                  </li>
                  <li>
                    Briefed host Michael Krasny, pre-interviewed and booked
                    guests, managed phones and web engagement
                  </li>
                </ul>
                <h3>The Brookings Institution</h3>
                <ul>
                  <li>Pietro S. Nivola Intern in Governance Studies</li>
                  <li>
                    Helped maintain the Vital Statistics on Congress, a
                    Brookings-AEI public dataset first published in 1978
                  </li>
                  <li>
                    Researched congressional procedure with fellows Molly
                    Reynolds, Vanessa Williamson, and Sarah Binder
                  </li>
                  <li>
                    Assisted co-chair of the Brookings Data Network in providing
                    staff with data science techniques and instruction
                  </li>
                </ul>
                <h3>WBHM</h3>
                <ul>
                  <li>
                    Interviewed government officials, business leaders, and
                    residents for two original radio spots
                  </li>
                  <li>
                    Reported events, conducted research, and edited copy for
                    daily local news segments
                  </li>
                  <li>
                    Wrote, recorded, and mixed over 50 promotional clips aired
                    over four-month fundraising campaign
                  </li>
                </ul>
                <h3>The Discussion Collective, Founder</h3>
                <ul>
                  <li>
                    Founded college radio podcast consisting of interviews,
                    panel discussion, and feature stories
                  </li>
                  <li>
                    Reported on campus news, student initiatives, and national
                    politics as it affects undergraduates
                  </li>
                  <li>
                    Designed and taught three workshops about podcast making as
                    creative/political expression
                  </li>
                  <li>
                    Started the SoundBox, a multi-media recording studio in
                    college’s human-centered design initiative
                  </li>
                </ul>
                <h3>On The Loose, President</h3>
                <ul>
                  <li>
                    Coordinated 100+ leaders and 700+ participants for 50+
                    outdoors club trips each semester
                  </li>
                  <li>
                    Promoted mission of equal outdoor access regardless of
                    experience, identity, or income
                  </li>
                  <li>
                    Oversaw a budget of $15,000 allocated for trip expenses such
                    as gas, permits, and food
                  </li>
                  <li>
                    Assisted in creation of new website, using modern web
                    frameworks
                  </li>
                </ul>
              </Indent>
            </Collapsible>
            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Skills
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp
                    style={{ position: "relative", top: "3px" }}
                  />{" "}
                  Skills
                </Header>
              }
              transitionTime={250}
            >
              <Indent>
                <Par>
                  <b>Language: </b>English (fluent), Spanish (working
                  proficiency)
                </Par>
                <Par>
                  <b>Programming: </b>Javascript, Python, R, STATA, HTML, CSS,
                  Git & Github, Static Site Generators, Regex
                </Par>
                <Par>
                  <b>Technology: </b>Ableton, Max / MSP, Audition, Logic,
                  Hindenburg; Photoshop, Illustrator, Final Cut
                </Par>
                <Par>
                  <b>Personal: </b>Podcasting, Marathoning, Rock Climbing,
                  Backpacking, Wilderness First Responder, Guitar
                </Par>
              </Indent>
            </Collapsible>
          </Col>
        </Row>
        <Spacer height={100} xsHeight={40} />
      </Layout>
    )
  }
}

export default PortfolioPage

export const pageQuery = graphql`
  query portfolioQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { published: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
            published
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            publication
            link
          }
        }
      }
    }
  }
`
