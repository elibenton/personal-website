import React from "react"
import logo from "../../content/images/logo.gif"
import Collapsible from "react-collapsible"
import { Link, StaticQuery, graphql } from "gatsby"
import { Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import kebabCase from "lodash/kebabCase"
import styled from "styled-components"

const Name = styled.h3`
  display: flex;
  font-weight: 600;
  text-transform: none;
  font-size: 22px;
  margin-top: 0;
  margin-left: 4px;
  @media screen and (max-width: 767px) {
    margin-bottom: 4px;
    margin-top: 20px;
    margin-left: 8px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 4px;
  }
`
const Topic = styled.h4`
  :hover,
  :active {
    color: #ffd666;
  }
`
const Div = styled.div`
  @media screen and (max-width: 767px) {
    margin: 0 -16px 0 -16px;
    border-bottom: double;
  }
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
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <Div>
        <Name>Eli Benton Cohen</Name>
        <Hide>
          <h4 css={{ fontStyle: "italic" }}>
            Traveling the world to understand the politics of digitally
            networked life
          </h4>
        </Hide>

        <Hide>
          <BetterLink to="/">
            <img
              src={logo}
              alt="Logo"
              width="115"
              height="150"
              css={{ marginTop: "50px", marginBottom: "35px" }}
            />
          </BetterLink>
        </Hide>
        <Container>
          <BetterLink
            to="/"
            css={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            <h4>portfolio</h4>
          </BetterLink>
          <BetterLink
            to="/reading"
            css={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            <h4>reading</h4>
          </BetterLink>
          <BetterLink
            to="/about"
            css={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            <h4>about</h4>
          </BetterLink>
          <Hide>
            <Collapsible
              easing="ease-in-out"
              open={false}
              transitionTime={200}
              trigger={
                <Topic css={{ textTransform: "uppercase", cursor: "pointer" }}>
                  topics
                </Topic>
              }
            >
              <h4 css={{ width: "80%" }}>
                {data.allMdx.group.map((tag, index) =>
                  index === data.allMdx.group.length - 1 ? (
                    <BetterLink
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      css={{ textDecoration: "none" }}
                    >
                      {tag.fieldValue} ({tag.totalCount})
                    </BetterLink>
                  ) : (
                    <BetterLink
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      css={{ textDecoration: "none" }}
                    >
                      {tag.fieldValue} ({tag.totalCount}){", "}
                    </BetterLink>
                  )
                )}
              </h4>
            </Collapsible>
            <br />
            <br />
            <h4>
              <span>
                <A href="https://github.com/elibenton/personal-website">
                  Codebase
                </A>
                ,&nbsp;
                <A href="https://www.elibenton.co/sitemap.xml">Sitemap</A>,
                &&nbsp;
                <A href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                  CC License
                </A>
              </span>
              <br />
              ©️{new Date().getFullYear()} Eli Cohen
            </h4>
          </Hide>
          <Spacer height={80} xsHeight={0} />
        </Container>
      </Div>
    )}
  />
)
