import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import styled from "styled-components"

import Layout from "../components/layout"

import Nav from "../components/nav-left"

const About = styled.p`
  font-size: 20px;
  font-weight: 450;
  line-height: 1.2em;
  font-family: Avenir;
`
const AboutContainer = styled.div`
  margin-bottom: 1em;
  max-width: 350px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`
const Header = styled.h2`
  margin-top: 0;
  font-size: 22px;
`
const Bold = styled.span`
  font-weight: bold;
`

class AboutPrototype extends React.Component {
  render() {
    return (
      <Layout>
        <About>
          <AboutContainer>
            <Img fluid={this.props.data.file.childImageSharp.fluid} />
          </AboutContainer>
          <br />
          Hello! I'm Eli.
          <br /> <br />
          As a 2019-2020 <a href="https://watson.foundation/">Watson Fellow</a>,
          I am traveling the world to explore the politics of technology. I am
          hoping to see how life online and off shape our understanding of the
          world around us. This website is where I post about my journey,
          discuss the things I am reading, and release episodes of my podcast
          documenting the year.
          <br /> <br />
          Previously, I produced public radio at{" "}
          <a href="https://www.kqed.org/">KQED</a> in San Francisco and
          researched the US Congress at{" "}
          <a href="https://www.brookings.edu/">The Brookings Institution</a> in
          Washington D.C.
          <br /> <br />I graduated from Pomona College in Los Angeles, where I
          studied politics and computer science.
        </About>
        <br />
        <Header>
          <Bold>Email: </Bold>
          <a href="mailto:eliunited@gmail.com">eliunited@gmail.com</a>
        </Header>
        <Header>
          <Bold>WhatsApp: </Bold>+1 (205) 876-3367
        </Header>
        <Spacer height={135} xsHeight={20} />
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
