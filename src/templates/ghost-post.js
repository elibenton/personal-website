import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"
import Spacer from "../utils/spacer"
import styled from "styled-components"
import Layout from "../components/layout"
import Nav from "../components/nav-left"
import Footer from "../components/footer"

// const About = styled.p`
//   font-size: 19px;
//   font-weight: 400;
//   line-height: 1.4em;
// `
// const AboutContainer = styled.div`
//   margin-bottom: 2em;
//   max-width: 370px;
//   @media screen and (max-width: 767px) {
//     justify-content: flex-start;
//     flex-direction: column;
//   }
// `
// const Header = styled.h2`
//   margin-top: 0;
//   font-size: 18px;
//   line-height: 1.5em;
// `
// const Bold = styled.span`
//   font-weight: bold;
// `
const CustomRow = styled(Row)`
  margin: 0 0 0 0 !important;
`

const CustomCol = styled(Col)`
  margin-left: 30px !important;
  @media screen and (max-width: 767px) {
    padding: 0 !important;
    margin-left: 0;
  }
`
const Divider = styled(Col)`
  z-index: 100;
  @media screen and (max-width: 767px) {
    position: sticky;
    top: 0px;
  }
`

class AboutPrototype extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title={"About"} />
        <Spacer height={60} xsHeight={0} />
        <CustomRow>
          <Divider xs={12} sm={12} md={3} lg={3}>
            <Nav />
          </Divider>
          <CustomCol
            xsOffset={1}
            xs={10}
            smOffset={1}
            sm={10}
            mdOffset={1}
            md={7}
            lgOffset={1}
            lg={6}
          >
            <Spacer height={0} xsHeight={30} />
            <section
              dangerouslySetInnerHTML={{
                __html: this.props.data.ghostPost.html,
              }}
            />
            <Spacer height={135} xsHeight={20} />
          </CustomCol>
        </CustomRow>
        <Footer />
      </Layout>
    )
  }
}

export default AboutPrototype

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      html
      id
    }
  }
`
