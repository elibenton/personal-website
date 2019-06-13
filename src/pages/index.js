import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

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

const PostImage = styled.img`
  object-fit: cover;
  width: calc(100% - 20px);
  max-height: 66px;
  border-radius: 2px;
  margin-right: 20px;
`

const PostLink = styled(Link)`
  text-decoration: none;
`

const MetaText = styled.h4`
  color: #999;
  text-align: right;
  margin-top: 2px;
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
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={"Home"} />
        <StyledLink to="/">
          <BlogTitle>
            <BlogName>{siteTitle}</BlogName>
            <BlogDescription>{siteDescription}</BlogDescription>
          </BlogTitle>
        </StyledLink>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Wrapper>
              <Row>
                <Col
                  xsOffset={1}
                  xs={10}
                  smOffset={2}
                  sm={8}
                  mdOffset={0}
                  md={5}
                  lgOffset={3}
                  lg={4}
                >
                  <MetaContainer key={node.fields.slug}>
                    <PostMetaTextContainer>
                      <PostLink to={node.fields.slug}>
                        <PostTitle>{title}</PostTitle>
                      </PostLink>
                      <MetaText>
                        {node.frontmatter.date}
                        <br />
                        {node.frontmatter.location}
                      </MetaText>
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
                  lg={3}
                >
                  <Excerpt
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
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
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            location
            description
          }
        }
      }
    }
  }
`
