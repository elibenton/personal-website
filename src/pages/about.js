import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Helmet from "react-helmet"
import Spacer from "../utils/spacer"
import styled from "styled-components"
import Layout from "../components/layout"

const About = styled.p`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.4em;
`
const AboutContainer = styled.div`
  margin-bottom: 2em;
  max-width: 350px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`
const Header = styled.h2`
  margin-top: 0;
  font-size: 18px;
  line-height: 1.5em;
`
const Bold = styled.span`
  font-weight: bold;
`

class AboutPrototype extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={"Home | Eli Benton Cohen"} />
        <Spacer height={40} xsHeight={20} />
        <AboutContainer>
          <Img fluid={this.props.data.file.childImageSharp.fluid} />
        </AboutContainer>
        <About>
          As a 2019-2020 <a href="https://watson.foundation/">Watson Fellow</a>,
          I am traveling the world to explore the politics of technology. I hope
          to see how life online—and off—shape our understanding of the world
          around us. This website is where I write about my journey, discuss
          what I am reading, and release audio and photos documenting the year.
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
