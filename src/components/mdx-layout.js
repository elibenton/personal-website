import React from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import { TagText, TemplateText } from "../components/layout"

import { FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import kebabCase from "lodash/kebabCase"
import moment from "moment"

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
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    box-sizing: border-box;
  }
`
const Title = styled.h1`
  margin-top: 0px;
  text-align: left;
  margin-bottom: 16px;
`
const Subtitle = styled.h5`
  /* font-style: italic; */
  font-weight: 400;
  text-align: left;
  margin-top: 4px;
`
const AttributionText = styled.h4`
  margin-top: 2px;
  color: #777;
`
const Attribution = styled.div`
  margin-top: ${props => props.offset}px;
  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }
`
export const TagSpan = styled.div`
  color: #999;
  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-left: 5%;
    margin-right: 5%;
    /* width: 90%; */
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
      <Helmet title={title} />
      <Row>
        <Col
          xsOffset={1}
          xs={10}
          smOffset={1}
          sm={10}
          mdOffset={0}
          md={9}
          lgOffset={0}
          lg={9}
        >
          <TitleContainer>
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
          </TitleContainer>
          {/* <Line color={Color("yellow")} /> */}
          <Attribution>
            <AttributionText>
              <PostLink
                to={`/${moment(date).format("YYYY")}/${moment(date)
                  .format("MMMM")
                  .toLowerCase()}/`}
              >
                <FaCalendarDay /> {date}
              </PostLink>
            </AttributionText>
            <AttributionText>
              <PostLink to={`/countries/${kebabCase(country)}/`}>
                <FaMapMarkerAlt /> {city}, {country}
              </PostLink>
            </AttributionText>
          </Attribution>
        </Col>
      </Row>

      <Spacer height={50} />
      <Row>
        <Col
          xsOffset={0}
          xs={12}
          smOffset={0}
          sm={12}
          mdOffset={0}
          md={12}
          lgOffset={0}
          lg={9}
        >
          <div className="blog-post-body">
            <div>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
            <Line color={Color("yellow")} />
          </div>
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
                <span>
                  &nbsp;&middot;&nbsp;
                  <PostLink to={`/tags/${kebabCase(tag)}/`}>
                    <TagText>{tag}</TagText>
                  </PostLink>
                </span>
              )
            )}
          </TagSpan>
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
