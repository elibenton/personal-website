// Import foundational libraries, React and Gatsby
import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

// Import custom build components
import Layout from "../components/layout"
import Nav from "../components/nav-top"

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
const PostLink = styled(Link)`
  text-decoration: none;
  :hover,
  :active {
    color: #ffd666;
  }
  @media screen and (max-width: 767px) {
    :hover,
    :active {
      color: black;
    }
  }
`
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
  flex-direction: column;
  align-items: left;
  @media screen and (max-width: 767px) {
    justify-content: center;
    padding-top: 1em;
    width: 90%;
  }
`
const BlogTitle = styled.div`
  display: block;
  flex-direction: row;
  align-items: left;
`
const TagCount = styled.h1`
  font-size: 120px;
  margin: 90px 60px 55px 10rem;
  text-shadow: 2px 4px #ffd666;
  @media screen and (max-width: 767px) {
    font-size: 50px;
    line-height: 54px;
    margin: 10px 0px 10px 20px;
  }
`
const SubTitle = styled.h2`
  font-size: 28px;
  line-height: 26px;
  margin: 5px 5px 0px 11rem;
  font-style: italic;
  text-decoration-color: #ffd666;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 18px;
    margin: 2px 2px 0px 30px;
  }
`

const TagHeader = styled.p`
  font-size: 23px;
  line-height: 28px;
  margin-top: 12px;
  margin-left: 11rem;
  width: 61%;
  @media screen and (max-width: 767px) {
    margin-left: 5%;
    font-size: 16px;
    line-height: 20px;
    margin-top: 4px;
    width: 100%;
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
export const TagSpan = styled.div`
  color: #999;
  display: inline;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

// Class body
const Tags = ({ pageContext, data }) => {
  const { edges } = data.allMdx
  const { title } = data.site.siteMetadata
  const posts = edges

  return (
    <Layout location={data.location} title={title}>
      <Helmet title={"Title IX Today | Feature"} />
      <Nav />
      <BlogTitleWrapper>
        <TagCount>Title IX Today</TagCount>
        <SubTitle>A Discussion Collective three part series</SubTitle>
        <SubTitle></SubTitle>
        <Spacer height={40} />

        <BlogTitle>
          <TagHeader>
            Pomona College, like most elite liberal arts universities across the
            country, is a hotbed for student activism and political dissent. But
            there was one cry that rose above the rest during the college’s
            126ᵗʰ academic year: end sexual violence.
            <br />
            <br />
            It began as year of firsts and ended in mostly retractions. For the
            first time, students openly banned accused assailants from campus
            gatherings, invoking accusations of “blacklists” and vigilante
            justice. Half a year later, the Pomona administration disbanded{" "}
            <i>The Advocates for Survivors of Sexual Assault</i>, the student
            group tasked with helping victims navigate their process of
            recovery, prompting a new wave of outrage and furthering resolve
            that students alone had to solve this problem.
            <br />
            <br />
            The backdrop to it all was Title IX, the 1972 law barring sex
            discrimination on college campuses that is being systematically
            dismantled by Education Secretary Betsy Devos. These legal
            uncertainties—stemming from both executive orders and court
            rulings—forced the college to make hasty decisions, which were only
            explained in vague, circumspect language. This, of course,
            compounded the already volatile situation.
            <br />
            <br />
            This three part series tried to make sense of the events in real
            time, bringing to the fore voices of student activists, college
            administrators, and even accused perpetrators. Here is a window one
            college's ongoing battle to end sexual assault.
          </TagHeader>
        </BlogTitle>
      </BlogTitleWrapper>

      <Spacer height={140} xsHeight={40} />

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
                {/* <TagSpan>
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
                </TagSpan> */}

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
      <Spacer height={80} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 500
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { in: ["Title IX"] } } }
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
        shortTitle
      }
    }
  }
`
