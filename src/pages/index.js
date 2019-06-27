import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EmailPopup from "../components/popup"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

import Spacer from "../utils/spacer"
import Color from "../utils/colors"
import Line from "../utils/line"

const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0 40px 1rem;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`

const BlogDescription = styled.div`
  font-style: italic;
  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-left: 0;
    text-align: left;
  }
`

const BlogName = styled.h1`
  font-size: 64px;
  letter-spacing: -4px;
  line-height: 1em;
  margin-bottom: 10px;
`

const PostMetaTextContainer = styled.div`
  margin-right: 20px;
  margin-bottom: 5px;
  width: 60%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

const PostTitle = styled.h2`
  text-decoration: none;
  color: #323232;
  text-align: right;
  margin: 0;
  margin-bottom: 15px;

  @media not all and (hover: none) {
    &:hover {
      color: ${props => Color("yellow")};
    }
  }

  @media screen and (max-width: 767px) {
    text-align: left;
  }
`

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  @media screen and (max-width: 767px) {
    align-items: flex-start;
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
`

const MetaText = styled.h4`
  color: #999;
  text-align: right;
  margin-top: 2px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    text-align: left;
  }
`

const Excerpt = styled.p`
  margin: 0;
`

const Wrapper = styled.div`
  margin-bottom: 3em;
`

class BlogIndex extends React.Component {


  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title={"Home"} />
        <EmailPopup />
        <BlogTitle>
          <BlogName>{title}</BlogName>
          <BlogDescription>{description}</BlogDescription>
        </BlogTitle>
        <Spacer height={50} />

        {posts.map(({ node }) => {
          const { title, date, city, country, description } = node.frontmatter
          const { slug } = node.fields
          return (
            <Wrapper key={slug}>
              <Row>
                <Col
                  xsOffset={1}
                  xs={10}
                  smOffset={2}
                  sm={8}
                  mdOffset={0}
                  md={5}
                  lgOffset={2}
                  lg={5}
                >
                  <MetaContainer>
                    <PostMetaTextContainer>
                      <MetaText>{date}</MetaText>
                      <PostLink to={`/${slug}`}>
                        <PostTitle color={Color("yellow")}>{title}</PostTitle>
                      </PostLink>
                      <MetaText>{city}</MetaText>
                      <MetaText>{country}</MetaText>
                    </PostMetaTextContainer>
                  </MetaContainer>
                </Col>
                <Col
                  xsOffset={1}
                  xs={10}
                  smOffset={2}
                  sm={8}
                  mdOffset={0}
                  md={5}
                  lgOffset={0}
                  lg={4}
                >
                  <Line color={Color("yellow")} />
                  <Excerpt
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                </Col>
              </Row>
            </Wrapper>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            city
            country
            description
          }
        }
      }
    }
  }
`
