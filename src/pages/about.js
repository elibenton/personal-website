// Core Libraries
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Yarn Packages
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"
import styled from "styled-components"

// Components
import Layout from "../components/layout"
import Nav from "../components/nav-left"
import Footer from "../components/footer"

// Utilities
import Spacer from "../utils/spacer"

const About = styled.p`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.4em;
`
const AboutContainer = styled.div`
  margin-bottom: 2em;
  max-width: 370px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`
const Header = styled.h3`
  margin-top: 0;
  font-size: 18px;
  line-height: 1.2em;
`
const Padding = styled.div`
  padding-left: 35px;
  padding-right: 25px;
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`

class AboutPrototype extends React.Component {
  render() {
    return (
      <Layout>
        <Padding>
          <Spacer height={50} xsHeight={0} />
          <Helmet title={"About"} />
          <Row>
            <Col xs={12} sm={12} md={4} lg={3}>
              <Nav />
            </Col>
            <Col xsOffset={1} xs={10} sm={10} md={7} lg={6}>
              <Spacer height={0} xsHeight={30} />
              <AboutContainer>
                <Img fluid={this.props.data.file.childImageSharp.fluid} />
              </AboutContainer>
              <About>
                As a 2019-2020 <a href="https://watson.foundation/">Watson Fellow</a>, I am
                traveling the world to explore the politics of technology. I hope to see how life
                online—and off—shapes our understanding of the world around us. This website is
                where I write about my journey, discuss what I am reading, and release audio and
                photos documenting the year.
                <br /> <br />
                Previously, I produced public radio at <a href="https://www.kqed.org/">KQED</a> in
                San Francisco and researched the US Congress at{" "}
                <a href="https://www.brookings.edu/">The Brookings Institution</a> in Washington
                D.C.
                <br /> <br />I graduated from Pomona College in Los Angeles, where I studied
                politics and computer science.
              </About>
              <br />
              <Header>
                <b>Email: </b>
                <a href="mailto:eliunited@gmail.com">eliunited@gmail.com</a>
              </Header>
              <Header>
                <b>WhatsApp: </b>+1 (205) 876-3367
              </Header>
              <Spacer height={135} xsHeight={20} />
            </Col>
          </Row>
          <Footer />
        </Padding>
      </Layout>
    )
  }
}

export default AboutPrototype

export const pageQuery = graphql`
  query ImageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    file(relativePath: { regex: "/eli.jpg/" }) {
      childImageSharp {
        fluid(maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
