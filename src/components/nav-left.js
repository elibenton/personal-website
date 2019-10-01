import React from "react"
import logo from "../../content/images/logo.gif"
import Collapsible from "react-collapsible"
import { Link, StaticQuery, graphql } from "gatsby"
import { Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import kebabCase from "lodash/kebabCase"
import styled from "styled-components"

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
  }
`

const Divider = styled(Col)`
  @media screen and (max-width: 767px) {
    border-bottom: double;
  }
`
const Topic = styled.h4`
  :hover,
  :active {
    color: #ffd666;
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
      <Divider xsOffset={1} smOffset={1} mdOffset={1} lgOffset={1}>
        <h3
          css={{
            fontWeight: "600",
            textTransform: "none",
            fontSize: "22px",
            marginTop: "0",
            marginLeft: "4px",
          }}
        >
          Eli Benton Cohen
        </h3>
        <h4 css={{ fontStyle: "italic" }}>
          Traveling the world to understand the politics of digitally networked
          life
        </h4>
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
      </Divider>
    )}
  />
)
