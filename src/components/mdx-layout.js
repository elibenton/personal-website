import React from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { TagText, TemplateText, TagSpan } from "../components/layout"

import { FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"

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
const TitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`
const Title = styled.h1`
  text-align: left;
  margin-bottom: 5px;
`
const Subtitle = styled.p`
  font-style: italic;
  text-align: left;
`
const AttributionText = styled.h4`
  margin-top: 2px;
  color: #777;
`
const Attribution = styled.div`
  margin-top: ${props => props.offset}px;
  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-left: 10px;
    width: calc(100% - 20px);
  }
`

function PageTemplate({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const { mdx } = data
  const {
    title,
    description,
    date,
    city,
    country,
    tags,
    template,
  } = mdx.frontmatter

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO title={title} description={description || mdx.excerpt} />
      <Row>
        <Col
          xsOffset={0}
          xs={12}
          smOffset={1}
          sm={10}
          mdOffset={1}
          md={6}
          lgOffset={1}
          lg={6}
        >
          <TitleContainer>
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
          </TitleContainer>
        </Col>
        <Col
          xsOffset={0}
          xs={12}
          smOffset={1}
          sm={10}
          mdOffset={1}
          md={4}
          lgOffset={1}
          lg={4}
        >
          <Attribution offset={130}>
            <Line color={Color("yellow")} />
            <AttributionText>
              <FaCalendarDay /> {date}
            </AttributionText>
            <AttributionText>
              <FaMapMarkerAlt /> {city}, {country}
            </AttributionText>
          </Attribution>
        </Col>
      </Row>
      <Spacer height={50} />
      <Row>
        <Col
          xsOffset={0}
          xs={12}
          smOffset={1}
          sm={10}
          mdOffset={1}
          md={10}
          lgOffset={4}
          lg={6}
        >
          <div className="blog-post-body">
            <MDXRenderer>{mdx.body}</MDXRenderer>
            <Line color={Color("yellow")} />
          </div>
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
        </Col>
      </Row>
      <Spacer height={100} />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query MdxPostQuery($id: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        city
        country
        tags
        template
      }
      body
    }
  }
`
