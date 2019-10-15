import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import styled from "styled-components"
import Nav from "../components/nav-left"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"

const BetterLink = styled(Link)`
  text-decoration: none;
`

const CustomRow = styled(Row)`
  margin: 0 0 0 0 !important;
`
const Divider = styled(Col)`
  z-index: 100;
  @media screen and (max-width: 767px) {
    position: sticky;
    top: 0px;
  }
`

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={`Topics | ${title}`} />
    <Spacer height={60} xsHeight={0} />

    <CustomRow>
      <Divider xs={12} sm={12} md={3} lg={3}>
        <Nav />
      </Divider>
      <Col xs={12} sm={12} md={7} lg={6}>
        <Spacer height={0} xsHeight={10} />
        <div
          css={{
            display: "inline-block",
            lineHeight: "1.2em",
          }}
        >
          {group.map((tag, index) =>
            index === group.length - 1 ? (
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
      </Col>
    </CustomRow>
  </div>
)

export default TagsPage

export const pageQuery = graphql`
  query {
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
`
