import React from "react"
import { graphql, Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { TagText, TemplateText } from "../components/layout"

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
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    box-sizing: border-box;
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
    width: 90%;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const {
      title,
      description,
      date,
      city,
      country,
      tags,
      template,
    } = post.frontmatter
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} description={description || post.excerpt} />
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
            lgOffset={3}
            lg={6}
          >
            <div className="blog-post-body">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
                    &nbsp;&nbsp;&middot;&nbsp;&nbsp;
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
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        city
        country
        template
        tags
      }
    }
  }
`
