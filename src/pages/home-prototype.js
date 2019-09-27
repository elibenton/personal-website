import React from "react"
import logo from "../../content/images/logo.gif"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"

class HomePrototype extends React.Component {
  render() {
    const posts = this.props.data.all.edges
    const featured = this.props.data.featured.edges

    return (
      <div>
        <Row>
          <Col
            xsOffset={0}
            xs={12}
            smOffset={0}
            sm={12}
            mdOffset={0}
            md={3}
            lgOffset={0}
            lg={3}
            css={{ marginTop: "3rem" }}
          >
            <img
              src={logo}
              alt="Logo"
              width="200"
              height="200"
              css={{ marginLeft: "50px" }}
            />
            <div css={{ marginLeft: "100px" }}>
              <h4>portfolio</h4>
              <h4>reading</h4>
              <h4>about</h4>
            </div>
          </Col>
          <Col
            xsOffset={1}
            xs={10}
            smOffset={1}
            sm={10}
            mdOffset={0}
            md={6}
            lgOffset={0}
            lg={6}
            css={{ marginTop: "9rem" }}
          >
            <h3
              css={{
                borderBottom: "double",
                margin: "0px 0px 6px 0px",
                paddingBottom: "4px",
              }}
            >
              featured
            </h3>
            {featured.map(feature => (
              <Row css={{ justifyContent: "space-between" }}>
                <h4 css={{ marginLeft: "8px" }}>
                  <Link
                    css={{ textDecoration: "none" }}
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
              recently
            </h3>
            {posts.map(post => (
              <Row css={{ justifyContent: "space-between" }}>
                <h4 css={{ marginLeft: "8px" }}>
                  <Link
                    css={{ textDecoration: "none" }}
                    to={`/${post.node.frontmatter.template}${post.node.fields.slug}`}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </h4>
                <h4 css={{ marginRight: "8px" }}>
                  {post.node.frontmatter.date}
                </h4>
              </Row>
            ))}
          </Col>
        </Row>
        <Spacer height={140} xsHeight={40} />
      </div>
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
            date(formatString: "MMMM DD, YYYY")
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
            date(formatString: "MMMM DD, YYYY")
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
