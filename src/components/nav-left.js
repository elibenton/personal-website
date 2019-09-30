import React from "react"

import logo from "../../content/images/logo.gif"
import comp from "../../content/images/comp.png"
import copy from "../../content/images/copy.png"

import { Link, StaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"
import kebabCase from "lodash/kebabCase"

import styled from "styled-components"

const BetterLink = styled(Link)`
  text-decoration: none;
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
      <Col xsOffset={1} smOffset={1} mdOffset={1} lgOffset={1}>
        <h3
          css={{
            fontWeight: "600",
            textTransform: "none",
            fontSize: "22px",
            lineHeight: "1.1em",
            marginTop: "0",
          }}
        >
          Eli Benton Cohen
        </h3>
        <BetterLink to="/">
          <img
            src={logo}
            alt="Logo"
            width="115"
            height="150"
            css={{ marginTop: "10px", marginBottom: "35px" }}
          />
        </BetterLink>
        <div>
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
          <br />
          <h4 css={{ textTransform: "uppercase" }}>tags</h4>
          <h4 css={{ width: "80%" }}>
            {data.allMdx.group.map(tag => (
              <BetterLink
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                css={{ textDecoration: "none" }}
              >
                {tag.fieldValue} ({tag.totalCount}){", "}
              </BetterLink>
            ))}
          </h4>
          <br />
          <br />
          <h4>
            <span>
              <BetterLink href="https://github.com/elibenton/personal-website">
                Codebase
              </BetterLink>
              ,&nbsp;
              <BetterLink href="https://www.elibenton.co/sitemap.xml">
                Sitemap
              </BetterLink>
              , &&nbsp;
              <BetterLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC License
              </BetterLink>
            </span>
            <br />
            ©️{new Date().getFullYear()} Eli Cohen
          </h4>
        </div>
      </Col>
    )}
  />
)
