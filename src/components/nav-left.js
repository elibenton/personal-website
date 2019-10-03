import React from "react"
import logo from "../../content/images/logo.gif"
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
  line-height: 1.1em;
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
    margin-top: 16px;
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
  padding-left: 50px;
  background: white;
  @media screen and (max-width: 767px) {
    margin: 0 -16px 0 -16px;
    border-bottom: double;
    padding-left: 16px;
    display: flex;
    flex-direction: row;
  }
`

const InnerDiv = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

const InnerInnerDiv = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
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
        <ReverseHide>
          <BetterLink to="/">
            <img
              src={logo}
              alt="Logo"
              width="31"
              height="40"
              css={{ margin: "16px 12px 8px 8px" }}
            />
          </BetterLink>
        </ReverseHide>
        <InnerDiv>
          <Name>{data.site.siteMetadata.title}</Name>
          <Hide>
            <h4 css={{ fontStyle: "italic" }}>
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
          </BetterLink>
          <InnerInnerDiv>
            <BetterLink
              to="/about"
              css={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <h4>about</h4>
            </BetterLink>
            <A
              href="https://www.notion.so/elibentoncohen/911170cb13cb42b291e4801d553a71bc?v=7fa7960e9a5147168060fd09e7b0ae2a"
              css={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <h4>reading</h4>
            </A>
          </InnerInnerDiv>
        </InnerDiv>
        <Hide>
          <Collapsible
            easing="ease-in-out"
            open={true}
            transitionTime={200}
            trigger={
              <Topic css={{ textTransform: "uppercase", cursor: "pointer" }}>
                topics
              </Topic>
            }
          >
            <div
              css={{
                display: "inline-block",
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
      </Div>
    )}
  />
)
