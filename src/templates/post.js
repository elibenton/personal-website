// Core Libraries
import React from "react"
import { graphql, Link } from "gatsby"

// Yarn Packages
import { Row, Col } from "react-flexbox-grid"
import Helmet from "react-helmet"
import styled from "styled-components"
import { FaCalendarDay, FaMapMarkerAlt, FaBook, FaHeadphones } from "react-icons/fa"

// Components
import Layout from "../components/layout"
import Nav from "../components/nav-top"

// Utilities and Ancillary Libraries
import { kebabCase, upperFirst } from "lodash"
import Spacer from "../utils/spacer"

// Created locally-scoped styled components
const PostLink = styled(Link)`
  text-decoration: none;
  :hover,
  :active {
    color: #ffd666;
  }
`
const Title = styled.h2`
  margin-top: 0px;
  text-align: left;
  line-height: 9.5vw;
  font-size: 7.5vw;
  @media screen and (max-width: 767px) {
    line-height: 15vw;
    font-size: 14.2vw;
  }
`
const StyledRow = styled(Row)`
  @media screen and (max-width: 767px) {
    margin-left: 2% !important;
    margin-right: 2% !important;
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

function PostTemplate({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const { siteUrl } = data.site.siteMetadata
  const post = data.ghostPost
  const { html, title, updated_at, published_at, tags, excerpt, slug } = post
  // const template = tags[0].name
  // const city = tags[1].name
  // const country = tags[2].name
  // const monthYear = tags[3].name

  const [types] = tags.filter(tag => tag.name.includes("Type: "))
  const [topics] = tags.filter(tag => tag.name.includes("Topic: "))
  const [months] = tags.filter(tag => tag.name.includes("Month: "))
  const [cities] = tags.filter(tag => tag.name.includes("City: "))
  const [regions] = tags.filter(tag => tag.name.includes("Region: "))
  const [countries] = tags.filter(tag => tag.name.includes("Country"))

  return (
    <Layout location={data.location} title={siteTitle}>
      <Helmet title={title} />
      <Nav
        title={title}
        slug={slug}
        siteUrl={siteUrl}
        published_at={published_at}
        months={months.name.split(": ")[1]}
        cities={cities.name.split(": ")[1]}
        countries={countries.name.split(": ")[1]}
        types={types.name.split(": ")[1]}
        // topics={topics.name.split(": ")[1]}
      />
      <Spacer height={60} xsHeight={30} />
      <StyledRow>
        <Col xsOffset={0} smOffset={0} mdOffset={1} lgOffset={1} xs={12} sm={12} md={6} lg={6}>
          <Title>{title}</Title>
        </Col>
        <br />
        <Col xsOffset={0} smOffset={0} mdOffset={1} lgOffset={1} xs={12} sm={12} md={6} lg={3}>
          <Spacer height={20} xsHeight={0} />
          <Col>
            <h4 css={{ fontSize: "15px" }}>{excerpt}</h4>
          </Col>
          <Spacer xsHeight={10} height={20} />
          <Col>
            <div>
              <h5>
                <PostLink to={`/tag/${kebabCase(months.name.split(": ")[1])}`}>
                  <FaCalendarDay /> {published_at}
                </PostLink>
              </h5>
              <h5>
                <PostLink to={`/tag/${kebabCase(countries.name.split(": ")[1])}/`}>
                  <FaMapMarkerAlt /> {cities.name.split(": ")[1]}, {countries.name.split(": ")[1]}
                </PostLink>
              </h5>
              {types.name.split(": ")[1] === "writing" ? (
                <h5>
                  <PostLink to={`/tag/${kebabCase(types.name.split(": ")[1])}`}>
                    <FaBook /> {upperFirst(types.name.split(": ")[1])}
                  </PostLink>
                </h5>
              ) : (
                <h5>
                  <PostLink to={`/tag/${kebabCase(types.name.split(": ")[1])}`}>
                    <FaHeadphones /> {upperFirst(types.name.split(": ")[1])}
                  </PostLink>
                </h5>
              )}
            </div>
          </Col>
        </Col>
        <Col
          xsOffset={0}
          xs={12}
          smOffset={0}
          sm={12}
          // mdOffset={1}
          md={12}
          // lgOffset={1}
          lg={12}
        >
          <Spacer height={50} xsHeight={30} />
          <section
            class="blog-post-body"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />

          <Spacer height={135} xsHeight={20} />
        </Col>
      </StyledRow>
      <Spacer height={100} />
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    ghostPost(slug: { eq: $slug }) {
      excerpt
      title
      html
      id
      slug
      updated_at(formatString: "MMMM DD, YYYY")
      published_at(formatString: "MMMM DD, YYYY")
      tags {
        name
      }
    }
  }
`
