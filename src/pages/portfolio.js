import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

import Spacer from "../utils/spacer"

const Article = styled.h3`
  font-style: none;
  text-transform: none;
  margin-top: 5px;
  margin-bottom: 5px;
`

const Publication = styled.span`
  font-style: italic;
  text-transform: none;
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
            lgOffset={4}
            lg={7}
          >
            <h2>Published Works</h2>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title
              const data = node.frontmatter.date
              const publication = node.frontmatter.publication

              return (
                <div>
                  <Article>
                    <Link to={node.fields.slug}>{title}</Link> in{" "}
                    <Publication>{publication}</Publication>
                  </Article>

                  <h4>{data}</h4>
                </div>
              )
            })}
            <h2>Experience</h2>
            <h3>KQED</h3>
            <ul>
              <li>Helped produce Forum, a live two-hour call-in radio show</li>
              <li>
                Researched, pitched, and produced three segments: blockchain,
                Facebook, and conspiracy theories
              </li>
              <li>
                Briefed host Michael Krasny, pre-interviewed and booked guests,
                managed phones and web engagement
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
                Researched congressional procedure with fellows Molly Reynolds,
                Vanessa Williamson, and Sarah Binder
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
                Wrote, recorded, and mixed over 50 promotional clips aired over
                four-month fundraising campaign
              </li>
            </ul>
            <h2>Education</h2>
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
                Campaigns & Elections, Newspaper Op-Ed, Natural Language
                Processing, Advanced Programming, Data Structures, Electronic
                Music Studio, Human Centered Design, Fundamentals of 2D Design
              </li>
            </ul>
            <h3>Indian Springs School | High School</h3>
            <h2>Leadership</h2>
            <h3>The Discussion Collective, Founder</h3>
            <ul>
              <li>
                Founded college radio podcast consisting of interviews, panel
                discussion, and feature stories
              </li>
              <li>
                Report on campus news, student initiatives, and national
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
                Coordinated 100+ leaders and 700+ participants for 50+ outdoors
                club trips each semester
              </li>
              <li>
                Promoted mission of equal outdoor access regardless of
                experience, identity, or income
              </li>
              <li>
                Oversaw a budget of $15,000 allocated for trip expenses such as
                gas, permits, and food
              </li>
              <li>
                Assisted in creation of new website, using modern web frameworks
              </li>
            </ul>
            <h3>Indian Springs School, Student Body President</h3>
            <ul>
              <li>
                Led 22 member student government, liaison between administration
                and students
              </li>
              <li>
                Originated and established 1st annual school-wide scavenger hunt
                with 75% student participation
              </li>
            </ul>
            <h2>Skills</h2>
            <ul>
              <li>
                <b>Language: </b>English (fluent), Spanish (working proficiency)
              </li>
              <li>
                <b>Programming: </b>Javascript, Python, R, STATA, HTML, CSS, Git
                & Github, Static Site Generators, Regex
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
      filter: { frontmatter: { categories: { in: "published" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
