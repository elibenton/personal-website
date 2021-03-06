// Core Libraries
import React from "react"
import { Link } from "gatsby"

// Static Content
import logo from "../../content/images/logo.gif"

// Yarn Packages
import styled from "styled-components"
import { CopyToClipboard } from "react-copy-to-clipboard"

// Utilities and Ancillary Libraries
import { kebabCase } from "lodash"
import { FaLink, FaEnvelope } from "react-icons/fa"

const Title = styled.h4`
  font-size: 1.2em;
  align-self: center;
  padding-right: 15px;
  border-right: solid 2px;
  @media screen and (max-width: 767px) {
    font-size: 1.2em;
    margin: 0;
    border: none;
  }
`

const Nav = styled.div`
  top: 0;
  position: sticky;
  transition: top 0.2s;
  background-color: white;
  height: 55px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 2px;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    margin-left: -16px;
    padding-left: 16px;
    margin-right: -16px;
    padding-right: 16px;
  }
`
const NavLink = styled(Link)`
  text-decoration: none;
  /* color: black; */
  padding: 0 10px;
  @media screen and (max-width: 600px) {
    padding-left: 8px;
    padding-right: 5px;
  }
`
const Hide = styled.div`
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const Img = styled.img`
  margin: 16px 130px 8px 8px;
  @media screen and (max-width: 767px) {
    margin: 0 6px 0 2px;
  }
`
const Center = styled.div`
  display: inline-flex;
  flex-direction: row;
`

const StyledLink = styled.h3`
  margin: 0 2vw;
  align-content: center;
  display: flex;
  align-items: center;
`

const LinkImage = styled(CopyToClipboard)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

var prevScrollPos

class Navbar extends React.Component {
  state = { scrollingUp: true, value: "", copied: false }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll = () => {
    var currentScrollPos = window.pageYOffset
    if (prevScrollPos > currentScrollPos) {
      this.setState({ scrollingUp: true })
    } else {
      this.setState({ scrollingUp: false })
    }
    prevScrollPos = currentScrollPos
  }
  render() {
    const { title, published_at, siteUrl, slug, months, cities, regions, countries } = this.props

    // console.log(this.props)

    return (
      <Nav onScroll={this.handleScroll} style={{ top: this.state.scrollingUp ? "0px" : "-55px" }}>
        <NavLink to="/">
          <Img src={logo} alt="Logo" width="28" height="35" />
        </NavLink>
        <Center>
          <Title>{title}</Title>
          <Hide>
            <h5>
              <NavLink to={`/tag/${kebabCase(months)}/`}>{published_at}</NavLink>
            </h5>
            <h5>
              <NavLink to={`/tag/${kebabCase(regions)}`}>
                {cities}, {countries}
              </NavLink>
            </h5>
          </Hide>
        </Center>
        <Center>
          <Hide css={{ display: "flex", flexDirection: "row" }}>
            <LinkImage
              text={`${siteUrl}/post/${slug}`}
              onCopy={() => this.setState({ copied: true })}
            >
              <StyledLink>
                <a css={{ textDecoration: "none" }}>
                  {this.state.copied ? (
                    <div css={{ display: "flex", alignItems: "center" }}>
                      <span css={{ color: "black" }}>Link Copied&nbsp;&nbsp;</span> <FaLink />{" "}
                    </div>
                  ) : (
                    <div css={{ display: "flex", alignItems: "center" }}>
                      <span css={{ color: "white" }}>Link Copied&nbsp;&nbsp;</span> <FaLink />{" "}
                    </div>
                  )}
                </a>
              </StyledLink>
            </LinkImage>
            <a href="https://join.colanderworld.com/newsletter">
              <FaEnvelope css={{ position: "relative", top: "2px", marginRight: "2vw" }} />
            </a>
          </Hide>
        </Center>
      </Nav>
    )
  }
}

export default Navbar
