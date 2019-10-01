import React from "react"
import "./layout.css"
import styled from "styled-components"
import Helmet from "react-helmet"
import Nav from "./nav-left"
import { Row, Col, Grid } from "react-flexbox-grid"
import Spacer from "../utils/spacer"

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

const Divider = styled(Col)`
  z-index: 100;
  background-color: white;
  /* margin: 0 -8px 0 -8px !important; */
  /* padding: 0 50px 0 50px !important; */
  @media screen and (max-width: 767px) {
    /* padding: 0 8px 0 8px !important; */
    position: sticky;
    top: 0px;
  }
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet>
          <meta
            name="Eli Benton Cohen"
            content="Traveling the world to understand the politics of digitally networked life"
          />
        </Helmet>
        <Grid fluid css={{ backgroundColor: "white" }}>
          <Spacer height={100} xsHeight={0} />
          <Row>
            <Divider
              xs={12}
              xsOffset={0}
              sm={12}
              smOffset={0}
              md={4}
              mdOffset={0}
              lg={4}
              lgOffset={0}
            >
              <Nav />
            </Divider>
            <Col xs={12} sm={12} md={7} lg={7}>
              {children}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
