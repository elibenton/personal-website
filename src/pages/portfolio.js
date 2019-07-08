import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa"
import Collapsible from "react-collapsible"

import Spacer from "../utils/spacer"

const Header = styled.h2`
  margin-bottom: 15px;
  margin-top: 30px;
`

const Article = styled.h3`
  font-style: none;
  text-transform: none;
  margin-top: 0.5em;
  margin-bottom: 1.2em;
  font-weight: normal;
`
const StyledLink = styled(Link)`
  font-weight: 800;
`

const Publication = styled.span`
  font-style: italic;
  text-transform: none;
  font-weight: 800;
`

class PortfolioPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

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
            lg={7}
          >
            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown /> Published Works
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp /> Published Works
                </Header>
              }
              open={true}
              transitionTime={200}
            >
              {posts.map(({ node }) => {
                const title = node.frontmatter.title
                const date = node.frontmatter.date
                const publication = node.frontmatter.publication

                return (
                  <div>
                    <Article>
                      <StyledLink to={node.fields.slug}>{title}</StyledLink> in{" "}
                      <Publication>{publication}</Publication>
                      <h4>{date}</h4>
                    </Article>
                  </div>
                )
              })}
            </Collapsible>

            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown /> Experience
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp /> Experience
                </Header>
              }
              transitionTime={200}
            >
              <h3>Waston Fellowship</h3>
              <ul>
                <li>
                  One year of funded, independent travel outside the United
                  States
                </li>
                <li>
                  Explored the intersection of politics and technology across
                  the globe
                </li>
              </ul>
              <h3>KQED</h3>
              <ul>
                <li>
                  Helped produce Forum, a live two-hour call-in radio show
                </li>
                <li>
                  Researched, pitched, and produced three segments: blockchain,
                  Facebook, and conspiracy theories
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
                  Reported events, conducted research, and edited copy for daily
                  local news segments
                </li>
                <li>
                  Wrote, recorded, and mixed over 50 promotional clips aired
                  over four-month fundraising campaign
                </li>
              </ul>
            </Collapsible>
            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown /> Education
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp /> Education
                </Header>
              }
            >
              <h3>Pomona College | Bachelor of Arts, Politics</h3>
              <ul>
                <li>
                  <b>Thesis: </b>The Political Arguments of Podcasting
                </li>
                <li>
                  <b>Senior Exam: </b>Theories of Journalism for a Post-Truth
                  America
                </li>
                <li>
                  <b>Coursework: </b>Political Journalism, Political Statistics,
                  Newspaper Op-Ed, Advanced Programming, Data Structures,
                  Electronic Music Studio, Fundamentals of 2D Design
                </li>
              </ul>
              <h3>Indian Springs School | High School</h3>
            </Collapsible>
            <Collapsible
              trigger={
                <Header>
                  <FaChevronCircleDown /> Skills
                </Header>
              }
              triggerWhenOpen={
                <Header>
                  <FaChevronCircleUp /> Skills
                </Header>
              }
              transitionTime={200}
            >
              <h3>The Discussion Collective, Founder</h3>
              <ul>
                <li>
                  Founded college radio podcast consisting of interviews, panel
                  discussion, and feature stories
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
              <h3>Pomona Politics Department, Faculty Liaison & Researcher</h3>
              <ul>
                <li>
                  Provide interface between politics majors, perspective majors,
                  and faculty
                </li>
                <li>
                  Arrange bi-weekly events, lectures, and panels about political
                  theory and current events
                </li>
                <li>
                  Assist professor with preparing, curating, and digitizing over
                  400 syllabi and exams
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
              <h3>Indian Springs School, Student Body President</h3>
              <ul>
                <li>
                  Led 22 member student government, liaison between
                  administration and students
                </li>
                <li>
                  Originated and established 1st annual school-wide scavenger
                  hunt with 75% student participation
                </li>
              </ul>
            </Collapsible>
            <Collapsible tigger={<Header>Skills</Header>}>
              <ul>
                <li>
                  <b>Language: </b>English (fluent), Spanish (working
                  proficiency)
                </li>
                <li>
                  <b>Programming: </b>Javascript, Python, R, STATA, HTML, CSS,
                  Git & Github, Static Site Generators, Regex
                </li>
                <li>
                  <b>Technology: </b>Ableton, Max / MSP, Audition, Logic,
                  Hindenburg; Photoshop, Illustrator, Final Cut
                </li>
                <li>
                  <b>Personal: </b>Podcasting, Marathoning, Rock Climbing,
                  Backpacking, Wilderness First Responder, Guitar
                </li>
              </ul>
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
    allMarkdownRemark(
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
          }
        }
      }
    }
  }
`
