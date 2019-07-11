import React from "react"
import "./layout.css"
import styled from "styled-components"
import Helmet from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"

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

export const TagSpan = styled.span`
  color: #999;
  @media screen and (max-width: 767px) {
     display: none;
  }
`

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    // const children = this.props.children
    return (
      <div>
        <Helmet>
          <meta
            name="description"
            content="Traveling the world to understand the politics of digitally networked life"
          />
        </Helmet>
        <Navbar />
        {children}
        <Footer />
      </div>
    )
  }
}
