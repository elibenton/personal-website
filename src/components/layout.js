import React from "react"
import "./layout.css"

import Helmet from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet>
          {/* <meta name="description" content={config.siteDescription} /> */}
        </Helmet>
        <Navbar />
        {children}
        <Footer />
      </div>
    )
  }
}
