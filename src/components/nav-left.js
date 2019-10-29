import React from "react"
import logo from "../../content/images/logo.gif"
import Collapsible from "react-collapsible"
import { Link, StaticQuery, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import upperFirst from "lodash/upperFirst"
import styled from "styled-components"
import Spacer from "../utils/spacer"

const Name = styled.h1`
  display: flex;
  text-transform: none;
  font-weight: 600;
  font-size: 29px;
  margin-top: 0;
  margin-bottom: 2px;
  line-height: 1.1em;
  width: 108%;
  @media screen and (max-width: 767px) {
    margin: 16px 0 0 4px;
  }
`

const BetterLink = styled(Link)`
  text-decoration: none;
`

const A = styled.a`
  text-decoration: none;
`

const Hide = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const ReverseHide = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: inline;
  }
`
const Topic = styled.h4`
  :hover,
  :active {
    color: #ffd666;
  }
`
const Div = styled.div`
  padding-left: 25px;
  background: white;
  width: 108%;
  @media screen and (max-width: 767px) {
    margin: 0 -16px 0 -16px;
    border-bottom: double;
    padding-left: 16px;
    display: flex;
    flex-direction: row;
  }
`

const Col = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -4px;
`

const SubTitle = styled.h2`
  margin-top: 24px;
  text-align: left;
  line-height: 22px;
  font-size: 18px;
  font-style: italic;
  font-weight: lighter;
  margin-bottom: 6px;
  color: grey;
  width: 75%;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(limit: 2000) {
          tags: group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          templates: group(field: frontmatter___template) {
            fieldValue
            totalCount
          }
          countries: group(field: frontmatter___country) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <Div>
        <Row css={{ alignItems: "center" }}>
          <BetterLink to="/">
            <img
              src={logo}
              alt="Logo"
              width="39"
              height="50"
              css={{ margin: "8px 16px 8px 8px" }}
            />
          </BetterLink>
          <Col>
            <Name>{data.site.siteMetadata.title}</Name>
            <Row>
              <BetterLink
                to={`/`}
                css={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <h4>home</h4>
              </BetterLink>
              <h4>&middot;</h4>
              <BetterLink
                to="/about"
                css={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <h4>about</h4>
              </BetterLink>
              <h4>&middot;</h4>
              <A
                href="https://www.notion.so/elibentoncohen/911170cb13cb42b291e4801d553a71bc?v=7fa7960e9a5147168060fd09e7b0ae2a"
                css={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <h4>reading</h4>
              </A>
            </Row>
          </Col>
        </Row>
        <Row></Row>
        <Hide>
          <SubTitle>
            Traveling the world to understand the politics of digitally
            networked life
          </SubTitle>
        </Hide>
        <Hide>
          <div
            css={{
              marginTop: "36px",
              marginLeft: "-6px",
              display: "inline-block",
              lineHeight: "1.3em",
            }}
          >
            {data.allMdx.templates.map(template => (
              <BetterLink
                to={`/${kebabCase(template.fieldValue)}/`}
                css={{ textDecoration: "none" }}
              >
                <span class="tag-blue">
                  {upperFirst(template.fieldValue)} ({template.totalCount})
                </span>
              </BetterLink>
            ))}
            <Spacer height={10} xsHeight={5} />

            {data.allMdx.countries.map(country => (
              <BetterLink
                to={`/countries/${kebabCase(country.fieldValue)}/`}
                css={{ textDecoration: "none" }}
              >
                <span class="tag-green">
                  {country.fieldValue} ({country.totalCount})
                </span>
              </BetterLink>
            ))}
            <Spacer height={10} xsHeight={5} />
            {data.allMdx.tags.map(tag => (
              <BetterLink
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                css={{ textDecoration: "none" }}
              >
                <span class="tag-red">
                  {tag.fieldValue} ({tag.totalCount})
                </span>
              </BetterLink>
            ))}
          </div>
        </Hide>
      </Div>
    )}
  />
)
