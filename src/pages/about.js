import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import Img from "gatsby-image"
import Layout from "../components/layout"

import Spacer from "../utils/spacer"

const About = styled.p`
  margin-top: 2em;
  font-size: 24px;
  line-height: 1.2em;
`
const Header = styled.h2`
  margin-top: 0;
  font-size: 22px;
`
const Bold = styled.span`
  font-weight: bold;
`

const AboutContainer = styled.div`
  margin-top: 3.2em;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${this.props.data.site.siteMetadata.title}`} />
        <Row>
          <Col
            xsOffset={1}
            xs={10}
            smOffset={1}
            sm={10}
            mdOffset={1}
            md={4}
            lgOffset={1}
            lg={4}
          >
            <AboutContainer>
              <Img fluid={this.props.data.file.childImageSharp.fluid} />
            </AboutContainer>
          </Col>

          <Col
            xsOffset={1}
            xs={10}
            smOffset={1}
            sm={10}
            mdOffset={1}
            md={5}
            lgOffset={1}
            lg={5}
          >
            <About>
              As a 2019-2020{" "}
              <a href="https://watson.foundation/">Watson Fellow</a>, I am
              traveling the world to explore the politics of technology. I am
              hoping to see how life online and off shape our understanding of
              the world around us. This website is where I post about my
              journey, discuss the things I am reading, and release episodes of
              my podcast documenting the year.
              <br /> <br />
              Previously, I produced public radio at{" "}
              <a href="https://www.kqed.org/">KQED</a> in San Francisco and
              researched the US Congress at{" "}
              <a href="https://www.brookings.edu/">The Brookings Institution</a>{" "}
              in Washington D.C.
              <br /> <br />I graduated from Pomona College in Los Angeles, where
              I studied politics and computer science.
            </About>
            <br />
            <Header>
              <Bold>Email: </Bold>
              <a href="mailto:eliunited@gmail.com">eliunited@gmail.com</a>
            </Header>
            <Header>
              <Bold>WhatsApp: </Bold>+1 (205) 876-3367
            </Header>
          </Col>
        </Row>
        <Spacer height={135} xsHeight={20} />
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutImageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    file(relativePath: { regex: "/eli.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
