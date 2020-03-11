// Core Libraries
import React from "react"
import { graphql, Link } from "gatsby"

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
          <Helmet title={"404: Not Found"} />
          <Spacer height={50} xsHeight={0} />
          <Row>
            <Col xs={12} sm={12} md={4} lg={3}>
              <Nav />
            </Col>
            <Col xsOffset={1} xs={10} sm={10} md={7} lg={8}>
              <Spacer height={0} xsHeight={30} />
              <h1 css={{ lineHeight: "1.2em", margin: "0", fontSize: "90px" }}>404: Not Found</h1>
              <Spacer height={50} xsHeight={15} />
              <Col xs={12} sm={12} md={8} lg={8}>
                <About>Oh no! This page no longer exists!</About>
                <About>
                  Well it probably does <i>exist</i>; it's just been moved somewhere else. Sometimes
                  I move things around and then forget where I put them.
                </About>
                <About>Apologies about that.</About>
                <About>
                  Click this <Link to="/">link</Link> to view all posts. Or refer to the tags to
                  browse different topics. Remember, clicking the spinning globe always takes you
                  home.
                </About>
              </Col>
              <Spacer height={135} xsHeight={20} />
            </Col>
          </Row>
          <Spacer height={40} xsHeight={40} />
          <Footer />
        </Padding>
      </Layout>
    )
  }
}

export default AboutPrototype

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
