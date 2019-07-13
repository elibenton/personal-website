// Import foundational libraries, React and Gatsby
import React from "react"
import { Link, graphql } from "gatsby"

// Import custom build components
import Layout from "../components/layout"
import { TagText, TemplateText, TagSpan } from "../components/layout"
import SEO from "../components/seo"

// Import ancillary libraries
import kebabCase from "lodash/kebabCase"
import capitalize from "lodash/capitalize"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import moment from "moment"

// Import utilities
import Spacer from "../utils/spacer"
import Color from "../utils/colors"
import Line from "../utils/line"

// Created locally-scoped styled components
const PostLink = styled(Link)`
  text-decoration: none;
  :hover,
  :active {
    color: #ffd666;
  }
`
const Excerpt = styled.p`
  margin: 0;
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
    width: 85%;
  }
`
const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const TagCount = styled.h1`
  font-size: 256px;
  margin: 90px 60px 60px 60px;
  /* margin: 60px; */
  text-shadow: 3px 5px #ffd666;
  @media screen and (max-width: 767px) {
    font-size: 128px;
    margin: 10px;
  }
`
const TagCountPlural = styled.h1`
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 12px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 4px;
  }
`
const TagHeader = styled.h1`
  font-size: 52px;
  line-height: 20px;
  margin-top: 12px;
  text-decoration: underline;
  text-decoration-color: #ffd666;
  @media screen and (max-width: 767px) {
    font-size: 32px;
    line-height: 32px;
    margin-top: 4px;
  }
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

// Class body
const Tags = ({ pageContext, data }) => {
  const { name } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const Count = `${totalCount}`
  const CountPlural = `post${totalCount === 1 ? "" : "s"} in:`
  const Header = `${capitalize(name)}`

  const { title } = data.site.siteMetadata
  const posts = edges

  return (
    <Layout location={data.location} title={title}>
      <SEO title={"Home"} />
      <BlogTitleWrapper>
        <TagCount>{Count}</TagCount>
        <BlogTitle>
          <TagCountPlural>{CountPlural}</TagCountPlural>
          <TagHeader>{Header}</TagHeader>
        </BlogTitle>
      </BlogTitleWrapper>

      <Spacer height={100} />

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
                md={5}
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
                <PostLink to={`/${template}`}>
                  <TemplateText>{template}:&nbsp;&nbsp;</TemplateText>
                </PostLink>
                {tags.map((tag, index) =>
                  index === 0 ? (
                    <TagSpan key={index}>
                      <PostLink to={`/tags/${kebabCase(tag)}/`}>
                        <TagText>{tag}</TagText>
                      </PostLink>
                    </TagSpan>
                  ) : (
                    <TagSpan key={index}>
                      &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                      <PostLink to={`/tags/${kebabCase(tag)}/`}>
                        <TagText>{tag}</TagText>
                      </PostLink>
                    </TagSpan>
                  )
                )}
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

export default Tags

export const pageQuery = graphql`
  query($filter: MarkdownRemarkFilterInput) {
    allMarkdownRemark(
      limit: 500
      sort: { fields: [frontmatter___date], order: DESC }
      filter: $filter
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            month
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            city
            country
            description
            tags
            template
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
