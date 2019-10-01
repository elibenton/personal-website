import React from "react"
import logo from "../../content/images/logo.gif"
import logoStill from "../../content/images/tinhat_america.png"
import Collapsible from "react-collapsible"
import { Link, StaticQuery, graphql } from "gatsby"
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
const ReverseHide = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: inline;
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
  padding-left: 50px;
  @media screen and (max-width: 767px) {
    margin: 0 -16px 0 -16px;
    border-bottom: double;
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
    padding-left: 8px;
    align-items: center;
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
          <h4 css={{ fontStyle: "italic", width: "80%" }}>
            Traveling the world to understand the politics of digitally
            networked life
          </h4>
        </Hide>

        <BetterLink to="/">
          <Hide>
            <img
              src={logo}
              alt="Logo"
              width="115"
              height="150"
              css={{ marginTop: "50px", marginBottom: "35px" }}
            />
          </Hide>
          <ReverseHide>
            <img
              src={logoStill}
              alt="Logo"
              width="39"
              height="50"
              css={{
                marginTop: "16px",
                marginBottom: "8px",
                marginRight: "16px",
              }}
            />
          </ReverseHide>
        </BetterLink>

        <Container>
          <Hide>
            <BetterLink
              to="/about"
              css={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <h4>about</h4>
            </BetterLink>
            <BetterLink
              to="/"
              css={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <h4>reading</h4>
            </BetterLink>
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
              <div
                css={{
                  width: "92%",
                  display: "inline-block",
                  marginLeft: "4px",
                }}
              >
                {data.allMdx.group.map((tag, index) =>
                  index === data.allMdx.group.length - 1 ? (
                    <BetterLink
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      css={{ textDecoration: "none" }}
                    >
                      <span class="tag">
                        {tag.fieldValue} ({tag.totalCount})
                      </span>
                    </BetterLink>
                  ) : (
                    <BetterLink
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      css={{ textDecoration: "none" }}
                    >
                      <span class="tag">
                        {tag.fieldValue} ({tag.totalCount})
                      </span>
                      {"  "}
                    </BetterLink>
                  )
                )}
              </div>
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
