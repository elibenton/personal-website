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
  margin: 6rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: left;
`
const BlogTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 80%;
  @media screen and (max-width: 767px) {
    justify-content: center;
    padding-top: 1em;
    width: 90%;
  }
`
const BlogTitle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: left;
`
const TagCount = styled.h1`
  font-size: 80px;
  line-height: 82px;
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
  line-height: 32px;
  margin: 5px 5px 0px 11rem;
  font-style: italic;
  width: 20%;
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
      <Helmet title={"Thesis | Pomona College"} />
      <BlogTitleWrapper>
        <TagCount>The Political Arguments of Podcasting</TagCount>
        <h4>Eli Cohen</h4>
        <h4>Bachelor of Arts, Politics</h4>
        <h4>Pomona College</h4>
        <h4>Claremont, California</h4>
        <h4>May 1, 2019</h4>
        <Spacer height={40} />

        <h1>PDF</h1>

        <BlogTitle>
          <SubTitle>
            If journalism is how we talk about our politics, and political
            speech is how we situate ourselves in the world, what does the
            recent explosion of podcasts say about the current day?
          </SubTitle>

          <TagHeader>
            At first glance, podcasts appear to be a relatively unimportant form
            of journalism. There are no podcasters who are “breaking the news,”
            a role now exclusively reserved for online print and Twitter. The
            form of podcasting is often reserved for post-hoc commentary or one
            of the newest and most maligned trends in journalism, “explainer
            news.” And yet, all signs point to a medium continuing to grow. 11%
            of Americans had listening to a podcast in 2006, versus 44% last
            year. There are currently 660,000 actively maintained podcasts on
            iTunes, and despite real fears of over-saturating the market, there
            are no signs that production has begun to slow.
            <br />
            <br />
            There are many simple motivations for podcasting’s explosion; the
            ubiquity of smartphones, the pivot to on-demand media, and screen
            fatigue are all commonly cited rationale. This thesis not only
            accepts those, but also purports more complicated and theoretical
            explanations as well.
            <br />
            <br />
            This thesis theorizes podcasts as a return, specifically along three
            dimensions: a return to narrative form, a return to the spoken word,
            and a retreat from politics mediated by technology. Political theory
            has longs postulated about speech. Aristotle said that “Spoken
            sounds are tokens of affection in the soul.” Hannah Arendt believed
            that “speech is what makes man a political being.” Taken in this
            tradition, how podcasting orients, captures, and distributes speech
            forms an interesting new set of questions for political theory on
            speech to consider.
          </TagHeader>
        </BlogTitle>
      </BlogTitleWrapper>
      <Spacer height={140} xsHeight={40} />
      <Wrapper>
        <h2>Introduction</h2>
        <h3>Podcasts as a Return</h3>
        <h3>The Current Problem</h3>
        <h3>Etymology & Epistemology</h3>
        <h2>A Return To Narrative</h2>
        <h3>Three Types of Podcasts</h3>
        <h3>Changing Conceptions of “The Press”</h3>
        <h3>Stories Return, for Promise and Peril</h3>
        <h2>A Return To Speech</h2>
        <h3>Speech Acts</h3>
        <h3>The Two Way</h3>
        <h3>Speech-to-Text</h3>
        <h2>A Retreat From Technology</h2>
        <h3>Prometheus and the Myth of Progress</h3>
        <h3>Network Effect</h3>
        <h3>Breaking Reflexivity</h3>
        <h2>Conclusion</h2>
        <h3>Witness</h3>
        <h3>Listening</h3>
        <h3>Silence</h3>
        <h2>Bibliography</h2>
      </Wrapper>
      <Spacer height={80} />
    </Layout>
  )
}

export default Tags
