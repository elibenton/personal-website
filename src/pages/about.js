import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import Img from "gatsby-image"
import Layout from "../components/layout"

import Spacer from "../utils/spacer"

const About = styled.p`
  font-size: 26px;
  line-height: 1.2em;
`

const AboutContainer = styled.div`
  margin: 2em 2em 2em 0;
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
            mdOffset={0}
            md={5}
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
            mdOffset={0}
            md={6}
            lgOffset={0}
            lg={6}
          >
            <About>
              As a 2019-2020{" "}
              <a href="https://watson.foundation/">Watson Fellow</a>, I am
              traveling the world to explore the politics of technology. I am
              hoping to see how life online and off shape our understanding of
              the world around us. This website is where I post about my
              journey, discuss the things I am reading, and release episodes of
              my podcast documenting the year.
            </About>
            <About>
              Previously, I produced public radio at{" "}
              <a href="https://www.kqed.org/">KQED</a> in San Francisco and
              researched the US Congress at{" "}
              <a href="https://www.brookings.edu/">The Brookings Institution</a>{" "}
              in Washington D.C.
            </About>
            <About>
              I graduated from Pomona College in Los Angeles, where I studied
              politics and computer science among other topics.
            </About>
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
