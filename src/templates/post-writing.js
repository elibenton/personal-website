import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"

import Spacer from "../utils/spacer"
import Color from "../utils/colors"
import Line from "../utils/line"

// const FrontImage = styled.img`
//   max-height: 200px;
//   width: 100%;
//   margin-top: 15px;
//   object-fit: cover;
//   object-position: 50% 50%;
//   box-shadow: 0 2px 10px #eee;
// `

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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext
    // const color = post.frontmatter.color

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
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
              <Title>{post.frontmatter.title}</Title>
              <Subtitle>{post.frontmatter.description}</Subtitle>
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
                <FaCalendarDay /> {post.frontmatter.date}
              </AttributionText>
              <AttributionText>
                <FaMapMarkerAlt /> {post.frontmatter.city},{" "}
                {post.frontmatter.country}
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
            lg={7}
          >
            <div className="blog-post-body">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              {/* <Line color={Color("yellow")} /> */}
            </div>
          </Col>
        </Row>
        <Spacer height={100} />

        {/* <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
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
      }
    }
  }
`
