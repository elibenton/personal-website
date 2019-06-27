import React from "react"
import "./layout.css"

import Helmet from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"

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
