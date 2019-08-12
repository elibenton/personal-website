// Import foundational libraries, React and Gatsby
import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

// Import custom build components
import logo from "../../content/images/logo.gif"
import Layout from "../components/layout"
import EmailPopup from "../components/popup"

// Import ancillary libraries
import kebabCase from "lodash/kebabCase"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import moment from "moment"

// Import utilities
import Spacer from "../utils/spacer"
import Color from "../utils/colors"
import Line from "../utils/line"

// Created locally-scoped styled components
const Excerpt = styled.p`
  margin: 0;
  font-size: 12pt;
  line-height: 1.5em;
`
const Wrapper = styled.div`
  margin-bottom: 3em;
`
const BlogTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: center;
    padding-top: 3em;
  }
`
const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    display: none;
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
  font-size: 74px;
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
  font-size: 30px;
  text-decoration: none;
  color: #323232;
  text-align: right;
  margin: 0;
  margin-bottom: 15px;
  @media not all and (hover: none) {
    &:hover {
      color: ${Color("yellow")};
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
  :hover,
  :active {
    color: #ffd666;
  }
`
const MetaText = styled.h4`
  color: #999;
  text-align: right;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    text-align: left;
  }
  :hover,
  :active {
    color: #ffd666;
  }
`
const TagText = styled.p`
  color: #999;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  /* font-style: italic; */
  font-size: 13px;
  line-height: 1em;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
  display: inline;
  :hover,
  :active {
    color: #ffd666;
  }
`
const TemplateText = styled.p`
  color: #999;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 1em;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
  display: inline;
  :hover,
  :active {
    color: #ffd666;
  }
`
const TagSpan = styled.span`
  color: #999;
  @media screen and (max-width: 767px) {
     display: none;
  }
`

// Class body
class BlogIndex extends React.Component {
  render() {
    // Site Data
    const { title, description } = this.props.data.site.siteMetadata

    // Using destructuing, create an array of posts
    const posts = this.props.data.allMdx.edges

    return (
      <Layout location={this.props.location} title={title}>
        <Helmet title={title} />
        <EmailPopup />
        <BlogTitleWrapper>
          <img src={logo} alt="Logo" width="270" height="270" />
          <BlogTitle>
            <BlogName>{title}</BlogName>
            <BlogDescription>{description}</BlogDescription>
          </BlogTitle>
        </BlogTitleWrapper>
        <Spacer height={80} />
        {posts.map(({ node }) => {
          const {
            title,
            date,
            city,
            country,
            description,
            tags,
            template,
          } = node.frontmatter
          const { slug, month } = node.fields
          return (
            <Wrapper key={slug}>
              <Row>
                <Col
                  xsOffset={1}
                  xs={10}
                  smOffset={1}
                  sm={10}
                  mdOffset={0}
                  md={4}
                  lgOffset={0}
                  lg={5}
                >
                  <MetaContainer>
                    <PostMetaTextContainer>
                      <PostLink to={`/${template}${slug}`}>
                        <PostTitle>{title}</PostTitle>
                      </PostLink>
                      <PostLink
                        to={`/${moment(month).format("YYYY")}/${moment(month)
                          .format("MMMM")
                          .toLowerCase()}/`}
                      >
                        <MetaText>{date}</MetaText>
                      </PostLink>
                      <PostLink to={`/countries/${kebabCase(country)}/`}>
                        <MetaText>
                          {city}, {country}
                        </MetaText>
                      </PostLink>
                    </PostMetaTextContainer>
                  </MetaContainer>
                </Col>
                <Col
                  xsOffset={1}
                  xs={10}
                  smOffset={1}
                  sm={10}
                  mdOffset={0}
                  md={6}
                  lgOffset={0}
                  lg={5}
                >
                  <TagSpan>
                    <PostLink to={`/${template}`}>
                      <TemplateText>{template}:&nbsp;&nbsp;</TemplateText>
                    </PostLink>
                    {tags.map((tag, index) =>
                      index === 0 ? (
                        <PostLink to={`/tags/${kebabCase(tag)}/`}>
                          <TagText>{tag}</TagText>
                        </PostLink>
                      ) : (
                        <TagSpan key={index}>
                          &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                          <PostLink to={`/tags/${kebabCase(tag)}/`}>
                            <TagText>{tag}</TagText>
                          </PostLink>
                        </TagSpan>
                      )
                    )}
                  </TagSpan>
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

// Pull in data with GraphQL
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    # allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    #   edges {
    #     node {
    #       fields {
    #         slug
    #         month
    #       }
    #       frontmatter {
    #         date(formatString: "MMMM DD, YYYY")
    #         title
    #         city
    #         country
    #         description
    #         tags
    #         template
    #       }
    #     }
    #   }
    # }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            city
            country
            date(formatString: "MMMM DD, YYYY")
            description
            tags
            template
          }
          fields {
            slug
            month
          }
        }
      }
    }
  }
`
