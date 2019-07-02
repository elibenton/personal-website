// Import foundational libraries, React and Gatsby
import React from "react"
import { Link, graphql } from "gatsby"

// Import custom build components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Import ancillary libraries
import kebabCase from "lodash/kebabCase"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"

// Import utilities
import Spacer from "../utils/spacer"
import Color from "../utils/colors"
import Line from "../utils/line"

// Created locally-scoped styled components
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
    /* flex-direction: column; */
    padding-top: 3em;
  }
`
const BlogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`
const TagCount = styled.h1`
  font-size: 256px;
  margin: 60px;
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
const Countries = ({ pageContext, data }) => {
  const { country } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const countryCount = `${totalCount}`
  const countryCountPlural = `post${totalCount === 1 ? "" : "s"} in:`
  const countryHeader = `${country}`

  const { title } = data.site.siteMetadata
  const posts = edges

  return (
    <Layout location={data.location} title={title}>
      <SEO title={"Home"} />
      <BlogTitleWrapper>
        <TagCount>{countryCount}</TagCount>
        <BlogTitle>
          <TagCountPlural>{countryCountPlural}</TagCountPlural>
          <TagHeader>{countryHeader}</TagHeader>
        </BlogTitle>
      </BlogTitleWrapper>

      <Spacer height={50} />

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
        const { slug } = node.fields
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
                lgOffset={3}
                lg={4}
              >
                <MetaContainer>
                  <PostMetaTextContainer>
                    <PostLink to={`/${template}${slug}`}>
                      <PostTitle>{title}</PostTitle>
                    </PostLink>
                    <MetaText>{date}</MetaText>
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
                lg={4}
              >
                {tags.map((country, index) =>
                  index === 0 ? (
                    <TagSpan key={index}>
                      <PostLink to={`/tags/${kebabCase(country)}/`}>
                        <TagText>{country}</TagText>
                      </PostLink>
                    </TagSpan>
                  ) : (
                    <TagSpan key={index}>
                      &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                      <PostLink to={`/tags/${kebabCase(country)}/`}>
                        <TagText>{country}</TagText>
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

export default Countries

export const pageQuery = graphql`
  query($theCountry: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { country: { eq: $theCountry } } }
    ) {
      totalCount
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
