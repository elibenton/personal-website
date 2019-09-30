import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"

import Nav from "../components/nav-left"

import Layout from "../components/layout"

class HomePrototype extends React.Component {
  render() {
    const posts = this.props.data.all.edges
    const featured = this.props.data.featured.edges

    return (
      <Layout>
        <h3
          css={{
            borderBottom: "double",
            margin: "0px 0px 6px 0px",
            paddingBottom: "4px",
          }}
        >
          reviewed
        </h3>
        {featured.map(feature => (
          <Row css={{ justifyContent: "space-between" }}>
            <h4 css={{ marginLeft: "8px" }}>
              <Link
                css={{ textDecoration: "none", fontWeight: "500" }}
                to={`/${feature.node.frontmatter.template}${feature.node.fields.slug}`}
              >
                {feature.node.frontmatter.title}
              </Link>
            </h4>
            <h4 css={{ marginRight: "8px" }}>
              {feature.node.frontmatter.date}
            </h4>
          </Row>
        ))}
        <h3
          css={{
            borderBottom: "double",
            margin: "24px 0px 6px 0px",
            paddingBottom: "4px",
          }}
        >
          on the shelf
        </h3>
        {posts.map(post => (
          <Row css={{ justifyContent: "space-between" }}>
            <h4 css={{ marginLeft: "8px" }}>
              <Link
                css={{ textDecoration: "none", fontWeight: "500" }}
                to={`/${post.node.frontmatter.template}${post.node.fields.slug}`}
              >
                {post.node.frontmatter.title}
              </Link>
            </h4>
            <h4 css={{ marginRight: "8px" }}>{post.node.frontmatter.date}</h4>
          </Row>
        ))}
        <Spacer height={140} xsHeight={40} />
      </Layout>
    )
  }
}

export default HomePrototype

export const pageQuery = graphql`
  query {
    all: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            city
            country
            date(formatString: "MM-DD-YYYY")
            description
            tags
            template
          }
          fields {
            slug
            month
          }
        }
      }
    }
    featured: allMdx(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { eq: "Title IX" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            city
            country
            date(formatString: "MM-DD-YYYY")
            description
            tags
            template
          }
          fields {
            slug
            month
          }
        }
      }
    }
  }
`
