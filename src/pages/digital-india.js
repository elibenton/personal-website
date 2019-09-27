// Import foundational libraries, React and Gatsby
import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"

// Import custom build components
import Layout from "../components/layout"
import { TagText, TemplateText } from "../components/layout"

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
  margin: 90px 60px 55px 11rem;
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
      <Helmet title={"Digital India | Feature"} />
      <BlogTitleWrapper>
        <TagCount>Digital India</TagCount>
        <SubTitle>Lessons for an increasingly networked world</SubTitle>
        <Spacer height={40} />

        <BlogTitle>
          <TagHeader>
            I didn't think my investigation of the internet would lead me to the
            remote mountain towns of India, to a place where people walk for
            five kilometers just to find a road, a place where the government
            ships in rice because, if it rains, making it to the weekly market
            becomes impossible. But the location actually makes perfect sense.
            To investigate the networked world, one follows the network—and
            here, the network was perfect.
            <br />
            <br />
            The discrepancy between India's physical and digital infrastructure
            boggles my mind. Here, public sanitation is still a political
            concern of the highest priority, but mobile broadband is so passé
            it's only three US cents per gigabyte. Nandan Nilekani, sometimes
            called “The CEO of India,” has said the country will be “data rich
            before it'll be economically rich.” He would know.
            <br />
            <br />
            Creator of Aadhaar, the world's largest biometric-based ID system,
            Nilekani conjured 1.2 billion new data points by digitizing the
            second largest population in the world. In recent years, Aadhaar has
            faced mounting criticism from privacy activists, civil society
            groups, and the Supreme Court, but it has not tempered the Aadhaar
            fever. The High Court of Tamil Nadu recommended Aadhaar be linked to
            Facebook to fight fake news. The Excise Department of Karnataka
            considered requiring the ID to purchase alcohol, to cut down on
            litter.
            <br />
            <br />
            Nothing appears off limits in India's digital experiment, even under
            unfavorable conditions: a still developing economy, massive cultural
            and linguistic diversity, and almost no digital literacy. People
            here say, “If it works it India, it could be the next global
            standard.” The globe might want to start paying attention.
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
      filter: { frontmatter: { tags: { in: ["Digital India"] } } }
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
