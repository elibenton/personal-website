import React from "react"
import "./layout.css"
import styled from "styled-components"
import Helmet from "react-helmet"
import Nav from "./nav-left"
import Footer from "./footer"

import { Row, Col, Grid } from "react-flexbox-grid"

export const LayoutRow = styled(Row)`
  display: inline-flex;
`

export const TagText = styled.p`
  color: #999;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1em;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
  display: inline;
  :hover,
  :active {
    color: #ffd666;
  }
`

export const TemplateText = styled.p`
  color: #999;
  font-family: Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 13px;
  line-height: 1em;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
  display: inline;
  :hover,
  :active {
    color: #ffd666;
  }
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet>
          <meta
            name="description"
            content="Traveling the world to understand the politics of digitally networked life"
          />
        </Helmet>
        <Grid fluid>
          <Row xs={12} sm={12} md={3} lg={3} css={{ paddingLeft: "50px" }}>
            <Col css={{ marginTop: "4em" }}>
              <Nav />
            </Col>
            <Col
              xs={12}
              sm={12}
              mdOffset={1}
              md={8}
              lgOffset={1}
              lg={8}
              css={{
                marginTop: "4em",
              }}
            >
              {children}
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}
