import React from "react"
import logo from "../../content/images/logo.gif"
import { Link, graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Spacer from "../utils/spacer"

class Nav extends React.Component {
  render() {
    const tags = this.props.data
    console.log(tags)
    return (
      <Row>
        <Col
          xsOffset={1}
          xs={11}
          smOffset={1}
          sm={11}
          mdOffset={1}
          md={3}
          lgOffset={1}
          lg={3}
        >
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
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              width="115"
              height="150"
              css={{ marginTop: "10px", marginBottom: "35px" }}
            />
          </Link>
          <div>
            <Link
              to="/"
              css={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <h4>portfolio</h4>
            </Link>
            <Link
              to="/reading"
              css={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <h4>reading</h4>
            </Link>
            <Link
              to="/about"
              css={{ textDecoration: "none", textTransform: "uppercase" }}
            >
              <h4>about</h4>
            </Link>
          </div>
        </Col>
        <Spacer offset={100} smOffset={30} />
      </Row>
    )
  }
}

export default Nav

export const pageQuery = graphql`
  query {
    tags: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            tags
            template
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
