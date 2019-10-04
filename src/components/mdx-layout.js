import React from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Nav from "../components/nav-top"

import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaBook,
  FaHeadphones,
} from "react-icons/fa"
import { Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import { kebabCase, upperFirst } from "lodash"
import moment from "moment"

import Spacer from "../utils/spacer"

// Created locally-scoped styled components
const PostLink = styled(Link)`
  text-decoration: none;
  :hover,
  :active {
    color: #ffd666;
  }
`

const Title = styled.h1`
  margin-top: 0px;
  text-align: left;
  margin-bottom: 16px;
`

const StyledRow = styled(Row)`
  @media screen and (max-width: 767px) {
    margin-left: 2% !important;
    margin-right: 2% !important;
  }
`

const ReverseCol = styled(Col)`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const TagSpan = styled.div`
  color: #999;
  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-left: 5%;
    margin-right: 5%;
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
      <Nav title={title} date={date} city={city} country={country} />
      <Spacer height={60} xsHeight={30} />
      <StyledRow>
        <Col
          xsOffset={0}
          smOffset={0}
          mdOffset={2}
          lgOffset={3}
          xs={10}
          sm={10}
          md={8}
          lg={6}
        >
          <Title>{title}</Title>
        </Col>

        <br />
        <Col
          xsOffset={0}
          smOffset={0}
          mdOffset={2}
          lgOffset={3}
          xs={10}
          sm={10}
          md={4}
          lg={4}
        >
          <h4 css={{ fontSize: "15px" }}>{description}</h4>
        </Col>
        <ReverseCol
          xsOffset={0}
          smOffset={0}
          mdOffset={0}
          lgOffset={0}
          xs={10}
          sm={10}
          md={4}
          lg={2}
        >
          <div>
            <h5>
              <PostLink
                to={`/${moment(date).format("YYYY")}/${moment(date)
                  .format("MMMM")
                  .toLowerCase()}/`}
              >
                <FaCalendarDay /> {date}
              </PostLink>
            </h5>
            <h5>
              <PostLink to={`/countries/${kebabCase(country)}/`}>
                <FaMapMarkerAlt /> {city}, {country}
              </PostLink>
            </h5>
            {template === "writing" ? (
              <h5>
                <PostLink to={`/${template}`}>
                  <FaBook /> {upperFirst(template)}
                </PostLink>
              </h5>
            ) : (
              <h5>
                <PostLink to={`/${template}`}>
                  <FaHeadphones /> {upperFirst(template)}
                </PostLink>
              </h5>
            )}
          </div>
          <div>
            {tags.map(tag => (
              <PostLink to={`/tags/${kebabCase(tag)}/`}>
                <h5 class="tag">{tag}</h5>
              </PostLink>
            ))}
          </div>
        </ReverseCol>
      </StyledRow>
      <Spacer height={60} xsHeight={10} />

      <Row>
        <Col
          xsOffset={0}
          xs={12}
          smOffset={0}
          sm={12}
          mdOffset={2}
          md={8}
          lgOffset={3}
          lg={6}
        >
          <div className="blog-post-body">
            <div>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
          </div>
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
